




/**
 * Toggle the theme
 */
const body = document.querySelector("body"),
    modeToggle = document.querySelector(".dark-light");
modeToggle.addEventListener("click", () => {
    modeToggle.classList.toggle("active");
    body.classList.toggle("dark");

    // js code to keep user selected mode even page refresh or file reopen
    if (!body.classList.contains("dark")) {
        localStorage.setItem("mode", "light-mode");
    } else {
        localStorage.setItem("mode", "dark-mode");
    }
});


/**
 * From validation section
 */
var state = false;
function toggle() {
    if (state) {
        document.getElementById("password").setAttribute("type", "password");
        document.getElementById("eye").setAttribute("class", "fi fi-rr-eye");
        document.getElementById("eye").style.color = "#757575";
        state = false;
    } else {
        document.getElementById("password").setAttribute("type", "text");
        document.getElementById("eye").setAttribute("class", "fi fi-rr-eye-crossed");
        document.getElementById("eye").style.color = "var(--color)";
        state = true;
    }
};

var state1 = false;
function toggle1() {
    if (state1) {
        document.getElementById("Cpassword").setAttribute("type", "password");
        document.getElementById("Ceye").setAttribute("class", "fi fi-rr-eye");
        document.getElementById("Ceye").style.color = "#757575";
        state1 = false;
    } else {
        document.getElementById("Cpassword").setAttribute("type", "text");
        document.getElementById("Ceye").setAttribute("class", "fi fi-rr-eye-crossed");
        document.getElementById("Ceye").style.color = "var(--color)";
        state1 = true;
    }
};
