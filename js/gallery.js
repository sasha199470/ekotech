const hiddenClass = 'hidden';
const targetTexts = document.getElementsByClassName('showModal');

class Gallery {

    constructor() {
        this.leftArrow = {};
        this.rightArrow = {};
        this.countImages = -1;
        this.currentImage = -1;
        this.currentImagesEl = {};

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
                const index = targetTexts[i].dataset.index;
                this.leftArrow = document.getElementById(`left-${index}`);
                this.rightArrow = document.getElementById(`right-${index}`);
                this.countImages = parseInt(document.getElementById(`all-images-${index}`).innerHTML);
                this.currentImage = 1;
                this.currentImagesEl = document.getElementById(`current-img-${index}`);

                this.arrowsEvents();
            })
        }
    }

    arrowsEvents() {
        this.leftArrow.removeEventListener('click', () => {
        });
        this.rightArrow.removeEventListener('click', () => {
        });

        const checkHide = () => this.addOrRemoveHiddenClass(
            () => this.currentImage === 1,
            () => this.currentImage === this.countImages - 1
        );

        this.leftArrow.addEventListener('click', () => {
            this.currentImage--;
            checkHide();
            this.currentImagesEl.innerHTML = this.currentImage;
        });
        this.rightArrow.addEventListener('click', () => {
            this.currentImage++;
            checkHide();
            this.currentImagesEl.innerHTML = this.currentImage;
        });
    }

    addOrRemoveHiddenClass(leftCondition, rightCondition) {
        if (leftCondition())
            this.leftArrow.classList.add(hiddenClass);
        else if (this.leftArrow.classList.contains(hiddenClass)) {
            this.leftArrow.classList.remove(hiddenClass);
        }
        if (rightCondition()) {
            this.rightArrow.classList.add(hiddenClass);
        }
        else if (this.rightArrow.classList.contains(hiddenClass)) {
            this.rightArrow.classList.remove(hiddenClass);
        }
    }

}

new Gallery();