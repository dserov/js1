let direction = {
    bindKeyboardEvent() {
        addEventListener("keydown", function (event) {
            console.log(event.code);
            switch (event.code) {
                case 'Numpad1':
                    player.newPosition(-1, 1);
                    break;
                case 'Numpad2':
                    player.newPosition(0, 1);
                    break;
                case 'Numpad3':
                    player.newPosition(1, 1);
                    break;
                case 'Numpad4':
                    player.newPosition(-1, 0);
                    break;
                case 'Numpad6':
                    player.newPosition(1, 0);
                    break;
                case 'Numpad7':
                    player.newPosition(-1, -1);
                    break;
                case 'Numpad8':
                    player.newPosition(0, -1);
                    break;
                case 'Numpad9':
                    player.newPosition(1, -1);
                    break;
            }
        });
    }
};
