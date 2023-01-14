// Mouse Circle
const mouseCircle = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");


const mouseCircleFn = (x,y) => {
    mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity:1`;
    mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity:1`;
};
//End of Mouse Circle

// //Animated Circles
// const circle = document.querySelectorAll(".main-circle");
// const mainImg = document.querySelector(".main-circle img");

// let mX = 0;
// let mY = 0;

// const animateCircle = (e,x,y) => {

//     // if(x < mX) {
//     //     circle.forEach((circle) => {
//     //         circle.style.left = `100px`;
//     //     });
//     //     mainImg.style.left = `100px;`;
//     //     }
    

//     // if(y < mY) {
//     //     console.log("move upwards");
//     // }

//     // mX = e.clientX
//     // mXy = e.clientY
// };

// //End of Animated Circles

document.body.addEventListener("mousemove", (e) => {
    let x = e.clientX;
    let y = e.clientY;

    mouseCircleFn(x,y);
    // animateCircle(e,x,y);
});

document.body.addEventListener("mouseleave", () => {
    mouseCircle.style.opacity = "0";
    mouseDot.style.opacity = "0";
});

//Main Button
const mainBtn = document.querySelector(".main-btn");

mainBtn.addEventListener("mouseenter", (e) => {
    const left = e.clientX - e.target.getBoundingClientRect
    ().left;


});
//End of Main Button