import {snakeSpeed} from './snake.js';

let lastRenderTime = 0;

function main(currentTime){
    window.requestAnimationFrame(main);
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
    if(secondsSinceLastRender < 1 / snakeSpeed){
        return;
    }
    console.log('render');
    lastRenderTime = currentTime;

    update();
    draw(); 
}
window.requestAnimationFrame(main);

function update(){

}

function draw(){

}