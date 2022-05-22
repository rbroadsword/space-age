//for UI logic
import Universe from './js/universe.js'; 
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


$(function () {
  $('#userInput').on('submit', function (event) {
    event.preventDefault(); 
    $('.main').hide(); 
    $('.results').show(); 
    const userAge = parseInt($('#userAge').val()); 
    const userLifeExpectancy = parseInt($('#userLifeExpectancy').val()); 

    const myAge = new Universe(userAge, userLifeExpectancy); 

    let ageOnMercury = myAge.mercuryAge(); 
    let ageOnVenus = myAge.venusAge(); 
    let ageOnMars = myAge.marsAge(); 
    let ageOnJupiter = myAge.jupiterAge(); 

    let lifeLeftMercury = myAge.lifeLeftOnMercury(); 
    let lifeLeftVenus = myAge.lifeLeftOnVenus(); 
    let lifeLeftMars = myAge.lifeLeftOnMars(); 
    let lifeLeftJupiter = myAge.lifeLeftOnJupiter(); 

    $('.mercury-age').html(ageOnMercury); 
    $('.mercury-life-left').html(lifeLeftMercury); 

    $('.venus-age').html(ageOnVenus); 
    $('.venus-life-left').html(lifeLeftVenus); 

    $('.mars-age').html(ageOnMars); 
    $('.mars-life-left').html(lifeLeftMars); 

    $('.jupiter-age').html(ageOnJupiter); 
    $('.jupiter-life-left').html(lifeLeftJupiter); 
  }); 
}); 