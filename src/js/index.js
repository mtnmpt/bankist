// const btnTransfer = document.getElementById("js-transfer-btn")
function call() {
    document.getElementById('js-grid-btn1').style.display = 'grid'
    document.getElementById('js-grid-btn2').style.display = 'grid'
    document.getElementById('js-grid-btn3').style.display = 'grid'
}

function clickbtn(event) {
    const count = document.querySelectorAll(".btn")
    for (let index = 0; index < count.length; index++) {
        const element = count[index];
        element.classList.remove('is-transfer-btn','is-loans-btn','is-closing-btn')
    }
    // const btnClick = document.querySelector(".btn")
    const   btnClicked = event.currentTarget
    console.log(event.currentTarget)
    console.log(btnClicked.innerHTML.includes('Instant Transfer'))
    if (btnClicked.innerHTML.includes('Instant Transfer')) {
        btnClicked.classList.add('is-transfer-btn')
        call()
        document.getElementById('js-grid-btn2').style.display = 'none'
        document.getElementById('js-grid-btn3').style.display = 'none'
    }
    else if (btnClicked.innerHTML.includes('Instant Loans')) {
        btnClicked.classList.add('is-loans-btn')
        call()
        document.getElementById('js-grid-btn3').style.display = 'none'
        document.getElementById('js-grid-btn1').style.display = 'none'
    }
    else {
        btnClicked.classList.add('is-closing-btn')
        call()
        document.getElementById('js-grid-btn1').style.display = 'none'
        document.getElementById('js-grid-btn2').style.display = 'none'
    }
}


let currentSlide = 0
const slideEl   = document.querySelectorAll('.slide-apart')   //lấy tất cả slide có class = 'slide-apart'
const dotEl     = document.querySelectorAll('.dot')
const totalSlide =  slideEl.length                            // lấy tổng số lượng các slide
const array = []

function clickArrowBtnRight() {
    for (let index = 0; index < slideEl.length; index++) {        // Dùng vòng lặp for để lấy từng slide
        const element = slideEl[index];
        element.classList.remove('active')
    }

    for (let dot = 0; dot < dotEl.length; dot++) {
        const dotElemment = dotEl[dot];
        dotElemment.classList.remove('active-dot')
    }

    currentSlide = (currentSlide+1)%totalSlide
    slideEl[currentSlide].classList.add('active')
    dotEl[currentSlide].classList.add('active-dot')
    // console.log(totalSlide)
    // console.log(array)
}
function clickArrowBtnLeft() {
    for (let index = 0; index < slideEl.length; index++) {        // Dùng vòng lặp for để lấy từng slide có class = 'slide-apart'
        const element = slideEl[index];
        element.classList.remove('active')
    }

    for (let dot = 0; dot < dotEl.length; dot++) {
        const dotElemment = dotEl[dot];
        dotElemment.classList.remove('active-dot')
    }

    currentSlide = (currentSlide-1+totalSlide)%totalSlide
    slideEl[currentSlide].classList.add('active')
    dotEl[currentSlide].classList.add('active-dot')
    // console.log(totalSlide)
    // console.log(array)
}

window.addEventListener('scroll',function () {
    const navEl = document.querySelector('.text_nav') 
    const navPositon = document.documentElement.scrollTop

    if (navPositon >750) {
        navEl.classList.add('scroll')
    }
    else {
        navEl.classList.remove('scroll')
    }
})

// // Địa chỉ của API
// const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// // Hàm để gọi API
// function fetchData() {
//     fetch(apiUrl)
//         .then(response => {
//             // Kiểm tra nếu phản hồi không thành công
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             // Chuyển đổi phản hồi thành JSON
//             return response.json();
//         })
//         .then(data => {
//             // Xử lý dữ liệu JSON ở đây
//             console.log(data);
//         })
//         .catch(error => {
//             // Xử lý lỗi ở đây
//             console.error('There was a problem with the fetch operation:', error);
//         });
// }

// // Gọi hàm để tải dữ liệu
// fetchData();
