let game = {
    run() {
        renderer.init('canvas');
        direction.bindKeyboardEvent();
        alert('Управление "Бродячим" с цифровой клавиатуры (Numpad) в режиме цифр.');

        setInterval(function() {
            renderer.clear();
            renderer.render();
        }, 100);
    },
};
