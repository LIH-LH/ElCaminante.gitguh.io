const slider = document.querySelector("#slider");
var sliderSection = document.querySelectorAll (".slider_section");
var sliderSectionLast=sliderSection[sliderSection.length - 1];
const btnLeft = document.querySelector(".slider_btn-left");
const btnRight = document.querySelector(".slider_btn-right");
slider.insertAdjacentElement("afterbegin",sliderSectionLast);

function Proxima () {
    var sliderSectionFirst= document.querySelectorAll(".slider_section")[0];
    slider.style.marginLeft="-200%";
    slider.style.transition="all .5s";
    setTimeout(()=>{
        slider.style.transition="none";
        slider.insertAdjacentElement("beforeend",sliderSectionFirst);
        slider.style.marginLeft="-100%";
    },500);
}

function Anterior () {
    var sliderSection =document.querySelectorAll(".slider_section");
    var sliderSectionLast=sliderSection[sliderSection.length - 1];
    slider.style.marginLeft="0%";
    slider.style.transition="all .5s";
    setTimeout ( ()=> {
        slider.style.transition="none";
        slider.insertAdjacentElement("afterbegin",sliderSectionLast);
        slider.style.marginLeft="-100%";
    },500);
}

btnRight.addEventListener("click",()=>{
    Proxima();
});

btnLeft.addEventListener("click",()=>{
    Anterior();
});

setInterval(Proxima, 7000);