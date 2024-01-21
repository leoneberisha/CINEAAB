var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = [
        "photos/mean-girls-2024-movie_2000x1125.jpg", 
    "photos/5eMvCxuWYwXJEE685B8YRE.jpeg",
    "photos/oppenheimer-movie-poster-wallpaper-1280x800_3.jpeg"
        
        
        
    ]; // Add more images here
    var image = document.getElementById("slideImg");
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    image.src = slides[slideIndex-1];
    setTimeout(showSlides, 1000); // Change image every 5000 milliseconds (5 seconds)
}
