document.getElementById("surveyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    let emailBody = '';

    formData.forEach((value, key) => {
        if (Array.isArray(value)) {
            emailBody += `${key}: ${value.join(', ')}\n`;  // Handle arrays (e.g., checkboxes)
        } else {
            emailBody += `${key}: ${value}\n`;
        }
    });

    const subject = "DashDrobe Survey Response";
    const recipient = "inderkiranbhamra2003@gmail.com";
    const body = encodeURIComponent(emailBody); // URL encode the body

    let mailToLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailToLink;
});
