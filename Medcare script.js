// Script for MedCare Clinic Website

// Example: Smooth scrolling for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example: Form validation (for appointment booking form)
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    
    if (name === "" || email === "" || phone === "") {
        alert("All fields are required.");
        return false;
    }
    alert("Appointment booked successfully!");
    return true;
}

// You can add more interactive functions here as needed
