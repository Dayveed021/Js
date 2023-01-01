function sendMail() {
    var params = {
        name: document.getElementById("name").value,
        number: document.getElementById("number").value,
        message: document.getElementById("message").value,
        from_email: document.getElementById("from_email").value,
    };

    const serviceID = "service_lpcqp38";
    const templateID = "template_feg2j2s";

    emailjs.send(serviceID, templateID, params).then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("number").value = "";
        document.getElementById("message").value = "";
        document.getElementById("from_email").value = "";
        console.log(res);
        alert("your message has been sent successfully");
    })
        .catch((err) => console.log(err));
}