let object =["M31","M51","M77","M100","M101","M104","M106"];
 //creating arrays that line up objects with their data images. 
 let R= [undefined,undefined,"M77 Radio.jpeg",undefined,undefined,undefined,"M106 Radio.jpeg"];
 let IR= ["M31 Infrared.jpeg","M51 Infrared.jpeg",undefined,"M100 Infrared.jpeg","M101 Infrared.jpeg","M104 Infrared.jpeg","M106 Infrared.jpeg"];
 let V= ["M31 Visible.jpeg","M51 Visible.jpeg","M77 Visible.jpeg","M100 Visible.jpeg","M101 Visible.jpeg","M104 Visible.jpeg","M106 Visible.jpeg"];
 let UV= [undefined,"M51 Ultraviolet.jpeg",undefined,undefined,"M101 Ultraviolet.jpeg",undefined,undefined];
 let XR= ["M31 Xray.jpeg","M51 Xray.jpeg","M77 Xray.jpeg","M100 Xray.jpeg","M101 Xray.jpeg","M104 Xray.jpeg","M106 Xray.jpeg"];
 let IRimg=[];
 let Rimg=[];
 let Vimg=[];
 let UVimg=[];
 let XRimg=[];
 let imageScreen; // for my class
 let x=0; //this decides which object we are looking at
 let dropdown=false; // this is for dropdown selection  
 //these are all of the sliders
 let r;
 let ir;
 let v;
 let uv;
 let xr;
 let oldr;
 let oldir;
 let oldv;
 let olduv;
 let oldxr;
 let oldx; 
 
 function preload(){ //to get all of the images ready 
 	for (i=0; i<object.length; i++){
 		if(UV[i]!=undefined){
 			UVimg[i]=loadImage("Objects/"+object[i]+"/"+UV[i]);
 			UVimg[i].resize(1000,0);
 		}
 		if(IR[i]!=undefined){
 			IRimg[i]=loadImage("Objects/"+object[i]+"/"+IR[i]);
 			IRimg[i].resize(1000,0);	
 		}
 		if(R[i]!=undefined){
 			Rimg[i]=loadImage("Objects/"+object[i]+"/"+R[i]);
 			Rimg[i].resize(1000,0);	
 		}
 		XRimg[i]=loadImage("Objects/"+object[i]+"/"+XR[i]);	
 		XRimg[i].resize(1000,0);
 		Vimg[i]=loadImage("Objects/"+object[i]+"/"+V[i]);
 		XRimg[i].resize(1000,0);	
 	}
 }
 function setup() {
  print('here');
 	var canvas=createCanvas(2500,1500);
  canvas.parent('jsinteractives');
 	background(240);
//creating my sliders 
	textSize(25);
 	sliderR= createSlider(0,1,1,0.01);
 	sliderR.position(1100,500);
 	text("Radio",1250,410);
 	sliderIR= createSlider(0,1,1,0.01);
 	sliderIR.position(1100,540);
	text("Infrared",1250,450);
 	sliderV= createSlider(0,1,1,0.01);
	sliderV.position(1100,570);
	text("Visible",1250,485);
 	sliderUV= createSlider(0,1,1,0.01);
 	sliderUV.position(1100,620);
	text("Ultraviolet",1250,532);
 	sliderXR= createSlider(0,1,1,0.01);
 	sliderXR.position(1100,660);
 	text("X-ray",1250,570);

 	//loading my image and showing it 
 	makeImage();
 	//imageScreen.compute(r,ir,v,uv,xr);
 	//imageScreen.show();

}
 function draw() {
   r=sliderR.value();
  ir=sliderIR.value();
  v=sliderV.value();
  uv=sliderUV.value();
  xr=sliderXR.value();
  
  if((oldxr!=xr)||(oldir!=ir)||(oldv!=v)||(olduv!=uv)||(oldr!=r)||(oldx!=x)){
 	makeImage();
 }
 	if(mouseX<1210 && mouseX>1140){//
 		if(mouseY<205 && mouseY>135){
 			fill(235);
 			rect(1145,180,90,180);
 			for(y=0; y<object.length; y++){
 				fill(0);

 				text(object[y],1145,200+25*y);
 				dropdown=true;
 			}


 		}		
 	}

 	else {
 		stroke(240);
 		fill(240);
 		rect(1145,180,90,180);
 		stroke(0);
 		fill(0);
 		textSize(30);
 		text(object[x],1145,200);
 		text('Choose a Galaxy',1230,200);
 		noFill();
 		rect(1145,180,80,20); 
 		textSize(30);
 	}
 	if(dropdown=true){
 		if(mouseX<1210 &&mouseX>1140){
 			if(mouseIsPressed){
 				if(mouseY<205 && mouseY>180){
 					x=0
 					makeImage();
 					
 				}
 				if (mouseY<230 && mouseY>205){
 					x=1
 					makeImage();
 					
 				}
 				if (mouseY<255 && mouseY>230){
 					x=2
 					makeImage();
 					
 				}
 				if (mouseY<280 && mouseY>255){
 					x=3
 					makeImage();
 				}
 				if (mouseY<305 && mouseY>280){
 					x=4
 					makeImage();
 				}
 				if (mouseY<330 && mouseY>305){
 					x=5
 					makeImage();
 				}
 				if (mouseY<355 && mouseY>330){
 					x=6
 					makeImage();
 				}
 			}
 		}
 	}
  fill(0);
  text('Move sliders to control how much of each light shows up.', 1400,400,300,200);
  textSize(20);
  text('If you move a slider, and nothing happens, then none of that light is in the picture. ', 1400,600,300,200);
textSize(30);
  text('This interactive contains 3-4 images of each galaxy revealed in different wavelengths of light. These images are from NASA and represent almost all kinds of light in the electromagnetic spectrum. NASA often releases composite images like these, showing multiple types of light for a space object. This interactive lets you design the composite image. For more information about how different kinds of light reveal different parts of space objects, go Light in Space. ', 1100,900,900,400);

 	oldxr=xr;
 	oldir=ir;
 	olduv=uv;
 	oldv=v;
 	oldr=r;
 	oldx=x;
 }

 function makeImage() {
 	stroke(240);
 	fill(240);
 	rect(0,0,1000,1500);
 	imageScreen = new Imagescreen(Rimg[x], IRimg[x], Vimg[x], UVimg[x], XRimg[x]);
 	imageScreen.load();
 	imageScreen.compute(r,ir,v,uv,xr);// reloading the image 
 	imageScreen.show();
}