document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields!");
    } else if (!email.includes("@")) {
        alert("Please enter a valid email!");
    } else {
        alert("Thank you! We will contact you soon.");
        this.reset();
    }
});
