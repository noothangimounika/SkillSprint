// document.addEventListener('DOMContentLoaded', () => {
//     const slides = document.querySelectorAll('.silder-1');
//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');
//     let currentSlide = 0;

//     function showSlide(index) {
//         if (index >= slides.length) {
//             currentSlide = 0;
//         } else if (index < 0) {
//             currentSlide = slides.length - 1;
//         } else {
//             currentSlide = index;
//         }
//         const offset = -currentSlide * 100;
//         document.querySelector('.slides').style.transform = translateX(${offset}%);
//     }

//     prevButton.addEventListener('click', () => {
//         showSlide(currentSlide - 1);
//     });

//     nextButton.addEventListener('click', () => {
//         showSlide(currentSlide + 1);
//     });

// //     showSlide(currentSlide); // Show the initial slide
// // });



// // let scrollContainer=document.querySelector(".slider");
// // let backBtn=document.getElementById("backBtn");
// // let nextBtn=document.getElementById("nextBtn");


// // scrollContainer.addEventListener("wheel",(evt) => {
// //     evt.defaultPrevented();
// //     scrollContainer.scrollLeft +=evt.deltaY;
// //     scrollContainer.computedStyleMap.scrollBehavior = "auti";
// // });

// // nextBtn.addEventListener("click", () =>{
// //     scrollContainer.computedStyleMap.scrollBehavior = "smooth";
// //     scrollContainer.scrollLeft +=900;
// // });


// // backBtn.addEventListener("click", () =>{
// //     scrollContainer.computedStyleMap.scrollBehavior = "smooth";
// //     scrollContainer.scrollLeft -=900;
// // });



// let scrollContainer=document.querySelector(".gallery");
// let backBtn=document.getElementById("backBtn");
// let nextBtn=document.getElementById("nextBtn");


// scrollContainer.addEventListener("wheel",(evt) => {
//     evt.defaultPrevented();
//     scrollContainer.scrollLeft +=evt.deltaY;
//     scrollContainer.computedStyleMap.scrollBehavior = "auti";
// });

// nextBtn.addEventListener("click", () =>{
//     scrollContainer.computedStyleMap.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft +=900;
// });


// backBtn.addEventListener("click", () =>{
//     scrollContainer.computedStyleMap.scrollBehavior = "smooth";
//     scrollContainer.scrollLeft -=900;
// });

