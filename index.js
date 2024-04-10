// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to relevant DOM elements
  const cardForm = document.getElementById("cardForm");
  const modal = document.getElementById("modal");
  const certificateContent = document.getElementById("certificateContent");
  const closeModal = document.querySelector(".close");

  // Hide the modal initially
  modal.style.display = "none";

  // Handle form submission
  cardForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get input values
    const studentNameInput = document.getElementById("studentName");
    const personalMessageInput = document.getElementById("personalMessage");
    const courseNameInput = document.getElementById("courseName");

    // Trim input values and provide default value for courseName if empty
    const studentName = studentNameInput.value.trim();
    const personalMessage = personalMessageInput.value.trim();
    const courseName = courseNameInput ? courseNameInput.value : "a course";

    // Validate input fields
    if (studentName === "" || personalMessage === "") {
      alert("Please fill in all fields");
      return;
    }

    // Generate certificate content dynamically
    certificateContent.innerHTML = `
          <h2>Certificate of Achievement</h2>
          <p>This is to certify that</p>
          <h3>${studentName}</h3> 
          <p>Has almost completed the</p>
          <h4>${courseName} course!</h4>
          <p>with legendary perseverance and world-class badassery for never giving up🏆</p>
          <img src="./logo.png" alt="logo" style="margin-top: 20px; max-height: 100px;">
          <p>${personalMessage}</p>
        `;

    // Display the modal
    modal.style.display = "block";

    // Clear the form inputs
    studentNameInput.value = "";
    personalMessageInput.value = "";
    if (courseNameInput) courseNameInput.value = "";
  });

  // Close the modal when the close button is clicked
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close the modal when clicking outside the modal
  window.addEventListener("click", function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  });

  // Change cursor to pointer for close button
  closeModal.style.cursor = "pointer";
});
