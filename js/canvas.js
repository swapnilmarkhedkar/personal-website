var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c=canvas.getContext('2d'); //context

console.log(canvas.width);
console.log(canvas.height);

var numberOfCirlces = canvas.width/2;
// canvas.width=1000;//horizontal resolution (?) - increase for better looking text
// canvas.height=500;//vertical resolution (?) - increase for better looking text
// canvas.style.width=width;//actual width of canvas
// canvas.style.height=height;//actual height of canvas

// c.fillStyle = 'rgba(250,0,0,0.1)';
// c.fillRect(100,100,100,100);

// //Line
// c.beginPath();
// c.moveTo(50,300);
// c.lineTo(300,100);
// c.lineTo(400,300);
// c.strokeStyle="#fa34a3";
// c.stroke();

//Circle
// c.beginPath();
// c.arc(300,300,30,0,Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

// for(var i=0; i<100; i++){
// 	var x = Math.random() * window.innerWidth;
// 	var y = Math.random() * window.innerHeight;

// 	c.beginPath();
// 	c.arc(x,y,30,0,Math.PI * 2, false);
// 	color = Math.random() * colors.length;
// 	console.log(Math.floor(color));
// 	c.strokeStyle = colors[(Math.floor(color))];
// 	c.stroke();	
// }

var colorArray = [
	'#5089A5',
	'#B3E7F2',
	'#D95032',
	'#FBA481',
	'#183446'
];

// var colorArray = [
// 	'#253238',
// 	'#435964',
// 	'#76919C',
// 	'#AFBEC5',
// 	'#EBEFF2'
// ];
// var colorArray = [
// 	'#473E5B',
// 	'#7F5A77',
// 	'#E17369',
// 	'#FF8B5C',
// 	'#F57E3F'
// ];

var mouse = {
	x: undefined,
	y: undefined
};

var maxRadius = 40;
var minRadius = 5;

window.addEventListener('mousemove',function(event){
	mouse.x=event.x;
	mouse.y=event.y;
});

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
});

function Circle(x, y, dx, dy, radius){
	this.x=x;
	this.y=y;
	this.dx=dx;
	this.dy=dy;
	this.radius=radius;
	this.minRadius = radius;

	var myColor = Math.random() * colorArray.length;
	myColor = Math.floor(myColor);
	// console.log(myColor);
	this.color = colorArray[myColor];

	this.draw = function(){
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0,Math.PI * 2, false);
		// color = Math.random() * colors.length;
		// console.log(Math.floor(color));
		// c.strokeStyle = colors[(Math.floor(color))];
		c.fillStyle = this.color;
		// console.log(this.color);
		// c.strokeStyle="#fa34a3";
		// c.stroke();
		c.fill();


		// c.fillStyle = "white";
		// c.textAlign = "center";
		// c.font = "bold 100px Helvetica";
		// c.fillText("Swapnil", (canvas.width / 2) - 17, (canvas.height / 2) + 8);
	}

	this.update = function(){
		if(this.x + this.radius > innerWidth || this.x - this.radius< 0){
			this.dx=-this.dx;
		}

		if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
			this.dy=-this.dy;
		}

		this.x+=this.dx;
		this.y+=this.dy;

		//interactivity
		if((mouse.x-this.x<50) && (mouse.x -this.x> -50) && (mouse.y-this.y<50) && (mouse.y -this.y> -50)) {
			if(this.radius<maxRadius)
				this.radius+=1;
		}else if(this.radius>this.minRadius){
			this.radius-=1;
		}


		this.draw();
	}

}

var circleArray = [];

for(var i=0; i<numberOfCirlces; i++){
	var x=Math.random() * (innerWidth - radius * 2) + radius;
	var y=Math.random() * (innerHeight - radius * 2) + radius;
	var dx=(Math.random() - 0.5);
	var dy=(Math.random() - 0.5);
	var radius=Math.random() * 3 + 5;

	circleArray.push(new Circle(x,y,dx,dy,radius));

}
// var circle = new Circle(200,200,3,3,30);

function animate(){
	requestAnimationFrame(animate);

	c.clearRect(0,0,innerWidth, innerHeight);

	for(var i=0; i<numberOfCirlces; i++) {
		circleArray[i].update();		
	}

}



animate();