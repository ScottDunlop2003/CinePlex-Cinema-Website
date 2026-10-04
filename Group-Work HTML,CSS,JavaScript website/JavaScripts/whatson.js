// ---------------- WHAT'S ON PAGE LOGIC ----------------

document.addEventListener("DOMContentLoaded", () => 
    {
  // Movies shown per date
  const dateMovies = 
  {
    0: ["card-1", "card-2", "card-3", "card-4"],
    1: ["card-1", "card-2", "card-3"],
    2: ["card-2", "card-3", "card-4"],
    3: ["card-1", "card-4"],
    4: ["card-1", "card-2", "card-3", "card-4"],
    5: ["card-2", "card-4"],
    6: ["card-1", "card-3", "card-4"],
    7: ["card-1", "card-2", "card-3", "card-4"],
  };

  // Movies per location
  const locationMovies = 
  {
    0: ["card-1", "card-2", "card-3", "card-4"],
    1: ["card-1", "card-3"],
    2: ["card-2", "card-4"],
  };

  let activeDate = 0;
  let activeLocation = "0";

  function updateCards() 
  {
    const byDate = dateMovies[activeDate];
    const byLocation = locationMovies[activeLocation];
    const visible = byDate.filter((id) => byLocation.includes(id));

    document.querySelectorAll(".movie-card").forEach((card) => {
      card.style.display = visible.includes(card.dataset.id) ? "" : "none";
    });
  }

  // ---------------- DATE BUTTONS ----------------

  document.querySelectorAll(".whatson__date").forEach((btn, i) => {
    btn.addEventListener("click", () => 
        {
      document
        .querySelectorAll(".whatson__date")
        .forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeDate = i;
      updateCards();
    });
  });

  // ---------------- LOCATION SELECT ----------------

  const select = document.getElementById("cinemaSelect");

  if (select)
     {
    select.addEventListener("change", function () 
    {
      activeLocation = this.value;
      updateCards();
    });
  }

  // ---------------- SHOWTIME BUTTONS → CHECKOUT ----------------

  document.querySelectorAll(".showtime-btn:not(.soldout)").forEach((btn) => 
    {
    btn.addEventListener("click", () => {
      sessionStorage.setItem("checkout_movie", btn.dataset.movie);
      sessionStorage.setItem("checkout_time", btn.dataset.time);
      window.location.href = "checkout.html";
    });
  });

  // ---------------- INITIAL LOAD ----------------

  updateCards();
});
