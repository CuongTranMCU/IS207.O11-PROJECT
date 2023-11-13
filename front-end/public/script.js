// <<<<<<< HEAD
//************************************************************FOOTER************************************************
const btnFooter = document.querySelector('footer .row1 .row12 button');

function animationButton() {
    btnFooter.style.boxShadow = "inset 0 0 0 100px rgba(0,0,0,0.2)";

    // Span
    btnFooter.firstElementChild.style.transform = "translateX(-5px)";

    // Icon
    btnFooter.lastElementChild.style.display = "inline-block";
    btnFooter.lastElementChild.style.transform = "translateX(3px)";

}
function resetAnimation() {
    btnFooter.style.boxShadow = "none";
    btnFooter.firstElementChild.style.transform = "none";
    btnFooter.lastElementChild.style.transform = "none";
    btnFooter.lastElementChild.style.display = "none";
}

btnFooter.addEventListener('mouseover',animationButton); 
btnFooter.addEventListener('mouseout',resetAnimation); 

//************************************************************FOOTER************************************************

// JS PRODUCTS:
/*Slideshown section*/
const slider = document.querySelector(".slider");
let currentIndex = 0;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * (20 + 10)}%)`;
}

function nextColumns() {
    if (currentIndex < 3) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

function prevColumns() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = 3;
    }
    updateSlider();
}

/*Display button prev and next in slideshow*/
var s=document.getElementsByClassName('terrarium-accessory');
s[0].addEventListener('mouseover', function(){
    document.getElementsByClassName('prev-button')[0].style.display = "block";
    document.getElementsByClassName('next-button')[0].style.display = "block";
})
s[0].addEventListener('mouseout', function(){
    document.getElementsByClassName('prev-button')[0].style.display = "none";
    document.getElementsByClassName('next-button')[0].style.display = "none";
})
//==========================================================================
// JS HEADER:
const inputSearch = document.querySelector(".header__introduce input");
const divCategory = document.querySelector(".header__main .header__wrap .header__category");
const divListCategory = document.querySelector(".header__view .header__wrap .header__list");
inputSearch.addEventListener("focus",()=>
{
    inputSearch.style.color = "var(--color-green)";
})
divCategory.addEventListener("click",()=>
{
    divListCategory.classList.toggle("header__list--visuable");
})
