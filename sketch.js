function setup() {
  createCanvas(860, 1200);
}

function draw() {
  background(220);
  noStroke();
  fill(0);

  let radiusChange1 = (sin(frameCount*0.008)+1)*15;
  let radiusChange2 = (sin(frameCount*0.01)+1)*10;
  let radiusChange3 = (sin(frameCount*0.017)+1)*6;
  let radiusChange4 = (sin(frameCount*0.025)+1)*3;

  ellipse(820, 0, 1144 + radiusChange1);
  ellipse(240, 580, 456 - radiusChange2);
  ellipse(490, 800, 183 + radiusChange3);
  ellipse(573, 690, 73 - radiusChange4);

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
