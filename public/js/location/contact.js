const header_map = document.querySelector('#header__menu__map');
const header_culture = document.querySelector('#header__menu__culture');
const login = document.querySelector('#login');
const signUp = document.querySelector('#signUp');


// 헤더 메뉴 이동
header_map.addEventListener('click', () => {
    window.location.href = '../../map/map.html';
})

header_culture.addEventListener('click', () => {
    window.location.href = '../../culture/culture_main.html';
})

//로그인
login.addEventListener('click', () => {
    window.location.href = '../../login/login.html';
})
signUp.addEventListener('click', () => {
    window.location.href = '../../login/terms.html';
})



// 로고 클릭 메인
const header__logo = document.querySelector('#header__logo');
header__logo.addEventListener('click', () => {
    window.location.href = '../../main/index.html';
})
const main__logo = document.querySelector('#center__logo__1');
main__logo.addEventListener('click', () => {
    window.location.href = '../../main/index.html';
})

// 글쓰기
const write = document.querySelector('#write');
write.addEventListener('click', () => {
    window.location.href = './post.html';
})


// 사이드바
// 사이드바
const sb__my__page = document.querySelector('#sb__my__page');
const sb__my__post = document.querySelector('#sb__my__post');
const sb__my__account = document.querySelector('#sb__my__account');
const sb__my__post2 = document.querySelector('#sb__my__post2');
sb__my__page.addEventListener('click', () => {
    window.location.href = '../mypage.html';
})
sb__my__post.addEventListener('click', () => {
    window.location.href = './post.html';
})
sb__my__account.addEventListener('click', () => {
    window.location.href = '../mypage.html';
})
sb__my__post2.addEventListener('click', () => {
    window.location.href = './post.html';
})