//the bugs are intentional dw

function newWindow(name,text){
    window.open(name,text,"width-20,height=30")
}

//creates new button!
//text is whats written on button
//n is how many buttons
//x and y (unneccessary) are the old buttons coordinates and the starting coordinates of the animation
function newButton(text,n,a1,b1){
    for(var i=0; i<n;i++){
        really(text,a1,b1)
    }
}

//basically all of newButton, idk man, shit blows. doesnt work without this function :/
function really(text,a1,b1){
    //i royally fucked up a and b so heres their hip new replacements, a1 and b1
    var a = a1;
    var b = b1;

    let buttonName = String(count);
    count++;
    if(count == 7){
        alert("oh yeah epilepsy warning btw");
    }

    let button = document.createElement("button");
    button.setAttribute('class',"default");

    button.innerHTML = text;
    button.tag="button";
    button.id = buttonName;
    button.style.position='absolute';
    
    var x = randomNumber(0,100);
    var y = randomNumber(0,100);

    if(a!=undefined && b!=undefined){
        //the animations sending it to x and y but wait its not there yet FUCK
        button.style.top=a+"%";
        button.style.left=b+"%";
    } 
    else { //if previous button undefined
        button.style.top=x+"%";
        button.style.left=y+"%";
        
    }
    
    //button.style.marginLeft="0px";

    const event = events[randomNumber(0,events.length)];
    //when click
    button.onclick = function(){            
        eval(event);
        kill(buttonName);
        newButton("click me",randomNumber(1,3),x,y);
    }
    button.onmouseover = function(){
        if(count>breakingPoint){
            sound(clickSound);
            kill(buttonName);
            if(randomNumber(1,100)!=2){
                newButton("click me",randomNumber(2,2+Math.ceil(count/Math.pow(breakingPoint,2))), x,y);
                eval(event);
            }
            else {
                newButton("dick me",randomNumber(6,9),x,y); //lol
            }
        }
    }
    //get real
    document.body.appendChild(button);

    //animate
    if(a!= undefined && b!=undefined){
        schmove(button,a,b,x,y);
    }
}

//deletes element at id
function kill(id){
    let element = document.getElementById(id);
    element.remove(); //i was gonna be snarky and add the .remove to the end, and a rid of the element const completely but noooooo this is a learning experience
}

//draws new buttons from a b to x y (all ints), takes (predefined variable) steps to get there
function schmove(element,a,b,x,y){
    for(var i = 0; i<=steps; i++){
        let t = i/steps;
        let c = a + (t*(x-a)); //shoutouts to user21467 on stackexchange.com for this formula
        let d = b + (t*(y-b));        
        justASecMom(element,c,d,i);
    }
}

//idk how time works with javascript so im really taking the cheap route
function justASecMom(element,c,d,i){
    setTimeout(function(){
        moveTo(element,c,d);
    },animationSpeed*i);
}

//just plays the sound rn
function sound(source){
    source.cloneNode(true).play();
}

//creates new image from source at x and y (ints), returns image element data
//width and height should be integers, there will be an "%" added to the end of it
function image(source,x,y,width){
    imageCount++;
    
    var img = new Image();

    img.src = source; //'content/assets/explosion.gif'
    var id = "image"+imageCount;
    img.id = id;
    img.style.height=width+"%";
    //img.style.width=width+"%";
    img.style.top=y+"%";
    img.style.left=x+"%";
    img.style.position="absolute";
    
    img.addEventListener('load', function() {//stole this bit of code!
        document.body.appendChild(img);
        return(img);
    }, false); //no idea how this works! :D
    
}