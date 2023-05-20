const modals = document.querySelectorAll('.modal');
const btnOpenPopup = document.querySelector('.btn-open-popup');
const onClose = document.querySelectorAll('.close');
const seeMore = document.querySelectorAll('.see__more');

// 클릭했을때
const weather_click = document.getElementById('weather_click')
const road_click = document.getElementById('road_click')
const person_click = document.getElementById('person_click')
const checkbox = document.getElementsByClassName('seecheckbox-container')

// 보여줄거
const weather_More = document.querySelector('.modal2');
const road_More = document.querySelector('.modal3');
const person_More = document.querySelector('.modal4');

// btnOpenPopup.addEventListener('click', () => {
//     modals.forEach(modal => modal.classList.toggle('show'));
// });

// 닫기
onClose.forEach(closeButton => {
    closeButton.addEventListener('click', () => {
        weather_More.classList.remove('show');
        road_More.classList.remove('show');
        person_More.classList.remove('show');
    });
});

function showModal(modal) {
    modal.classList.toggle('show');
}

function hideModal(modal) {
    modal.classList.toggle('show');
}


btnOpenPopup.addEventListener('click', () => {
    modals.forEach(modal => showModal(modal));
});
weather_click.addEventListener('click', () => {
    showModal(weather_More)
});
road_click.addEventListener('click', () => {
    showModal(road_More)
});

person_click.addEventListener('click', () => {
    showModal(person_More)
});




