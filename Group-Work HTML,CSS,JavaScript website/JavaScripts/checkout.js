// ---------------- CHECKOUT PAGE LOGIC ----------------

document.addEventListener("DOMContentLoaded", () => {
  // ---------------- LOAD BOOKING DETAILS ----------------

  const movie = sessionStorage.getItem("checkout_movie") || "Unknown Film";
  const time = sessionStorage.getItem("checkout_time") || "--:--";
  const pricePerTicket = 9.99;
  let qty = 1;

  const bookingSummary = document.getElementById("bookingSummary");
  if (bookingSummary) {
    bookingSummary.innerHTML = `<span>${movie}</span> &mdash; ${time}`;
  }

  // ---------------- TICKET QUANTITY ----------------

  function updateTotal() {
    const totalEl = document.getElementById("totalPrice");
    if (totalEl) {
      totalEl.textContent = `£${(qty * pricePerTicket).toFixed(2)}`;
    }
  }

  function changeQty(delta) {
    qty = Math.max(1, Math.min(10, qty + delta));
    const qtyEl = document.getElementById("qty");
    if (qtyEl) qtyEl.textContent = qty;
    updateTotal();
  }

  document
    .getElementById("qtyMinus")
    ?.addEventListener("click", () => changeQty(-1));
  document
    .getElementById("qtyPlus")
    ?.addEventListener("click", () => changeQty(1));

  updateTotal();

  // ---------------- INPUT FORMATTING ----------------

  const cardInput = document.getElementById("cardInput");
  if (cardInput) {
    cardInput.addEventListener("input", function () {
      this.value = this.value
        .replace(/\D/g, "")
        .replace(/(.{4})/g, "$1 ")
        .trim();
    });
  }

  const expiryInput = document.getElementById("expiryInput");
  if (expiryInput) {
    expiryInput.addEventListener("input", function () {
      this.value = this.value
        .replace(/\D/g, "")
        .replace(/^(\d{2})(\d)/, "$1/$2");
    });
  }

  // ---------------- VALIDATION ----------------

  function showError(inputId, message) {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.classList.add("input-error");

    const existing = document.getElementById(inputId + "-error");
    if (existing) existing.remove();

    const errorEl = document.createElement("p");
    errorEl.id = inputId + "-error";
    errorEl.textContent = message;
    errorEl.style.color = "var(--accent-red)";
    errorEl.style.fontSize = "0.75rem";
    errorEl.style.marginTop = "0.3rem";
    input.parentNode.appendChild(errorEl);
  }

  function clearError(inputId) {
    document.getElementById(inputId)?.classList.remove("input-error");
    document.getElementById(inputId + "-error")?.remove();
  }

  ["nameInput", "emailInput", "cardInput", "expiryInput", "cvvInput"].forEach(
    (id) => {
      document
        .getElementById(id)
        ?.addEventListener("input", () => clearError(id));
    },
  );

  function validateForm() {
    let isValid = true;

    const name = document.getElementById("nameInput");
    const email = document.getElementById("emailInput");
    const card = document.getElementById("cardInput");
    const expiry = document.getElementById("expiryInput");
    const cvv = document.getElementById("cvvInput");

    if (!name || name.value.trim() === "") {
      showError("nameInput", "Please enter your full name.");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.value.trim())) {
      showError("emailInput", "Please enter a valid email address.");
      isValid = false;
    }

    if (!card || card.value.replace(/\s/g, "").length !== 16) {
      showError("cardInput", "Please enter a valid 16-digit card number.");
      isValid = false;
    }

    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiry || !expiryRegex.test(expiry.value.trim())) {
      showError("expiryInput", "Please enter a valid expiry date (MM/YY).");
      isValid = false;
    }

    if (!cvv || !/^\d{3}$/.test(cvv.value.trim())) {
      showError("cvvInput", "Please enter a valid 3-digit CVV.");
      isValid = false;
    }

    return isValid;
  }

  // ---------------- CONFIRM BOOKING ----------------

  document.getElementById("confirmBtn")?.addEventListener("click", () => {
    if (!validateForm()) return;

    document
      .getElementById("checkoutForm")
      ?.style.setProperty("display", "none");

    const successScreen = document.getElementById("successScreen");
    if (successScreen) {
      successScreen.style.display = "flex";

      const successDetail = document.getElementById("successDetail");
      if (successDetail) {
        successDetail.textContent = `${qty} ticket${qty > 1 ? "s" : ""} for ${movie} at ${time}`;
      }
    }
  });
});
