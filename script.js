function sendMail() {
	document
	  .getElementById("contact-form")
	  .addEventListener("submit", function (event) {
		event.preventDefault();
		const name = document.getElementById("name").value;
		const email = document.getElementById("email").value;
		const message = document.getElementById("message").value;
  
		emailjs
		  .send("service_iyxdw1p", "template_ywnt4ne", {
			from_name: name,
			from_email: email,
  
			message: message,
		  })
		  .then(
			function () {
			  document.getElementById("alert").classList.remove("d-none");
			  document.getElementById("contact-form").reset();
			},
			function (error) {
			  console.log("FAILED...", error);
			}
		  );
	  });
  }