canvas=document.getElementById("canvas")
ctx.canvas.getContext("2d")
car_width = 30;
car_height = 10;


background_image = "parkingLot.jpg";
car_image = "car2.png";

car_x = 100;
car_y = 100;

function add() {
	background_imgTag = new Image(); 
	background_imgTag.onload = uploadBackground; 
	background_imgTag.src = background_image;  
	
	car_imgTag = new Image(); //defining a variable with a new image
	car_imgTag.onload = uploadrover; // setting a function, onloading this variable
	car_imgTag.src = car_image;   // load image
}



function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	
	ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >=0)
	{
		car_y = car_y - 10;
		console.log("When up arrow is pressed,  x = " + car_x + " | y = " +car_y);
		 uploadBackground();
		 uploadgreencar();
	}	
}

function down()
{
	if(car_y <=500)
	{
		car_y =car_y+ 10;
		console.log("When down arrow is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		 uploadgreencar();
	}	
}

function left()
{
	if(car_x >= 0)
	{
		car_x =car_x - 10;
		console.log("When left arrow is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		 uploadgreencar();
	}	
}

function right()
{
	if(car_x <= 700)
	{
		car_x =car_x + 10;
		console.log("When right arrow is pressed,  x = " + car_x + " | y = " +car_y);
		uploadBackground();
		uploadgreencar();
   }	
}
