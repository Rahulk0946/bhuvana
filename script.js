(function() {
    // Replace with your Public Key from EmailJS Account
    emailjs.init("YOUR_PUBLIC_KEY");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const statusMsg = document.getElementById('status-msg');
    statusMsg.innerText = "Sending...";
    statusMsg.classList.remove('hidden', 'text-red-500', 'text-green-500');

    // These IDs come from your EmailJS Dashboard
    const serviceID = 'YOUR_SERVICE_ID';
    const templateID = 'YOUR_TEMPLATE_ID';

    emailjs.sendForm(serviceID, templateID, this)
        .then(function() {
            statusMsg.innerText = "Inquiry sent successfully!";
            statusMsg.classList.add('text-green-500');
            document.getElementById('contact-form').reset();
        }, function(error) {
            statusMsg.innerText = "Failed to send. Please try again.";
            statusMsg.classList.add('text-red-500');
            console.log('FAILED...', error);
        });
});