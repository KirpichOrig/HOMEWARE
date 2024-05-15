document.addEventListener('DOMContentLoaded', function() {
    // Получаем все фото и фото-контейнер
    var photos = document.querySelectorAll('.product-photos img');
    var productPhoto = document.querySelector('.product-photo');

    // Добавляем обработчики событий для каждой фотографии
    photos.forEach(function(photo) {
        photo.addEventListener('click', function() {
            // При нажатии на фото заменяем src фото в product-photo на src нажатого фото
            productPhoto.src = this.src;
        });
    });
});