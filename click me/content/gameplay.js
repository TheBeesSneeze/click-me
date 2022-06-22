function manageKeys(event){
    let elements = document.getElementsByTagName("button");
    if(count>1){//idk why the program just doesnt like the first button 
        if(event.key.toLowerCase()=="w" || event.key=='ArrowUp'){//expand
            straight(elements,1,"w");
        }
        if(event.key.toLowerCase()=='a' || event.key=='ArrowLeft'){//left
            sideways(elements,-1);
        }
        if(event.key.toLowerCase()=="d" || event.key=='ArrowRight'){//right
            sideways(elements,1);
        }
        if(event.key.toLowerCase()=="s" || event.key=='ArrowDown'){//shrink
            straight(elements,-1,"s");
        }
        if(event.key==" "){
            jump(); // add creative flight?
        }
        //crouch mode?
    }
}

//moves forward or backward
//list is list of elements to move straight, n is 1 if moving forwards, -1 if backwards, key is the key pressed. idk why i have n and key together that seems kind of redundant
function straight(list,n,key){
    for (var i=0; i<list.length;i++){
        let element=list[i];
        var posx=getNum(element.style.left);
        var posy=getNum(element.style.top);

        if(posx<50){//left side of screen
            posx = posx-((50-posx)/50*n);
        } 
        else if(posx>50){//right side of screen
            posx = posx+((posx-50)/50*n);
        }
        //tjhjis can be optimized with a function so easily dude
        if(posy<50){//top side of screen
            posy = posy-(n/horizonOffset);
        } 
        else if(posy>50){//bottom side of screen
            posy = posy+n;
        }

        if(correctWalking){
            //checking if out of bounds
            if((posx<0 || posx>95 || posy<0 || posy>95) && !creativeFlight){
                posy=randomNumber(25,75);
                posx=randomNumber(25,75);
            }

            //keep elements out of center when walking back
            if(key=="s" && !creativeFlight){
                if(posx > 40 && posx < 60 && posy > 45 && posy){
                    posy=randomNumber(0,100);
                    posx=randomNumber(0,100);
                }
            }
        }
        moveTo(element,posx,posy);
    }
}

//moves adds x to every element in list 
function sideways(list,x){
    for(var i=0;i<list.length;i++){
        let posy=getNum(list[i].style.top);
        //bottom half of the horizon
        if(posy >= 50){
            let posx = (Math.abs((50-posy)/horizontalSpeed)); //you can combine these lines of code and get rid of posy if youre feeling ballsy
            move(list[i],x*posx, 0);
        }
        //top half
        else {
            let posx = (Math.abs((50-posy)/(horizontalSpeed*horizonOffset))); //you can combine these lines of code and get rid of posy if youre feeling ballsy
            move(list[i],x*posx, 0);
        }
    }    
}

//wahoO!
function jump(){
    if(!jumping || creativeFlight){
        jumping = true;
        const elements = document.getElementsByTagName("button");
        for(var a = 0; a < jumpHeight; a++){
            setTimeout(function(){//i dont know how to do timed for loops so this is gonna be the best we got
                for(var i=0;i<elements.length;i++){
                    var h = getNum(elements[i].style.top);
                    h = (h*a) / (100*jumpHeight);
                    move(elements[i],0,h,false);
                }
            },a*jumpSpeed);
        }
        if(!creativeFlight){
            setTimeout(function(){//only runs after the first timed loop
                for(var b = jumpHeight-1; b >=0 ; b--){
                    setTimeout(function(){//lowkey i just wrote this code and i have no idea how it works
                        for(var i=0;i<elements.length;i++){
                            var h = getNum(elements[i].style.top);
                            
                            h = ( (h*a) / (100*jumpHeight) );
                            move(elements[i],0,-h,false);
                        }
                    },(jumpHeight-b)*jumpSpeed);
                }
                jumping=false;
            },jumpSpeed*jumpHeight);
        }

    }
    else {
        creativeFlight=true;
        jumpSpeed=5;
    }
}

