
let counter = 0;

let radiusChange1 = 0;
let radiusChange2 = 0;
let radiusChange3 = 0;
let radiusChange4 = 0;
let radiusChange5 = 0;
let radiusChange6 = 0;
let radiusChange7 = 0;
let radiusChange8 = 0;
let radiusChange9 = 0;
let radiusChange10 = 0;

function setup() {
  createCanvas(860, 1200);
}

function draw() {
  background(230, 230, 220);
  fill(0,0,0,0);

  let redFill = [215,50,50];
  let greenFill = [60,190,60];
  let yellowFill = [240,180,50];

  strokeWeight(8);
  strokeCap(SQUARE);

  function circle(r, angle) {
    stroke(redFill);
    arc(width/2, height/3, r, r, angle + 0.8, angle + 1.2);
    stroke(greenFill);
    arc(width/2, height/3, r, r, angle + 0.4, angle + 0.8);
    stroke(yellowFill);
    arc(width/2, height/3, r, r, angle + 0, angle + 0.4);
  
    stroke(redFill);
    arc(width/2, height/3, r, r, angle + 2.4, angle + 2.8);
    stroke(greenFill);
    arc(width/2, height/3, r, r, angle + 2, angle + 2.4);
    stroke(yellowFill);
    arc(width/2, height/3, r, r, angle + 1.6, angle + 2);
  
    stroke(redFill);
    arc(width/2, height/3, r, r, angle + 3.9, angle + 4.3);
    stroke(greenFill);
    arc(width/2, height/3, r, r, angle + 3.5, angle + 3.9);
    stroke(yellowFill);
    arc(width/2, height/3, r, r, angle + 3.1, angle + 3.5);
  
    stroke(redFill);
    arc(width/2, height/3, r, r, angle + 5.5, angle + 5.9);
    stroke(greenFill);
    arc(width/2, height/3, r, r, angle + 5.1, angle + 5.5);
    stroke(yellowFill);
    arc(width/2, height/3, r, r, angle + 4.7, angle + 5.1);
  }

  counterFun();
  console.log(counter);



  setTimeout(function() {
   radiusChange1 = (noise(frameCount*0.025)+1)*10;
  }, 1000);

  setTimeout(function() {

   radiusChange2 = (noise(frameCount*0.02)+1)*10;
  }, 2000);

  setTimeout(function() {

   radiusChange3 = (noise(frameCount*0.01)+1)*10;
  }, 3000);

  setTimeout(function() {

   radiusChange4 = (noise(frameCount*0.009)+1)*10;
  }, 4000);
 
  setTimeout(function() {

   radiusChange5 = (noise(frameCount*0.008)+1)*10;
    }, 5000);
setTimeout(function() {

   radiusChange6 = (noise(frameCount*0.007)+1)*10;
    }, 6000);
setTimeout(function() {

   radiusChange7 = (noise(frameCount*0.006)+1)*10;
    }, 7000);
setTimeout(function() {

   radiusChange8 = (noise(frameCount*0.004)+1)*10;
    }, 8000);
setTimeout(function() {

   radiusChange9 = (noise(frameCount*0.003)+1)*10;
    }, 9000);
setTimeout(function() {

   radiusChange10 = (noise(frameCount*0.002)+1)*10;
  }, 10000);



  circle(60, 0 + radiusChange1);
  circle(140, 1 - radiusChange2);
  circle(220, 0.6 + radiusChange3);
  circle(300, 0.2 - radiusChange4);
  circle(380, 2.9 + radiusChange5);
  circle(460, 2.5 - radiusChange6);
  circle(540, 2.1 + radiusChange7);
  circle(620, 1.7 - radiusChange8);
  circle(700, 1.3 + radiusChange9);
  circle(780, 0.9 - radiusChange10);


  fill(0,0,0);
  noStroke();

  textStyle(BOLD);
  textFont('Helvetica', 46);
  text("musica   viva", 460, 900);

  textStyle(NORMAL);
  textFont('Helvetica', 18);
  fill(175,50,50);
  text(`
  donnerstag, den 7.januar 1971
          20.15uhr  grosser tonhallesaal
                   zweites musica viva-konzert der tonhalle-gesellschaft zürich
                             
                                  leitung   ernest bour
                                          solist   hansheinz schneeberger
                                                  orchester   tonhalle-orchester
                             
                                                                 klaus huber   violinkonzert «tempora»
                                                                         karl amadeus hartmann   siebente sinfonie`, 
  5, 920);




}

function counterFun() {
  if (frameCount % 8 == 0){
    counter++;
    return; 
  }
}