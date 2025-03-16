const themeSelector = document.querySelector("#theme-selector")
function changeTheme() {

    const currentTheme = themeSelector.value;
    const imageElement = document.getElementById("Byu-blue")


    if (currentTheme === "dark") {
        document.body.classList.add("dark");
        imageElement.src = "byui-logo_white.png";

    } else {
        document.body.classList.remove("dark");
        imageElement.src = "byui-logo_blue.webp";
    }
}

// add an event listener to the themeSelector element here.
// Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);