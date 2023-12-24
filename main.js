const loginForm = document.querySelector(".login-form");
const Uname = document.querySelector(".Uname");
const Pass = document.querySelector(".Pass");

const hdlLogin = (e) => {
  e.preventDefault();
  let allInput = loginForm.elements;

  // Validateusername
  const usernameInput = document.querySelector("#username");
  const Username = usernameInput.value.trim();
  if (Username.length > 3 && !/^\d/.test(Username) && !/\s/.test(Username)) {
    Uname.textContent = "";
    usernameInput.style.borderColor = "initial";
  } else {
    usernameInput.style.borderColor = "red";
    Uname.textContent = "";
    Uname.style.color = "red";
    return;
  }

  // Validate password
  const passwordInput = document.querySelector("#password");
  const Password = passwordInput.value.trim();
  if (Password.length > 4 && /\d/.test(Password) && /[a-zA-Z]/.test(Password)) {
    Pass.textContent = "";
    passwordInput.style.borderColor = "initial";
  } else {
    passwordInput.style.borderColor = "red";
    Pass.textContent = "";
    Pass.style.color = "red";
    return;
  }

  const selectInput = document.querySelector("#role");
  if (selectInput.value !== "") {
    selectInput.style.borderColor = "initial";
  } else {
    selectInput.style.borderColor = "red";
    return;
  }
  if (validateLogin(Username, Password)) {
    alert("Login successful");
    window.location.href = "https://www.example.com";
  } else {
    alert(`ข้อมูลไม่ถูกต้องกรุณาป้อนใหม่อีกครั้งนะจ๋ะ `);
  }
};

function validateLogin(username, password) {
  const users = [{ username: "Gun", password: "G0203" }];
  return users.some(
    (user) => user.username === username && user.password === password
  );
}

loginForm.addEventListener("submit", hdlLogin);