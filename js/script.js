// Celestia Residency JavaScript

document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to Celestia Residency");

    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            console.log(this.textContent + " page clicked");
        });
    });
});

function calculatePrice() {

    let roomPrice = document.getElementById("roomType").value;

    let days = document.getElementById("days").value;

    let total = roomPrice * days;

    document.getElementById("totalPrice").innerHTML =
        "Total Price: ₹" + total.toLocaleString("en-IN");

}