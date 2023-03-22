/* DILU.JS 4.15 March 2023 by Dilushanka for Helalk */
/*!
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

// Get references to the modal and its contents
var modal = document.querySelector(".modal");
var modalContent = document.querySelector(".modal-content");
var errorMessage = document.querySelector("#error-message");
var closeBtn = document.querySelector(".close");
var generateBtn = document.querySelector("button");
var resultDiv = document.querySelector("#result");
var phoneDisplay = document.querySelector("#phone-number-display");

// Function to show the modal with an error message
function showError(message) {
  errorMessage.textContent = message;
  modal.style.display = "block";
}

// Function to hide the modal when the user clicks the close button
function closeModal() {
  modal.style.display = "none";
}

// Function to generate the WhatsApp URL
function generateUrl() {
  var phoneNumber = document.getElementById("phone-number").value;
  var countryCode = document.getElementById("country-code").value;

  // remove any non-digit characters from the phone number
  phoneNumber = phoneNumber.replace(/\D/g, "");

  // check if the phone number is valid
  var regex = /^[0-9]{7,15}$/; // pattern for a valid phone number
  if (!regex.test(phoneNumber)) {
    showError("Please enter a valid phone number.");
    return;
  }
  if (countryCode == "") {
    showError("Please select a country code");
    return;
  }

  // concatenate the country code and phone number
  var whatsappNumber = countryCode + phoneNumber;

  // generate the WhatsApp URL
  var whatsappUrl = "https://api.whatsapp.com/send/?phone=" + whatsappNumber + "&text&type=phone_number&app_absent=0";

  // display the result to the user as a link
  var whatsappLink = document.getElementById("whatsapp-link");
  whatsappLink.href = whatsappUrl;
  whatsappLink.textContent = "Click to message";

  // show the phone number with the country code to the user
  phoneDisplay.textContent = "Your Number: +" + countryCode + " " + phoneNumber;

  // hide the result div and show the generate button
  resultDiv.style.display = "block";
  generateBtn.style.display = "none";
}

// Add event listeners to the modal and its contents
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", function(event) {
  if (event.target == modalContent || event.target == modal) {
    closeModal();
  }
});

// Add event listener to the Generate button
generateBtn.addEventListener("click", generateUrl);

