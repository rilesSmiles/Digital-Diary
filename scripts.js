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

//form submission
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
