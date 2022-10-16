const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrMsg = document.getElementById("login-err-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "user@example.com" && password === "passkey") {
        alert("You have successfully logged in.");
        location.reload();
    } else {
        loginErrMsg.style.opacity = 1;
    }
})