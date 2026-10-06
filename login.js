const USERS_KEY = "users";
/* =========================================
   GET USERS
========================================= */
function getUsers() {
    const data = localStorage.getItem(USERS_KEY);
    if (!data) {
        return [];
    }
    try {
        return JSON.parse(data);
    } catch {
        return [];
    }
}
/* =========================================
   REMOVE EXPIRED USERS
========================================= */
function removeExpiredUsers() {

    const users = getUsers();

    const currentTime = Date.now();

    const validUsers = users.filter(user => {
        return currentTime < user.expiry;

    });

    localStorage.setItem(
        USERS_KEY,
        JSON.stringify(validUsers)
    );
}

/* =========================================
   SIGNUP
========================================= */
const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Remove users whose 5 minutes have finished
        removeExpiredUsers();
        const name = document.getElementById("signupName").value.trim();
        const username = document.getElementById("signupUsername").value.trim();
        const password = document.getElementById("signupPassword").value;
        const message = document.getElementById("signupMessage");
        let users = getUsers();
        /* Check username already exists */
        const existingUser = users.find(
            user => user.username === username
        );
        if (existingUser) {
            message.textContent ="Username already exists!";
            message.style.color = "red";
            return;
        }

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (!emailPattern.test(username)) {
    signupMessage.textContent = "Please enter a valid email address.";
    signupMessage.style.color = "red";
    return;
}

const passwordPattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9]).{8,}$/;

if (!passwordPattern.test(password)) {
    signupMessage.textContent =
        "Password must have  1 capital letter, 1 number and 1 special character.";
    signupMessage.style.color = "red";
    return;
}


        /* 5 minutes */
        const fiveMinutes =
            5 * 60 * 1000;
        /* Create user */
        const newUser = {
            name: name,
            username: username,
            password: password,
            expiry: Date.now() + fiveMinutes
        };
        /* Add user */
        users.push(newUser);
        /* Save users */
        localStorage.setItem(
            USERS_KEY,
            JSON.stringify(users)
        );
        message.textContent ="Registration successful!";
        message.style.color = "green";
        signupForm.reset();
        /* Go to login */
        setTimeout(() => {
            window.location.href = "login.html";
        }, 1000);
    });
}
/* =========================================
   LOGIN
========================================= */
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Remove expired users first
        removeExpiredUsers();
        const username = document.getElementById("loginUsername").value.trim();
        const password = document.getElementById("loginPassword").value;
        const message = document.getElementById("loginMessage");
        const users = getUsers();
        /* Find user */
        const user = users.find(
            item =>
                item.username === username &&
                item.password === password
        );
        if (!user) {
            message.textContent ="Invalid username or password!";
            message.style.color = "red";
            return;
        }
        /* Login successful */
        sessionStorage.setItem(
            "loggedInUser",
            JSON.stringify({
                name: user.name,
                username: user.username
            })
        );
        message.textContent ="Login successful!";
        message.style.color = "green";
        setTimeout(() => {
            window.location.href = "index.html";
        }, 500);
    });
}
/* =========================================
   HOME PAGE
========================================= */
const welcome = document.getElementById("welcome");
if (welcome) {
    const loggedUser = sessionStorage.getItem("loggedInUser");
    if (!loggedUser) {
        window.location.href = "login.html";
    } else {
        const user = JSON.parse(loggedUser);
        welcome.textContent =
            "Welcome " + user.name;
    }
}
/* =========================================
   LOGOUT
========================================= */
const logoutBtn =
    document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", function() {
        sessionStorage.removeItem("loggedInUser");
        window.location.href = "login.html";
    });
}
/* =========================================
   CHECK EXPIRED USERS
========================================= */
removeExpiredUsers();


/* =========================================
   SHOW / HIDE SIGNUP PASSWORD
========================================= */

const signupPassword =
    document.getElementById("signupPassword");

const signupShowPassword =
    document.getElementById("signupShowPassword");

if (signupPassword && signupShowPassword) {

    signupShowPassword.addEventListener("click", function () {

        if (signupPassword.type === "password") {

            signupPassword.type = "text";
            signupShowPassword.textContent = "hide";

        } else {

            signupPassword.type = "password";
            signupShowPassword.textContent = "show";

        }

    });
}


/* =========================================
   SHOW / HIDE LOGIN PASSWORD
========================================= */

const loginPassword =
    document.getElementById("loginPassword");

const loginShowPassword =
    document.getElementById("loginShowPassword");

if (loginPassword && loginShowPassword) {

    loginShowPassword.addEventListener("click", function () {

        if (loginPassword.type === "password") {

            loginPassword.type = "text";
            loginShowPassword.textContent = "hide";

        } else {

            loginPassword.type = "password";
            loginShowPassword.textContent = "Show";

        }

    });
}

