 export const snakeSpeed = 1
 const snakeBody = [{x: 10, y:10}]

 export function update(){
    console.log('update snake')
 }

 export function draw(gameBoard){
    snakeBody.forEach(segment =>{
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.x
        snakeElement.style.gridColumnStart = segment.y
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
 }