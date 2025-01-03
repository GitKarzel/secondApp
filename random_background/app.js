
const randomColor = {
    button: document.querySelector("#random-color-button"),
    input: document.querySelector("#color-text"),
    init: function () {
        this.button.addEventListener("click", (e) => {
            this.getRandomColor();
        });
        this.input.addEventListener("click", (e) => {
            this.copyColorToClipBoard();
        });

        this.getRandomColor();
    },
    getRandomColor: function ( ) {
        const newColor = "#" + Math.floor(Math.random() * 16777215 ).toString(16);
        this.input.value = newColor;
        document.body.style.background = newColor;
    },
    copyColorToClipBoard: function () {
        const value = this.input.value;
        navigator.clipboard.writeText(value)
        .then(function ( ) {
            console.log(alert("Kolor zapisany w schowku"));
        }) ;
    }
};

randomColor.init();
