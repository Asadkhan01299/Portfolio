function sendMail() {
    let params = {
name: document.getElementById("name").value,
email: document.getElementById("email").value,
subject: document.getElementById("subject").value,
message: document.getElementById("message").value,
   }
   emailjs.send("service_rl70flc","template_6b1lusi",params).then(alert("Email Sent!!"));
}