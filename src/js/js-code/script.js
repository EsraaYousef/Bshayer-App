
import $ from "jquery";
import {owlCarousel} from 'owl.carousel';

export function owlCarsoul() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            1000:{
                items:1
            }
        }
    });
}