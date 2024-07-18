document.getElementById('signup-form').addEventListener('submit',function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    if(email) {
        alert(`Thank you for signing up! Special offers will be sent to ${email}`);
        document.getElementById('email').value = '';
    }
})