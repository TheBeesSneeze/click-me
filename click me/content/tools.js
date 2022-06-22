//returns an int given a number ending in % or px (or other 2 digit suffix)
function getNum(num){
    num = String(num);
    if(num.substring(num.length-1,num.length)=="%"){
        return(Number(num.substring(0,num.length-1)));
    } else {
        return(Number(num.substring(0,num.length-2)));
    }
}

//returns n to be basically the same as if it was %, reference is width or height
function scale(n,reference){
    return(n*(reference/100));
}

//sets the element defined x and y values (leave x and y as ints, % is added free of charge B] )
function moveTo(element,x,y){
    element.style.top=y+"%";
    element.style.left=x+"%"; 
}

//adds x and y to the elements current x and y values
function move(element,x,y,correctBoundaries){
    if(correctBoundaries == undefined){
        correctBoundaries = true;
    }

    var posx=getNum(String(element.style.left));
    var posy=getNum(String(element.style.top));

    if((posx>=0 && posx<=100) || !correctWalking){ // between 0 and 100 (within bounds)
        element.style.left=(posx+x)+"%";
        element.style.top=(posy+y)+"%";
    }

    //buts that fucker back in bounds
    if(correctBoundaries && correctWalking){
        if(posx<0){ //if below 0
            element.style.left="100%";
        }
        else if(posx>100){ //if above 96
            element.style.left="0%";
        }

        if(posy>=0){ 
            element.style.top=(posy+y)+"%";
        }
        else{
            element.style.top="100%";
        }
    }
}

//returns the slope of two coordinates
function slope(a,b,x,y){
    return ((b-y)/(a-x));
}

// y - y1 = m(x-x1)
// y1 = m(x-x1) - y
function pointSlope(m,x,y,x1){
    return( ( m*(x1-x) ) - y );
}


//i dont need this but i made it anyway so ig its staying here
//returns the list without the first instance of item
function removeItem(list,item){
    for(var i=0;i<list.length;i++){
        if(list[0] == item){
            return (list.splice(i,1));
        }
    }
}