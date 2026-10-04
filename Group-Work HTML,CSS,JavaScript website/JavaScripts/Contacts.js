// ---------------- CONTACT FORM FUNCTIONALITY ----------------

document.addEventListener("DOMContentLoaded", () => {
  // Get elements from the page useing the IDs
  const form = document.getElementById("cineplexContact"); // Contact form
  const success = document.getElementById("form-success"); // Success message container
  const message = document.getElementById("message"); // Message textarea
  const counter = document.getElementById("char-counter"); // Character counter display

  // Hide the success message when the page first loads
  if (success) success.style.display = "none";

  // ---------------- CHARACTER COUNTER ----------------

  // Check both message box and counter exist
  if (message && counter) {
    // Update character count whenever user types
    message.addEventListener("input", () => {
      const count = message.value.length; // Current number of characters
      const limit = 300; // Maximum allowed characters

      // Display current count
      counter.textContent = `${count} / ${limit} characters`;

      // If user exceeds limit, show error styling
      if (count > limit) {
        counter.classList.add("error"); // Highlight counter
        message.classList.add("error"); // Highlight textarea
      } else {
        // Remove error styling if back within limit
        counter.classList.remove("error");
        message.classList.remove("error");
      }
    });
  }

  // ---------------- FORM SUBMISSION ----------------

  // Check form and success message exist
  if (form && success) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent page refresh

      // Hide the form after submission
      form.style.display = "none";

      // Show confirmation message
      success.style.display = "block";
    });
  }
});
