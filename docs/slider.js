var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = [
        "photos/mean-girls-2024-movie_2000x1125.jpg", 
        "photos/oppenheimer-movie-poster-wallpaper-1280x800_3.jpeg",
        "photos/wallpapersden.com_timothee-wonka-movie-2023_3840x2160.jpg",
        "photos/the-avengers-superhero-movie-eeotwqkmypkvalg9.jpeg",
        "photos/5eMvCxuWYwXJEE685B8YRE.jpeg",
        
        
        
    ]; // Add more images here
    var image = document.getElementById("slideImg");
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }    
    image.src = slides[slideIndex-1];
    setTimeout(showSlides, 2000); // Change image every 5000 milliseconds (5 seconds)
}
