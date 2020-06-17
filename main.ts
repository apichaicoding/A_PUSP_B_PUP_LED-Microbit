let x = 0
let y = -1
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        if(y <= 3){
            y= y+1
        }
        else if(y == 4 && x <= 3){
            y = 0
            x = x+1
        }
        else if (x==4 && y==4) {
            x = 4
            y = 4
        }
        led.plot(x,y)
        basic.pause(100)
    }
    if (input.buttonIsPressed(Button.B)) {
        led.unplot(x,y)
        basic.pause(100)
        if(y >= 1){
            y = y-1
        }
        else if(y == 0 && x>= 1){
            x=x-1
            y=4
        }
        else if(x==0&&y==0){
            x = 0
            y= -1
        }
    }
})
