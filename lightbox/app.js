
const lightbox = {
    gallery: document.querySelector(".gallery"),
    init: function () {
        this.container = document.createElement("div");
        this.container.id = "lightbox";
        document.body.appendChild(this.container);

        this.lightboxImg = document.createElement("img");
        this.container.appendChild(this.lightboxImg);

        this.loadImages();
    },
    loadImages: function (keywordsArr, defSize = "300x300") {
        let keywords = ["car", "bicycle", "sun", "water", "bike", "ocean", "ship", "house", "plant", "sea", "traffic",
                        "planet", "pen", "red", "blue", "green", "forest", "yellow", "silver", "truck", "skyscraper",
                        "laptop", "cpu"
                        ];
                    if (keywordsArr) keywords = keywordsArr;
                    // <img src="https://unsplash.com/300x300?car">
                    let htmlCode = "";

                    for (let keyword of keywords) {
                        keyword = keyword.trim().toLocaleLowerCase();

                        const url = `https://source.unsplash.com/${defSize}?${keyword}`;
                        htmlCode += `<img src="${url}">`;
                    }

                    this.gallery.innerHTML = htmlCode;

                    this.addListeners();
    },
    addListeners: function () {
        const images = document.querySelectorAll(".gallery img");
        images.forEach( img => {
            img.addEventListener('click', (event) => this.galleryImgClicked(img) );
    });

    this.container.addEventListener( 'click', ( event ) => {
        this.hide();
    })

    },
    galleryImgClicked: function (img) {
        this.show(img);
    },
    show: function(img) {
        this.lightboxImg.src = img.src;
        this.container.classList.add("active");
    },
    hide: function() {
        this.container.classList.remove("active");
    }
};

lightbox.init();