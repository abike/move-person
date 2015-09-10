var can,ctx,w,h;
var i;
//获取按键值
var key;
//绘制小人图片的参数
var px,py,pw,ph,p_dx,p_dy,p_dw,p_dy;
var dir = 'stop';
var glassPic = new Image();
var personPic = new Image();
var direction = 'stop';
var personW,personH;
var padLeft = 0;
var padTop = 0;
var glassWidth = 1000;
var glassHeight = 630;
$(function(){
	can = document.getElementById('canvas');
	ctx = can.getContext('2d');
	w = can.width;
	h = can.height;
	glassPic.src = 'img/bg.jpg';
	personPic.src = 'img/mario.png';
	personW = personPic.width;
	personH = personPic.height;
	initPersonPicPosition();
	updatePage();

});
function updatePage(){
	var t = setInterval(function(){
		fillCanvas();
		drawGlass();
		drawPerson();
		
	},50)
}
function initPersonPicPosition(){
	i = 0;
	px = 0;
	py = 450;
	pw = 50;
	ph = 60;
	p_dw = 50;
	p_dh = 60;
	p_dy = 0;
}
function drawGlass(){
	ctx.drawImage(glassPic,padLeft,padTop,glassWidth,glassHeight);
}
function fillCanvas() {
	ctx.fillStyle = "#393550";
	ctx.fillRect(0, 0, w, h);
}
function drawPerson(){
	
	if(dir == 'left'){
		if(px <= 0){
			//px = 950;
			ctx.drawImage(personPic,50*(i--),p_dy,p_dw,p_dh,px,py,pw,ph);
		}else{
			ctx.drawImage(personPic,50*(i--),p_dy,p_dw,p_dh,px-=4,py,pw,ph);
		}
		
		if(i < 0){i = 2;}
	}else if(dir == 'right'){
		if(px >= 950){
			ctx.drawImage(personPic,50*(i++),p_dy,p_dw,p_dh,px,py,pw,ph);
		}else{
			ctx.drawImage(personPic,50*(i++),p_dy,p_dw,p_dh,px+=4,py,pw,ph);
		}
		if(i == 3){i = 0;}
		
	}else if(dir == 'stop'){
		ctx.drawImage(personPic,50*i,p_dy,p_dw,p_dh,px,py,pw,ph);
	}
}

(function keyControl(){

	$(document).keydown(function(e){
		key = e.which;
		if(key ==37){
			dir = 'left';
			p_dy = 60;

		}else if(key ==39){
			dir = 'right';
			p_dy = 0;
		}
	});
	$(document).keyup(function(e){
		dir = 'stop';
	});
})();

