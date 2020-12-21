let player = {
    x: 0,
    y: 0,
    /**
     *
     * @param moveX
     * @param moveY
     */
    newPosition(moveX, moveY) {
        this.x += moveX;
        this.y += moveY;

        // не должно выйти за пределы поля
        this.x = Math.max(0, this.x);
        this.x = Math.min(this.x, config.colCount - 1);
        this.y = Math.max(0, this.y);
        this.y = Math.min(this.y, config.rowCount - 1);
    }
};
