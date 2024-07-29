document.getElementById('button').addEventListener('click', function() {
    const image = document.getElementById('image');
    const message = document.getElementById('message');
    const button = document.getElementById('button');
    const music = document.getElementById('background-music');

    let posX = Math.random() * (window.innerWidth - image.width);
    let posY = Math.random() * (window.innerHeight - image.height);
    let velocityX = 2;
    let velocityY = 2;

    function moveImage() {
        posX += velocityX;
        posY += velocityY;

        if (posX + image.width > window.innerWidth || posX < 0) {
            velocityX = -velocityX; // Cambia la dirección en el eje X
        }

        if (posY + image.height > window.innerHeight || posY < 0) {
            velocityY = -velocityY; // Cambia la dirección en el eje Y
        }

        image.style.left = `${posX}px`;
        image.style.top = `${posY}px`;

        requestAnimationFrame(moveImage);
    }

    moveImage();
    music.play(); // Reproduce la música
    button.style.display = 'none'; // Oculta el botón

    setTimeout(function() {
        message.classList.remove('hidden');
    }, 5000); // Muestra el mensaje después de 10 segundos
});