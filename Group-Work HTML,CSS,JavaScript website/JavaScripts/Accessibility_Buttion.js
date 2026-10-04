// ---------------- High contrast and text resize----------------

document.addEventListener("DOMContentLoaded", () => 
    {
  // Get accessibility buttons from navigation
  const contrastBtn = document.getElementById("contrastBtn");
  const textResizeBtn = document.getElementById("textResizeBtn");

  // ---------------- LOAD SAVED USER PREFERENCES ----------------
  // Check localStorage and re-apply settings when page loads

  if (localStorage.getItem("cineplexContrast") === "active") 
    {
    document.body.classList.add("high-contrast");
  }

  if (localStorage.getItem("cineplexLargeFont") === "active") 
    {
    document.body.classList.add("large-font");
  }

  // ---------------- HIGH CONTRAST TOGGLE ----------------

  // Check if the button exists on this page
  if (contrastBtn) 
    {
    // Add click event to toggle high contrast mode
    contrastBtn.addEventListener("click", () =>
         {
      // Toggle the 'high-contrast' class on the body
      document.body.classList.toggle("high-contrast");

      // Save user preference in localStorage
      const isActive = document.body.classList.contains("high-contrast");
      localStorage.setItem(
        "cineplexContrast",
        isActive ? "active" : "inactive",
      );

      // Update button text
      contrastBtn.textContent = isActive ? "Normal Mode" : "High Contrast";
    });
  }

  // ---------------- TEXT RESIZE TOGGLE ----------------

  if (textResizeBtn) 
    {
    textResizeBtn.addEventListener("click", () =>
         {
      // Toggle larger font mode
      document.body.classList.toggle("large-font");

      // Save preference
      const isActive = document.body.classList.contains("large-font");
      localStorage.setItem(
        "cineplexLargeFont",
        isActive ? "active" : "inactive",
      );
    });
  }
});
