window.onload = function () {

    function changeInputTypeOnClick() {
        if (this.type === "text") {
            this.type = "date";
        }
    }

    function changeInputTypeOnBlur() {
        if (this.type === "date" && this.value !== "") {
            this.type = "date";
        } else if(this.type === "date" && this.value === "") {
            this.type = "text";
        }
    }

    const inputDateGroup = document.getElementsByClassName('form__input--date');
    for (let i = 0; i < inputDateGroup.length; i++) {
        let inputDate = inputDateGroup[i];
        inputDate.addEventListener('click', changeInputTypeOnClick);
        inputDate.addEventListener('blur', changeInputTypeOnBlur);
    }
}