// Custom Javascript By SaM  
  
// Hero Image Change start
  
  // Array of image URLs to cycle through
    const imageUrls = [
        //"./assets/main02.png",
        "https://media.discordapp.net/attachments/799393124740759592/1135522287899131964/main01.png?width=592&height=634",
        //"./assets/main08.png",
        "https://media.discordapp.net/attachments/799393124740759592/1135522288276615320/main02.png?width=592&height=634",
        //"https://media.discordapp.net/attachments/799393124740759592/1135522288649895946/main03.png?width=592&height=634",
        //"./assets/main06.png",
        //"https://media.discordapp.net/attachments/799393124740759592/1135522287303524444/main04.png?width=592&height=634",
        // Add more image URLs as needed
    ];

    let currentImageIndex = 0;
    const changingImageElement = document.getElementById("changingImage");

    function changeImage() {
        changingImageElement.src = imageUrls[currentImageIndex];
        currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
    }

    // Initial image change
    changeImage();

    // Set interval to change image every 20 seconds (20000 milliseconds)
    setInterval(changeImage, 10000);

    function changeImage() {
        // Remove the visible class from the current image
        changingImageElement.classList.remove('visible');

        // Set a timeout to change the image source after 500ms (half of the 1s transition time)
        setTimeout(() => {
            changingImageElement.src = imageUrls[currentImageIndex];
            currentImageIndex = (currentImageIndex + 1) % imageUrls.length;

            // Add the visible class back to the image after the source is updated
            changingImageElement.classList.add('visible');
        }, 500); // Half of the transition time (500ms) for smoother fade-in and fade-out
    }

// Hero Image Change stop


// Top Annoucemnet Start

const texts = [
    "Free Island wide delivery in 5-7 business days.",
    "All prices mentioned are in Sri Lankan Rupees",
    "Register for better experience.",
  ];
  
  let currentIndex = 0;
  const changingTextElement = document.getElementById("changingText");
  
  function changeText() {
    changingTextElement.textContent = texts[currentIndex];
    currentIndex = (currentIndex + 1) % texts.length;
  }
  
  // Initial text change
  changeText();
  
  // Set interval to change text every 20 seconds (20000 milliseconds)
  setInterval(changeText, 5000);
  

// Top Annoucemnet Stop


// Popup Start

//01

// Get the modal
var modal = document.getElementById("myModal-01");

// Get the button that opens the modal
var btn = document.getElementById("item-popup-01");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//02

// Get the modal
var modal = document.getElementById("myModal-02");

// Get the button that opens the modal
var btn = document.getElementById("item-popup-02");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//03

// Get the modal
var modal = document.getElementById("myModal-03");

// Get the button that opens the modal
var btn = document.getElementById("item-popup-03");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


//04

// Get the modal
var modal = document.getElementById("myModal-04");

// Get the button that opens the modal
var btn = document.getElementById("item-popup-04");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//    modal.style.display = "none";
//  }

// Popup Stop