document.getElementById("surveyForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission and page reload

  // Gather form data
  const formData = new FormData(e.target);
  
  let emailBody = '';
  
  formData.forEach((value, key) => {
    emailBody += `${key}: ${value}\n`;
  });

  // Create mailto link
  const mailToLink = `mailto:inderkiranbhamra2003@gmail.com?subject=DashDrobe%20Survey%20Response&body=${encodeURIComponent(emailBody)}`;
  
  // Open mailto link
  window.location.href = mailToLink;
});
