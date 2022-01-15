const header = document.querySelector('header')
const pheader = document.querySelector('.pheader')
const main =document.querySelector('.main')
const productcontainer =document.querySelector('.productcontainer')
const prodectdetailconatiner = document.querySelector('.prodectdetailconatiner')

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    duration:10000,
    triggerElement:productcontainer,
    triggerHook:0
})//.addIndicators()
.setClassToggle('.header','headerhide')
.addTo(controller);


const scene1 = new ScrollMagic.Scene({
    duration:10000,
    triggerElement:prodectdetailconatiner,
    triggerHook:0
})//.addIndicators()
.setClassToggle('.pheader','headerhide')
.addTo(controller);
