const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');

minusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value);
    inputField.value = currentValue + 1;
});

plusButton.addEventListener('click', () => {
    const currentValue = Number(inputField.value);
    inputField.value = currentValue - 1;
});

function toggleLike () {
    var likeButton = document.getElementById('like-btn');
    likeButton.classList.toggle('is-active');
}

/*
$('.like-btn').on('click', function() {
    $(this).toggleClass('is-active');
 });*/