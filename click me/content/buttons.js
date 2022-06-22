const events = [
    "console.log('have a nice day :)')",
    "changeBackground();",
    "thanosSnap();",
    "secretScreen();",
    "jumpscare();",
    "explode(button.style.left,button.style.top);",// i worked so hard to get parameters to work with these functions just to not use them lol
    "blast(button.style.left, button.style.top);", //what the fuck was i talking about when i wrote that comment. ffs i was literally using parameters at the time
]; 

//changes the color of the background, if color is undefined, color is chosen randomly
function changeBackground(color){
    if(color == undefined){
        color = "rgb(" + randomNumber(0,255) + "," + randomNumber(0,255) + "," + randomNumber(0,255) + ")";
    }
    document.body.style.backgroundColor=color;
}

function thanosSnap(){
    let elements = document.getElementsByTagName("button");
    if(elements.length > 12){
        for(i=0;i<Math.floor(elements.length/2);i++){
            let element = elements[i];
            
            if(i<maxSnaps){
                let x = getNum(element.style.left);
                let y = getNum(element.style.top);
                image('content/assets/dust.gif',x,y,10);
                timedKill("image"+imageCount,750);
            }

            kill(element.id);
            
        }
    }
}

//kills element at id after ms
function timedKill(id,ms){
    setTimeout(function(){
        kill(id);
    },ms);
}

//dont tell anyone!
function secretScreen(){
    if(randomNumber(1,secretChance)==1 && count>breakingPoint){
        if(!trumped || repeatSecretScreen){
            sadTrombone.play();
            window.open("content/secrtet page.html");
            trumped=true;
            setTimeout(function(){
                sadTrombone.pause();
            },770);
        }
        if(!repreatSecretScreen){
            //add code later that removes seccret screen from possibilites (i dont know how to do that yet)
        }
    }
}

//dont read code if youre not ready to get scared!!!
function jumpscare(){
    if(randomNumber(1,jumpscareChance)==16 && count>breakingPoint && !gotem){
        alert("jumpscare");
        gotem=true;
    }
}

//boom crash aaaaaaaaa
function explode(x,y){
    x = getNum(x);
    y = getNum(y);
    image('content/assets/explosion.gif',x,y-15,30);
    sound(explosion);
    timedKill("image"+imageCount,750);
}

//for blast add an animation or something dude
// also maybe get rid of the timing and just make it so it can only happen when theres a lot of elements
// off topic but combine jumpscare and secret screen

//checks for every element and deletes every element thats within the vicinity of whatevers at x and y
function blast(x,y){//dont forget x and y are center coordinates of circle
    //if you have a solution that doesnt involve checking EVERY element, id love to hear it. so much math bro ffs
    var elements = document.getElementsByTagName("button");
    var radius = Math.pow(blastRadius,2);
    x = getNum(x);
    y = getNum(y);
    
    setTimeout(function(){
        for(var i=0; i<elements.length;i++){
            var element = elements[i];
            let a = getNum(element.style.left);
            let b = getNum(element.style.top);
            if( Math.pow(a-x,2) + Math.pow(b-y,2) < radius){
                element.remove();
            }
        }
    },animationSpeed*(steps));
}

//tumbleweed *doesnt* roll by
 //because theres code now