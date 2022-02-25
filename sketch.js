

function setup() {
  createCanvas(860, 1200);
}

function draw() {
  background(220);
  fill(0,0,0,0);

  let redFill = [215,50,50];
  let greenFill = [60,180,60];
  let yellowFill = [230,180,50];

  strokeWeight(6);
  strokeCap(SQUARE);

  function circle(r) {
    stroke(redFill);
    arc(width/2, height/3, r, r, 0.8, 1.2);
    stroke(greenFill);
    arc(width/2, height/3, r, r, 0.4, 0.8);
    stroke(yellowFill);
    arc(width/2, height/3, r, r, 0, 0.4);
  
    stroke(redFill);
    arc(width/2, height/3, r, r, 2.4, 2.8);
    stroke(greenFill);
    arc(width/2, height/3, r, r, 2, 2.4);
    stroke(yellowFill);
    arc(width/2, height/3, r, r, 1.6, 2);
  
    stroke(redFill);
    arc(width/2, height/3, r, r, 3.9, 4.3);
    stroke(greenFill);
    arc(width/2, height/3, r, r, 3.5, 3.9);
    stroke(yellowFill);
    arc(width/2, height/3, r, r, 3.1, 3.5);
  
    stroke(redFill);
    arc(width/2, height/3, r, r, 5.5, 5.9);
    stroke(greenFill);
    arc(width/2, height/3, r, r, 5.1, 5.5);
    stroke(yellowFill);
    arc(width/2, height/3, r, r, 4.7, 5.1);
  }

  circle(40);
  circle(100);
  circle(160);
  circle(220);
  circle(280);
  circle(340);
  circle(400);
  circle(460);
  circle(520);
  circle(580);

  // let radiusChange1 = (sin(frameCount*0.008)+1)*15;
  // let radiusChange2 = (sin(frameCount*0.01)+1)*10;
  // let radiusChange3 = (sin(frameCount*0.017)+1)*6;
  // let radiusChange4 = (sin(frameCount*0.025)+1)*3;

  // ellipse(820, 0, 1144 + radiusChange1);
  // ellipse(240, 580, 456 - radiusChange2);
  // ellipse(490, 800, 183 + radiusChange3);
  // ellipse(573, 690, 73 - radiusChange4);

  fill(0,0,0);
  noStroke();

  textFont('Helvetica', 40);
  text("musica viva", 609, 985);

  textFont('Helvetica', 18);

  text(`
    dienstag, den 7. januar 1958 
    20.15 uhr großer tonhallesaal 
    12. volkskonzert 
    de tonhalle-gesellschaft 
    zürich 
    als drittes konzert 
    im zyklus «musica viva» 
    leitung hans rosbaud 
    solisten alfred baum klavier 
    andré jaunet flöte`, 
  5, 950);

  text(`
    schweizerische erstaufführungen
    andré jolivet
    cinque danses rituelles
    ernst krenek
    zweites klavierkonzert
    luigi nono
    «y su sangre va vienne cantando»
    musik für flöte und kleines orchester
    bernd aloys zimmermann
    sinfonie in einem satz`, 
  270, 950);

  text(`
    
  
  
  
  
  
    karten fr. 1.-, 2.- und 3.-
    vorverkauf tonhallekasse hug
    jecklin kuoni
    genossenschaftsbuchhandlung`, 
  590, 950);



}