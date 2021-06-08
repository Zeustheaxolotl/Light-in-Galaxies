class Imagescreen{

	constructor(imgR,imgIR,imgV,imgUV,imgXR){
// declaring my variables 
		this.Rimg=imgR; //the data for Radio light 
		this.IRimg=imgIR; //the data for Infrared light
		this.Vimg=imgV; //the data for visible light
		this.UVimg=imgUV; // the data for Ultraviolet light
		this.XRimg=imgXR;// the data for X-ray light 
		this.img; // creating assembled image 

		
	}
	load(){

		
		 // creating the image and loading pixels from the not combined images. 
		 	this.XRimg.resize(1000,0);
			this.Vimg.resize(1000,0);


	
		
		 if(this.Rimg!=undefined){
		 	this.Rimg.resize(1000,0);
		 	this.Rimg.loadPixels();
		 	
		 }

		if(this.UVimg!=undefined){
				this.UVimg.resize(1000,0);
			this.UVimg.loadPixels();
		}
		if(this.IRimg!=undefined){
				this.IRimg.resize(1000,0);
			this.IRimg.loadPixels();	
		}
		this.XRimg.loadPixels();
		this.Vimg.loadPixels();
		this.img=createImage(this.XRimg.width,this.XRimg.height);
		this.img.loadPixels();
		
		
		
	}
	compute(r,ir,v,uv,xr){ 
		// building the image
		this.r=r; // info from the sliders
		this.ir=ir; 
		this.v=v; 
		this.uv=uv; 
		this.xr=xr;
	
		// assembling the pixels from the images
		for(let x=0; x<this.img.width; x++){
			for(let y=0; y<this.img.height; y++){
				let index = (x+y*this.img.width)*4;
				//this.img.width=this.XRimg.width; 
				//this.img.height=this.XRimg.height; 
				this.img.pixels[index]=0;//reseting the pixels so its the same image over time 
				this.img.pixels[index+1]=0;
				this.img.pixels[index+2]=0; 

				if(this.Rimg!=undefined){//Radio is represented by the color yellow
					this.img.pixels[index]+=this.Rimg.pixels[index]*this.r/1;//red
					this.img.pixels[index+1]+=this.Rimg.pixels[index]*this.r/1;//green

				}
				if(this.IRimg!=undefined){ // IR is represented by the color red

					this.img.pixels[index]+=this.IRimg.pixels[index]*this.ir/1;//red
				}

				if(this.UVimg!=undefined){//UV is represented by the color blue

					this.img.pixels[index+2]+=this.UVimg.pixels[index]*this.uv/1;// blue

				}

				//Xray is the Color purple 
				this.img.pixels[index]+=this.XRimg.pixels[index]*this.xr/1;//red
				this.img.pixels[index+2]+=this.XRimg.pixels[index]*this.xr/1;//blue
				//Visible is green
				this.img.pixels[index+1]+=this.Vimg.pixels[index]*this.v/1;//green 	
			this.img.pixels[index+3]=255;//opacity

		}
	}

	this.img.updatePixels();// adds the pixels we just computed to the image
	//this.img.resize(1000,0);
}
show(){
	//this.img.resize(1000,0);
	image(this.img,0,0);

	}


} 