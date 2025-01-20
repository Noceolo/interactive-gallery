var i = 0;
imageList = ["image/image1.jpg","image/image2.jpg", "image/image3.jpg", "image/image4.jpg", "image/image5.jpg" ];

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentImg = document.getElementById("currentImage");
prevBtn.disabled = true;


prevBtn.addEventListener("click", () => {
    if (i === 0){
        console.log("image number" + i)
        prevBtn.disabled = true;
    }else {
        i = i - 1
        currentImg.src = imageList[i];
        nextBtn.disabled = false;
        if (i === 0) {
            prevBtn.disabled = true
        }
    }
})

nextBtn.addEventListener("click", () =>  {
    if (i >= 0 && i < 4) {
        i = i + 1
        currentImg.src = imageList[i]
        prevBtn.disabled = false
        nextBtn.disabled = false
    }if (i === 4){
        nextBtn.disabled = true;
    }

})