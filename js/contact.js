const form = document.querySelector("form");
const message = document.getElementById("success-message");

form.addEventListener("submit", function(e){

    e.preventDefault();

    message.style.display = "block";

    form.reset();

    setTimeout(() => {
        message.style.display = "none";
    }, 4000);

});