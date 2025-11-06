// var professions = ["Web Developer.", "Programmer."];
// var currentProfessionIndex = 0;

// function changeProfession() {
//     var professionElement = document.getElementById("profession");
//     currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
//     professionElement.textContent = professions[currentProfessionIndex];
// }

// setInterval(changeProfession, 3000);
var professions = ["Web Developer.", "Programmer."];
var currentProfessionIndex = 0;
var charIndex = 0;
var isDeleting = false;

function typeProfession() {
    var professionElement = document.getElementById("typed-text");
    var currentProfession = professions[currentProfessionIndex];

    if (isDeleting) {
        // Remove a letter
        professionElement.textContent = currentProfession.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
            setTimeout(typeProfession, 500); // Delay before typing the next profession
        } else {
            setTimeout(typeProfession, 100); // Speed while erasing
        }
    } else {
        // Add a letter
        professionElement.textContent = currentProfession.substring(0, charIndex++);
        if (charIndex > currentProfession.length) {
            isDeleting = true;
            setTimeout(typeProfession, 2000); // Delay before deleting
        } else {
            setTimeout(typeProfession, 150); // Speed while typing
        }
    }
}

// Start the typing effect when the DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('.login-form-container');
    const loginBtn = document.querySelector('#talk-btn');
    const closeLoginBtn = document.querySelector('#close-login-btn');

    loginBtn.onclick = () => {
        loginForm.classList.toggle('active');
    };

    closeLoginBtn.onclick = () => {
        loginForm.classList.remove('active');
    };
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    // Prevent form submission if there are errors
    event.preventDefault();

    // Get form elements
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var subject = document.getElementById('subject');
    var message = document.getElementById('message');

    // Simple custom validation
    if (!name.value || !email.value || !subject.value || !message.value) {
        alert("All fields are required.");
        return;
    }

    if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // If everything is valid, submit the form
    alert("Message sent successfully!");
    this.submit();  // This is a placeholder. You may want to send the data via AJAX or to a backend.
});

// Simple email validation function
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
AOS.init();
document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.getElementById('github-progress');
    
    // Setting up Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Start incrementing progress bar
                let width = 0;
                const interval = setInterval(() => {
                    if (width >= 75) {
                        clearInterval(interval);
                    } else {
                        width++;
                        progressBar.style.width = width + '%';
                        progressBar.textContent = width + '%';
                    }
                }, 20); // Adjust speed by changing the interval (milliseconds)
                observer.unobserve(entry.target); // Stop observing once it's triggered
            }
        });
    }, { threshold: 0.5 }); // Trigger when at least 50% of the element is in the viewport

    // Start observing the progress bar
    observer.observe(progressBar);
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for now
    var message = document.getElementById('message').value;
    var email = document.getElementById('email').value;

    // Check if message is empty
    if (message.trim() === '') {
        alert('Please enter a message.');
    } else if (email.trim() === '') {
        alert('Please enter an email address.');
    } else if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
    } else {
        alert('Message Sent!');
        // Add form submission logic here (e.g., send data via AJAX)
    }
});

// Simple email validation function
function validateEmail(email) {
    var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}
