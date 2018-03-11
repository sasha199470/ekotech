const hiddenClass = 'hidden';
const targetTexts = document.getElementsByClassName('showModal');

class Gallery {

    constructor() {
        this.leftArrow = {};
        this.rightArrow = {};
        this.countImages = -1;
        this.currentImage = -1;
        this.currentImagesEl = {};
        this.image = {};
        this.close = {};
        this.environmentSetUp();
    }

    static get hiddenClass() {
        return hiddenClass;
    }

    static get getTargetTexts() {
        return targetTexts;
    }

    environmentSetUp() {
        for (let i = 0; i < Gallery.getTargetTexts.length; i++) {
            Gallery.getTargetTexts[i].addEventListener('click', () => {
                if (i === this.currentImage - 1) {
                    return;
                }
                const index = targetTexts[i].dataset.index;
                this.leftArrow = document.getElementById(`left-${index}`);
                this.rightArrow = document.getElementById(`right-${index}`);
                this.countImages = parseInt(document.getElementById(`all-images-${index}`).innerHTML);
                this.currentImage = 1;
                this.currentImagesEl = document.getElementById(`current-img-${index}`);
                this.image = document.getElementById(`image-${index}`);
                this.close = document.getElementsByClassName('close');
                this.image.style.height = document.documentElement.clientHeight * 0.8 - 108 + 'px';
                let style = this.image.currentStyle || window.getComputedStyle(this.image);
                this.leftArrow.style.left = style.marginLeft;
                this.rightArrow.style.right = style.marginRight;

                this.arrowsEvents();
            })
        }
    }

    arrowsEvents() {
        const hl = () => {
            this.currentImage--;
            checkHide();
            this.image.setAttribute('src', `images/projects/proj0/img-${this.currentImage}.jpg`);
            this.currentImagesEl.innerHTML = this.currentImage;
            setTimeout(() => {
                let style = this.image.currentStyle || window.getComputedStyle(this.image);
                this.leftArrow.style.left = style.marginLeft;
                this.rightArrow.style.right = style.marginRight;
            }, 500);
        }
        const hr = () => {
            this.currentImage++;
            checkHide();
            this.image.setAttribute('src', `images/projects/proj0/img-${this.currentImage}.jpg`);
            this.currentImagesEl.innerHTML = this.currentImage;
            setTimeout(() => {
                let style = this.image.currentStyle || window.getComputedStyle(this.image);
                this.leftArrow.style.left = style.marginLeft;
                this.rightArrow.style.right = style.marginRight;
            }, 500);

        }
        this.leftArrow.removeEventListener('click', hl);
        this.rightArrow.removeEventListener('click', hr);

        const checkHide = () => this.addOrRemoveHiddenClass(
            () => this.currentImage === 1,
            () => this.currentImage === this.countImages - 1
        );

        this.leftArrow.addEventListener('click', hl);

        this.rightArrow.addEventListener('click', hr);

        console.log(this.close)

        this.close[0].addEventListener('click', () => {
            this.leftArrow.removeEventListener('click', hl);
            this.rightArrow.removeEventListener('click', hr);
        });
    }

    addOrRemoveHiddenClass(leftCondition, rightCondition) {
        if (leftCondition())
            this.leftArrow.classList.add(Gallery.hiddenClass);
        else if (this.leftArrow.classList.contains(Gallery.hiddenClass)) {
            this.leftArrow.classList.remove(Gallery.hiddenClass);
        }
        if (rightCondition()) {
            this.rightArrow.classList.add(Gallery.hiddenClass);
        }
        else if (this.rightArrow.classList.contains(Gallery.hiddenClass)) {
            this.rightArrow.classList.remove(Gallery.hiddenClass);
        }
    }

}

new Gallery();