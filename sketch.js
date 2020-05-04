const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var canvas;
var language = [];



function setup() {
  canvas = createCanvas(1366,605);

  engine = Engine.create();
  world = engine.world;
}



function draw() {
  background(255); 

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language1 = new Language(random(15,1350),-400, "Spanish.png");
      language.push(language1);
      World.add(world, language1);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language2 = new Language(random(15,1350),-400, "Sundanese.png");
      language.push(language2);
      World.add(world, language2);
    }
  }

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language3 = new Language(random(15,1350),-400, "Korean.png");
      language.push(language3);
      World.add(world, language3);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language4 = new Language(random(15,1350),-400, "Malay.png");
      language.push(language4);
      World.add(world, language4);
    }
  }

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language5 = new Language(random(15,1350),-400, "Portugese.png");
      language.push(language5);
      World.add(world, language5);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language6 = new Language(random(15,1350),-400, "Punjabi.png");
      language.push(language6);
      World.add(world, language6);
    }
  }

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language7 = new Language(random(15,1350),-400, "Romanian.png");
      language.push(language7);
      World.add(world, language7);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language8 = new Language(random(15,1350),-400, "Russian.png");
      language.push(language8);
      World.add(world, language8);
    }
  }

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language9 = new Language(random(15,1350),-400, "Icelandic.png");
      language.push(language9);
      World.add(world, language9);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language10 = new Language(random(15,1350),-400, "Hungarian.png");
      language.push(language10);
      World.add(world, language10);
    }
  }

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language11 = new Language(random(15,1350),-400, "Irish.png");
      language.push(language11);
      World.add(world, language11);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language12 = new Language(random(15,1350),-400, "Italian.png");
      language.push(language12);
      World.add(world, language12);
    }
  }

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language13 = new Language(random(15,1350),-400, "German.png");
      language.push(language13);
      World.add(world, language13);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language14 = new Language(random(15,1350),-400, "Japanese.png");
      language.push(language14);
      World.add(world, language14);
    }
  }

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language15 = new Language(random(15,1350),-400, "Slovak.png");
      language.push(language15);
      World.add(world, language15);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language16 = new Language(random(15,1350),-400, "Serbian.png");
      language.push(language16);
      World.add(world, language16);
    }
  }

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language17 = new Language(random(15,1350),-400, "Albanian.png");
      language.push(language17);
      World.add(world, language17);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language18 = new Language(random(15,1350),-400, "Armenian.png");
      language.push(language18);
      World.add(world, language18);
    }
  }

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language19 = new Language(random(15,1350),-400, "Azerbaijani.png");
      language.push(language19);
      World.add(world, language19);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language20 = new Language(random(15,1350),-400, "Bulgarian.png");
      language.push(language20);
      World.add(world, language20);
    }
  }

  if(frameCount % 80 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language21 = new Language(random(15,1350),-400, "Chinese-Simplified.png");
      language.push(language21);
      World.add(world, language21);
    }
  }

  if(frameCount % 40 === 0) {
    for(var i = 0; i < 1 ; i++) {
      language22 = new Language(random(15,1350),-400, "Chinese-Traditional.png");
      language.push(language22);
      World.add(world, language22);
    }
  }

  for(var j = 0; j < language.length; j++) {
    language[j].display();
  }
  
}