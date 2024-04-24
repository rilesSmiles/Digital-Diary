//hero section
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

showSlide(currentSlide);
setInterval(nextSlide, 1000);


//memory form
document.getElementById("memoryForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var memory = document.getElementById("memory").value;

    var image = document.getElementById("image").files[0];
    var imageUrl = "";
    if (image) {
        imageUrl = URL.createObjectURL(image);
    }

    var card = document.createElement("div");
    card.className = "team-member";

    var memoryText = document.createElement("p");
    memoryText.textContent = memory;
    card.appendChild(memoryText);

    if (imageUrl) {
        var img = document.createElement("img");
        img.src = imageUrl;
        card.appendChild(img);
    }

    document.getElementById("cards-gallery").appendChild(card);

    document.getElementById("memory").value = "";
    document.getElementById("image").value = "";
});

//carousel
let slideIndex = 4;
showSlide(slideIndex);

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function showSlide(n) {
  const slides = document.querySelectorAll('.carousel-inner');
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
