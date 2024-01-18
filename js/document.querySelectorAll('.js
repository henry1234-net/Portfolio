document.querySelectorAll('.image-grid img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('popup-image').style.display = 'block';
        document.querySelector('popup-image img').src = image.getAttribute('src');
    }
});