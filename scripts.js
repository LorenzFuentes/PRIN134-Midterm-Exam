document.addEventListener('DOMContentLoaded', function() {
    const petHeartButtons = document.querySelectorAll('.btn-full');
    const buttons = {
        pet_button: document.querySelector('#btn-select-all'),
        unpet_button: document.querySelector('#btn-unselect-all'),
        last_button: document.querySelector('#btn-select-last'),
        first_button: document.querySelector('#btn-select-first'),
        next_button: document.querySelector('#btn-select-next'),
        previous_button: document.querySelector('#btn-select-previous')
    };
    const logo = document.querySelector('.banner-content');
    const petCards = document.querySelectorAll('.card');
    let currentIndex = 0;

    petHeartButtons.forEach(button => button.addEventListener('click', heart));
    buttons.pet_button.addEventListener('click', selectAll);
    buttons.unpet_button.addEventListener('click', unselectAll);
    buttons.last_button.addEventListener('click', () => changeHighlight(petCards.length - 1));
    buttons.first_button.addEventListener('click', () => changeHighlight(0));
    buttons.next_button.addEventListener('click', () => changeHighlight((currentIndex + 1) % petCards.length));
    buttons.previous_button.addEventListener('click', () => changeHighlight((currentIndex - 1 + petCards.length) % petCards.length));
    logo.addEventListener('click', animate_logo);

    function heart() {
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
    }

    function selectAll() {
        updateHearts('fa-solid', 'fa-regular');
    }

    function unselectAll() {
        updateHearts('fa-regular', 'fa-solid');
    }

    function updateHearts(addClass, removeClass) {
        petHeartButtons.forEach(button => {
            const icon = button.querySelector('i');
            icon.classList.remove(removeClass);
            icon.classList.add(addClass);
        });
    }

    function changeHighlight(index) {
        petCards.forEach(card => card.classList.remove('card-selected', 'active'));
        petCards[index].classList.add('card-selected', 'active');
        currentIndex = index;
    }

    function animate_logo() {
        this.classList.add('animate__animated', 'animate__flip');
        this.addEventListener('animationend', () => {
            this.classList.remove('animate__animated', 'animate__flip');
        }, { once: true });
    }

    highlight(currentIndex);

    function highlight(index) {
        petCards.forEach(card => card.classList.remove('card-selected', 'active'));
        petCards[index].classList.add('card-selected', 'active');
    }
});