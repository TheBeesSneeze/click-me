//please note that numbers that refer to distance are reliative to %, so '15' means its at the point that's 15% of your screen
// ===config===

//how many elements you need to click until you can start just mousing over them
const breakingPoint = 25;
//how many frames/steps when animating movement of new buttons
const steps=6;
//how many ms between steps (above)
const animationSpeed=55;

//the speed of elements when using keyboard controls
const horizontalSpeed = 30; //(lower amount makes elements faster)
//the speed of the sky (set to 1 for regular/ ceiling effect, set to 0 to get an error)
const horizonOffset = 5;
//ms between jump frames
const jumpSpeed = 10; 
//how many pixels up/down we schmooving
const jumpHeight = 20;
//buttons out of view will be teleported to random spot on screen if this variable is true
const correctWalking = true;

//the radius of that button that deletes elements in a circle
const blastRadius=5;

//boo!
const jumpscareChance = 55;
//chance of getting secret page
const secretChance = 25;
//if you can get to the secret screen again (this fucks with the sad trumpet audio tho, like everything else works perfectly, but i wouldnt fuck with it)
const repeatSecretScreen = true;
//the max amount of elements that will get that lil dust gif when thanos deletes half the elements on the screen (note that half the elements will always die, this variable only caps how many gifs there will be)
const maxSnaps = 25;

// === dont fuck with the variables past this point ===

//dynamic variables 
var count = 1;
var imageCount = 0;
var gotem = false; //(if jumpscared)
var trumped = false; //if trumpet sounds played yet
var jumping = false;
var creativeFlight = false;

//constants
const height=screen.height;
const width=screen.width;

//sound
const clickSound = new Audio("content/the noise/click.mp3");
const explosion = new Audio("content/the noise/explosion.mp3");
const sadTrombone = new Audio("content/the noise/sad trombone.mp3");