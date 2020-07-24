handleMove()
    //初始时cube的旋转角度
    var initXY={
        x:13,
        y:116
    }
function handleMove(){

    var canMove=false;
    window.addEventListener('mousedown',(e)=>{
        canMove=true;
        let down={
            x:e.clientX,
            y:e.clientY
        }

        let transform=document.getElementById("cube").style.transform;
        console.log(transform)
        if(transform){
            let trans=transform.split(" ");
            let nowXY={
                x:trans[0].substring(8,trans[0].length-4)%360,
                y:trans[1].substring(8,trans[1].length-4)%360
            }
            initXY={
                x:nowXY.x,
                y:nowXY.y
            }
            console.log("now",initXY)
        }

        window.addEventListener('mousemove',(e)=>{
            if(canMove){
                let move={
                    x:e.clientX,
                    y:e.clientY
                }
                // console.log("move",move)
                rotateCube(down,move)
            }
        })

    })



    window.addEventListener('mouseup',(e)=>{
        canMove=false;
        let up={
            x:e.clientX,
            y:e.clientY
        }
    })
}

function rotateCube(down,move){
    let rotX=move.y-down.y;
    let rotY=move.x-down.x;
    let speed=0.5;
    let res={
        x:(initXY.x+rotX*speed)%360,
        y:(initXY.y+rotY*speed)%360
    }
    $('.cube').css('transform',`rotateX(${res.x}deg) rotateY(${res.y}deg) rotateZ(-26deg)`)

}