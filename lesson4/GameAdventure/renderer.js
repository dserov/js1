let renderer = {
    init(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.canvas.height = config.rowCount * config.cellSize;
        this.canvas.width = config.colCount * config.cellSize;
        this.context = this.canvas.getContext('2d');
    },
    render() {
        this.context.fillRect(player.x * config.cellSize, player.y * config.cellSize, config.cellSize, config.cellSize);
    },

    clear() {
        this.context.clearRect(0, 0, config.colCount * config.cellSize, config.rowCount * config.cellSize);
    }
};
