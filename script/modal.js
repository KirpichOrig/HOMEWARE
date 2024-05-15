// Получаем элементы модального окна, кнопки закрытия и ссылки для открытия модального окна
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];
var productDescriptions = document.getElementsByClassName("product-description");

// Добавляем обработчики событий для открытия и закрытия модального окна
for (var i = 0; i < productDescriptions.length; i++) {
    productDescriptions[i].addEventListener("click", function() {
        modal.style.display = "block";
    });
}

span.addEventListener("click", function() {
    modal.style.display = "none";
});

// Закрыть модальное окно, если пользователь кликнул вне его области
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});