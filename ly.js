var k2 = document.getElementById('k2');
var k1 = document.getElementById('big');
var a1 = document.getElementById('d1');
var ul1 = document.getElementById('ul1');
var li =ul1.getElementsByTagName('li');
var a2 = document.getElementById('b1');
var num1 = 350,st,count=0,last = 0,count1,last1;
li[0].style.backgroundColor = '#432CEB';
k1.addEventListener('click',function(event){
	var target = event.target;
	switch(target.id){
		case 'b1': fn1(1,0);break;
		case 'b2': fn1(1,-350);break;
		case 'b3': fn1(1,-700);break;
		case 'b4': fn1(1,-1050);break;
		case 'b5': fn1(1,-1400);break;
		case 'd1': fn2("left",-350);break;
		case 'd2': fn2('right',350);break;
	}
});
k1.addEventListener('mouseout',function(event){
	fn3();
});
k1.addEventListener('mousemove',function(event){
	stop();
});
function fn1(temp,num) {//点击小圆点
	if(temp === 1){
		k2.style.left = num +'px';
	}
	num1 = num;
	for(var i=0;i<5;i++){
		 if(num1 == 0 || num1 == -1750 || num1 == 700 || num1==300){
	 	li[0].style.backgroundColor = '#432CEB';
	 }
	 if(num1 == -350){
	 	li[1].style.backgroundColor = '#432CEB';
	 }
	 if(num1 == -700){
	 	li[2].style.backgroundColor = '#432CEB';
	 }
	 if(num1 == -1050){
	 	li[3].style.backgroundColor = '#432CEB';
	 }
	 if(num1 == -1400){
	 	li[4].style.backgroundColor = '#432CEB';
	 }
	 li[i].style.backgroundColor = '#15F510';
	}
}
function fn2(str,num) {
	// 点击左右
	 num1 +=num;
	 if(num1 == 0 || num1 == -1750 || num1 == 700 || num1==300){
	 	li[0].style.backgroundColor = '#432CEB';
	 	li[4].style.backgroundColor = '#15F510';
	 }
	 if(num1 == -350){
	 	li[1].style.backgroundColor = '#432CEB';
	 	li[0].style.backgroundColor = '#15F510';
	 }
	 if(num1 == -700){
	 	li[2].style.backgroundColor = '#432CEB';
	 	li[1].style.backgroundColor = '#15F510';
	 }
	 if(num1 == -1050){
	 	li[3].style.backgroundColor = '#432CEB';
	 	li[2].style.backgroundColor = '#15F510';
	 }
	 if(num1 == -1400){
	 	li[4].style.backgroundColor = '#432CEB';
	 	li[3].style.backgroundColor = '#15F510';
	 }
	if(str == 'left'){
		// li[last].style.backgroundColor = '#15F510';
		if(num1 == -1750){
			num1 = 0;
		}
		k2.style.left = num1 + 'px';
		// li[count].style.backgroundColor = '#432CEB';
		// count +=1;
		// last = count-1; 
		// if(count > 4){
		// 	count = 0;
		// }
	}
	if(str == 'right'){
		if(num1 == 700 || num1 == 350){
			num1 = -1400;
		}
		k2.style.left = num1 + 'px';
		}
}
function fn3(){
	st = setInterval(function(){
		fn2("left",-350);
	},2000);
}
fn3();
function stop() {
	clearInterval(st);
}
