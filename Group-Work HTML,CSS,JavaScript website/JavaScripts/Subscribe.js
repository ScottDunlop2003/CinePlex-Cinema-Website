// ---------------- EMAIL SUBSCRIPTION ----------------

document.addEventListener("DOMContentLoaded", () => 
    {
  const subscribeBtn = document.getElementById("subscribeBtn");
  const emailInput = document.getElementById("emailInput");

  if (subscribeBtn && emailInput) {
    subscribeBtn.addEventListener("click", () =>
         {
      const email = emailInput.value.trim();

      // Validate email format
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      // ---------------- INVALID EMAIL ----------------
      if (!isValid) 
        {
        // Add error styling using CSS class under the name "input-error"
        emailInput.classList.add("input-error");

        // Show error message
        emailInput.placeholder = "Please enter a valid email";
        emailInput.value = "";

        // Remove error styling after 2.5 seconds
        setTimeout(() => 
            {
          emailInput.classList.remove("input-error");
          emailInput.placeholder = "Your Email Address";
        }, 2500);

        return;
      }

      // ---------------- VALID EMAIL ----------------

      subscribeBtn.textContent = "✓ Subscribed!";
      subscribeBtn.classList.add("success");

      emailInput.value = email;
      emailInput.classList.add("success");
    });
  }
});
