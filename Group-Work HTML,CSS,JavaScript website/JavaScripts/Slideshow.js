// ---------------- IMAGE SLIDESHOW ----------------
let images = 
[
  "Images/TDK.jpg",
  "Images/back in action.jpg",
  "Images/Die Hard.jpg",
  "Images/Super Mario Galaxy.jpg",
  "Images/SpongeBob Movie.jpg",
  "Images/Bluey.jpg", // Poster images
];

let index = 0;


  // Displays 5 consecutive images from the array
  function showImages() 
  {
    document.getElementById("img1").src = images[index];
    document.getElementById("img2").src = images[(index + 1) % images.length];
    document.getElementById("img3").src = images[(index + 2) % images.length];
    document.getElementById("img4").src = images[(index + 3) % images.length];
    document.getElementById("img5").src = images[(index + 4) % images.length];
  }

  // Moves slideshow forward
  function nextImage() 
  {
    index = (index + 1) % images.length;
    showImages();
  }

  // Moves slideshow backward
  function prevImage() 
  {
    index = (index - 1 + images.length) % images.length;
    showImages();
  }

  // ---------------- RUN WHEN PAGE LOADS ----------------
  document.addEventListener("DOMContentLoaded", () => 
    {
    // Show images when page first loads
    showImages();

    // ---------------- BUTTON CONTROLS ----------------

    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // When previous button is clicked, go backwards
    if (prevBtn) prevBtn.addEventListener("click", prevImage);

    // When next button is clicked, go forwards
    if (nextBtn) nextBtn.addEventListener("click", nextImage);
  });

  // Automatically move to next image every 10 seconds
  setInterval(nextImage, 10000);

  // below is the animation for the slideshow useing Jquery
  $(document).ready(function () 
  {
    // When the "Next" button is clicked
    $("#nextBtn").click(function () 
    {
      $(".poster")
        // Stop any current animations
        .stop(true, true)

        // slide left slightly and fade out
        .animate({ marginLeft: "-30px", opacity: 0.5 }, 400)

        // return to original position and fade back in
        .animate({ marginLeft: "0px", opacity: 1 }, 450);
    });

    // When the "Previous" button is clicked
    $("#prevBtn").click(function () 
    {
      $(".poster")
        // Stop any current animations
        .stop(true, true)

        // slide right slightly and fade out
        .animate({ marginLeft: "30px", opacity: 0.5 }, 400)

        // return to original position and fade back in
        .animate({ marginLeft: "0px", opacity: 1 }, 450);
    });
  });

