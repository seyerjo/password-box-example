const boxPass = document.querySelector(".box-password");
const eyeIcon = document.querySelector(".bx");

// Clicking on the eye icon displays or hides the password text and change the icon
eyeIcon.addEventListener("click", e => {
    if (boxPass.type === "password") {
        boxPass.type = "text";
        eyeIcon.classList.remove("bx-show-alt");
        eyeIcon.classList.add("bx-hide");
    } else {
        boxPass.type = "password"
        eyeIcon.classList.add("bx-show-alt");
        eyeIcon.classList.remove("bx-hide");
    }
})