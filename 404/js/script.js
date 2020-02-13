document.onreadystatechange = completeLoading;
function completeLoading() {
　　 if(document.readyState == "complete"){
		size();
	}
}
window.onresize = function(){
	size();
}
//
function size(){
	var w=window.innerWidth;
	var h=window.innerHeight;
	var mw=parseInt(getComputedStyle($('main'))['width']);
	var mh=parseInt(getComputedStyle($('main'))['height']);
	var th=parseInt(getComputedStyle($('top'))['height']);
	var idw=parseInt(getComputedStyle($('img-div'))['width']);
	var ipw=parseInt(getComputedStyle($('punch'))['width']);
	var itw=parseInt(getComputedStyle($('touch'))['width']);
	if(h-mh>=0){
		$('main').style.marginTop=(h-mh)/2+'px';
		$('punch').style.top=(h-mh)/2+'px';
		$('touch').style.top=(h-mh)/2+th+50+'px';
	}else{
		$('main').style.marginTop=0+'px';
		$('punch').style.top=0+'px';
		$('touch').style.top=0+th+50+'px';
	};
	if(w-mw>=0){
		$('punch').style.left=(w-ipw)/2+'px';
		$('touch').style.left=(w+itw)/2+'px';
	}else{
		$('punch').style.left=(mw-ipw)/2+'px';
		$('touch').style.left=(mw+itw)/2+'px';
	};
	if(w<=1200||h<=720){
		$('clock').style.width=w+'px';
		$('clock').style.right='0px';
		$('clock').style.bottom='0px';
	}else{
		$('clock').style.width='300px';
		$('clock').style.right='50px';
		$('clock').style.bottom='50px';
	};
}
//
function $(a,b,c){
	dom = document.getElementsByClassName(a);
	if(a&&b==undefined){
		return dom[0];
	}else if(a&&b){
		for(i=0;i<dom[0].children.length;i++){
			if(dom[0].children[i].className == b){
				if(c){
					for(j=0;j<dom[0].children[i].children.length;j++){
						var nodeName = dom[0].children[i].children[j].nodeName;
						nodeName = nodeName.toLowerCase(nodeName);
						if(nodeName == c){
							return dom[0].children[i].children[j];
						};
					};
				}else{
					return dom[0].children[i];
				};
			};
		};
	};
};
//计数
var x=0;
var z=0;
$('left','btn').onclick = function(){
	x+=1;
	$('left','count-text','span').innerText=x;
	$('left','btn').setAttribute("disabled",true);
	$('right','btn').setAttribute("disabled",true);
	resetTime('left');
	a='punch';
	sound(a);
	//playImage(a);
	playAudio(a);
	//transition(a,'in');
	//removeDisabled('left');
};
$('right','btn').onclick = function(){
	z+=1;
	$('right','count-text','span').innerText=z;
	$('left','btn').setAttribute("disabled",true);
	$('right','btn').setAttribute("disabled",true);
	resetTime('right');
	a='touch';
	sound(a);
	//playImage(a);
	playAudio(a);
	//transition(a,'in');
	//removeDisabled('right');
};
function removeDisabled(a){
	clearTimeout(rd);
	var rd = setTimeout(function(){
		$(a,'btn').removeAttribute("disabled");
		clearTimeout(rd);
	},3000);
}
//初始化
var time={};
time.left={};
time.right={};
var arr=['timeout','year','month','week','day','hours','minutes','seconds'];
for(i=0;i<arr.length;i++){
	time.left[arr[i]]=0;
	time.right[arr[i]]=0;
}
countTime('left');
countTime('right');
//补零
function addZero(n){
	if(n<10){
		return '0'+n;
	}else{
		return ''+n;
	};
};
//重置
function resetTime(a){  
	for(i=0;i<arr.length;i++){
		time[a][arr[i]]=0;
	};
	$(a,'time-text','span').innerText="00秒";
};
//暂停
function stopTime(a){  
	clearTimeout(time[a][arr[0]]);
};
//计时
function countTime(a){
	time[a].seconds+=1;
	time[a].timeout=setTimeout('countTime('+'"'+a+'"'+')',1000);
	if(time[a].seconds>=60){
		time[a].seconds=0;
		time[a].minutes+=1;
	};
	if(time[a].minutes>=60){
		time[a].minutes=0;
		time[a].hours+=1;
	};
	if(time[a].hours>=24){
		time[a].hours=0;
		time[a].day+=1;
	};
	if(time[a].day>=7){
		time[a].day=0;
		time[a].week+=1;
	};
	if(time[a].week>=4&&time[a].day>=2){
		time[a].week=0;
		time[a].day=0;
		time[a].month+=1;
	};
	if(time[a].month>=12){
		time[a].month=0;
		time[a].year+=1;
	};
	if(time[a].year!=0){
		$(a,'time-text','span').innerText=
		addZero(time[a].year)+'年'+
		addZero(time[a].month)+'月'+
		addZero(time[a].week)+'周'+
		addZero(time[a].day)+'日'+
		addZero(time[a].hours)+'时'+
		addZero(time[a].minutes)+'分'+
		addZero(time[a].seconds)+'秒';
	}else if(time[a].month!=0){
		$(a,'time-text','span').innerText=
		addZero(time[a].month)+'月'+
		addZero(time[a].week)+'周'+
		addZero(time[a].day)+'日'+
		addZero(time[a].hours)+'时'+
		addZero(time[a].minutes)+'分'+
		addZero(time[a].seconds)+'秒';
	}else if(time[a].week!=0){
		$(a,'time-text','span').innerText=
		addZero(time[a].week)+'周'+
		addZero(time[a].day)+'日'+
		addZero(time[a].hours)+'时'+
		addZero(time[a].minutes)+'分'+
		addZero(time[a].seconds)+'秒';
	}else if(time[a].day!=0){
		$(a,'time-text','span').innerText=
		addZero(time[a].day)+'日'+
		addZero(time[a].hours)+'时'+
		addZero(time[a].minutes)+'分'+
		addZero(time[a].seconds)+'秒';
	}else if(time[a].hours!=0){
		$(a,'time-text','span').innerText=
		addZero(time[a].hours)+'时'+
		addZero(time[a].minutes)+'分'+
		addZero(time[a].seconds)+'秒';
	}else if(time[a].minutes!=0){
		$(a,'time-text','span').innerText=
		addZero(time[a].minutes)+'分'+
		addZero(time[a].seconds)+'秒';
	}else if(time[a].seconds!=0){
		$(a,'time-text','span').innerText=
		addZero(time[a].seconds)+'秒';
	};
};
//音频
function playAudio(a){
	var arr={}
	arr.touch = [
		'https://img.moegirl.org/common/b/bf/Yudachi26.mp3',//0 poi
		'https://img.moegirl.org/common/4/42/Yudachi09.mp3',//3 嗯 这不是很好吗
		'https://img.moegirl.org/common/3/36/Yuudachi02tsuyu.mp3',//4 嗯 很舒服poi
		'https://img.moegirl.org/common/d/d1/Yuudachi02.mp3',//2 在叫pio嘛 有什么事吗
		'https://img.moegirl.org/common/a/af/Yudachi04.mp3',//4 那是什么 新的玩法poi
		'https://img.moegirl.org/common/3/36/Yuudachi02tsuyu.mp3',//4 嗯 很舒服poi
		'https://img.moegirl.org/common/3/36/Yuudachi02tsuyu.mp3',//4 嗯 很舒服poi
		'https://img.moegirl.org/common/3/36/Yuudachi02tsuyu.mp3',//4 嗯 很舒服poi
		'https://img.moegirl.org/common/3/36/Yuudachi02tsuyu.mp3'//4 嗯 很舒服poi
	];
	arr.punch = [
		'https://img.moegirl.org/common/b/bf/Yudachi26.mp3',//0 poi
		'https://img.moegirl.org/common/f/f3/Yudachi19.mp3',//0 呀
		'https://img.moegirl.org/common/1/1c/Yudachi20.mp3',//0 哇
		'https://img.moegirl.org/common/1/14/Yudachi21.mp3',//4 真是的 笨蛋 这样就不能战斗了poi
		'https://img.moegirl.org/common/1/1b/Yudachi22.mp3',//4 难道说 我就要沉了poi
		'https://img.moegirl.org/common/f/f3/Yudachi19.mp3',//0 呀
		'https://img.moegirl.org/common/f/f3/Yudachi19.mp3',//0 呀
		'https://img.moegirl.org/common/1/1c/Yudachi20.mp3',//0 哇
		'https://img.moegirl.org/common/1/1c/Yudachi20.mp3'//0 哇
	];
	var n = Math.floor(Math.random() * arr[a].length + 1)-1;
	var audio = document.createElement('audio');
	audio.id = 'audio';
	audio.src = arr[a][n];
	$('main').appendChild(audio);
	var fn;
	if(a=='touch'){
		//fn=2;
		if(n==0){
			fn=1;
		}else if(n==1){
			fn=3;
		}else if(n==2||n==5||n==6||n==7||n==8){
			fn=4;
		}else if(n==3){
			fn=2;
		}else if(n==4){
			fn=5;
		}
	}else if(a=='punch'){
		if(n==0||n==1||n==2||n==5||n==6||n==7||n==8){
			fn=100;
		}else if(n==3||n==4){
			fn=3500;
		}
	}
	transition(a,'in',fn);
	var audioTime = setTimeout(function(){
		document.getElementById('audio').play();
		playImage(a,fn);
	},500);
	document.getElementById('audio').addEventListener('ended', function(){
		clearTimeout(audioTime);
		document.getElementById('audio').remove();
	}, false);
}
//图片
function playImage(a,b) {
	var n=0;
	fn=b;
	var t=0;
	var time = setInterval(autoImg,t);
	function autoImg(){
		n++;
		//playAudio(a);
		clearInterval(time);
		if(a=='touch'){
			if(n==1){
				$('img').src='./img/'+(n+4)+'.png';
				time = setInterval(autoImg,500);
			}else if(n==2){
				$('img').src='./img/'+(n+4)+'.png';
				time = setInterval(autoImg,500);
			}else{
				clearInterval(time);
				n=0;
				fo();
			};
		}else if(a=='punch'){
			if(n==1){
				$('img').src='./img/'+(n+0)+'.png';
				time = setInterval(autoImg,100);
			}else if(n==2){
				$('img').src='./img/'+(n+0)+'.png';
				time = setInterval(autoImg,200);
			}else if(n==3){
				$('img').src='./img/'+(n+0)+'.png';
				time = setInterval(autoImg,400);
			}/*else if(n==4){
				$('img').src='./img/'+(n+0)+'.png';
				time = setInterval(autoImg,200);
			}*/else{
				clearInterval(time);
				n=0;
				//fo();
				setTimeout(function(){
					$('img').src='./img/4.png';
				},b);
				setTimeout(function(){
					$('img').src='./img/0.png';
				},500+b);
				setTimeout(function(){
					$('left','btn').removeAttribute("disabled");
					$('right','btn').removeAttribute("disabled");
					//clearTimeout(rd);
				},200+500+b);
			};
		};
		//
	};
	function fo(){
		fn--;
		if(fn>0){
			time = setInterval(autoImg,t);
		}else if(fn<=0){
			clearInterval(time);
			$('img').src='./img/7.png';
			setTimeout(function(){
				$('left','btn').removeAttribute("disabled");
				$('right','btn').removeAttribute("disabled");
				//clearTimeout(rd);
			},200);
		};
	};
};
//手
function playHand(a,b){
	var n=0;
	var fn=b;
	var t=30;
	var test = $(a);
	//声明步长值stepY、stepX
	var stepY,stepX;
	if(a=='touch'){
		stepY = -10;
		stepX = -10;
		t=30;
	}else if(a=='punch'){
		stepY = 10;
		stepX = -10;
		t=20;
	}
	//声明当前值curY、curX
	var curY,curX;
	//声明目标值
	var targetY = parseFloat('400px');
	var time = setInterval(autoHand,t);
	function autoHand(){
		n++;
		if(n==38){
			clearInterval(time);
			n=0;
			if(a=='touch'){
				fo();
			}else if(a=='punch'){
				transition(a,'out');
			}
		};
		//更新当前值
		curY = parseFloat(getCSS(test,'top'));
		curX = parseFloat(getCSS(test,'left'));
		//更新步长值
		if(a=='touch'){
			//竖左
			stepY += 1;
			if(stepY == 10){
				stepY = -9;
				stepX = -stepX;
			}
		}else if(a=='punch'){
			//横上
			stepX += 1;
			if(stepX == 10){
				stepX = -9;
				stepY = -stepY;
			}
		}
		//更新top、left值
		test.style.top = curY + stepY + 'px';
		test.style.left = curX + stepX + 'px';
	}
	function fo(){
		fn--;
		if(fn>0){
			time = setInterval(autoHand,t);
		}else if(fn<=0){
			clearInterval(time);
			transition(a,'out');
		};
	};
};
function getCSS(obj,style){
	if(window.getComputedStyle){
		return getComputedStyle(obj)[style];
	};
	return obj.currentStyle[style];
};
//手显示
function transition(a,b,c){
	var n=0;
	var t=10;
	var transitionTime = setInterval(func,t);
	function func(){
		n++;
		clearInterval(transitionTime);
		if(b=='in'){
			$(a).style.opacity=n*0.1;
		}else if(b=='out'){
			$(a).style.opacity=1-n*0.1;
		}
		if(n<=10){
			transitionTime = setInterval(func,t);
		}else if(b=='in'){
			clearInterval(transitionTime);
			n=0;
			playHand(a,c);
		}else if(b=='out'){
			clearInterval(transitionTime);
			n=0;
		};
	};
};
//手音效
function sound(){
	var url={};
	url['touch']='./audio/touch.mp3';
	url['punch']='./audio/punch.mp3';
	var audio = document.createElement('audio');
	audio.id = 'sound';
	audio.src = url[a];
	$('main').appendChild(audio);
	document.getElementById('sound').play();
	document.getElementById('sound').addEventListener('ended', function(){
		document.getElementById('sound').remove();
	}, false);
};
!function(){
	//放置
	var layAsideAudio = document.getElementById('layAside');
	var layAsideTime = setInterval(layAside,610000);
	function layAside(){
		clearInterval(layAsideTime);
		layAsideAudio.src = 'https://img.moegirl.org/common/7/7a/Yudachi29.mp3';
		layAsideAudio.src = '';
		layAsideTime = setInterval(layAside,610000);
	};
	//报时
	var reportTimeAudio = document.getElementById('reportTime');
	var reportTimeUrl = [
		'https://img.moegirl.org/common/8/8e/Yudachi_KaiNi_30.mp3',
		'https://img.moegirl.org/common/1/18/Yudachi_KaiNi_31.mp3',
		'https://img.moegirl.org/common/3/34/Yudachi_KaiNi_32.mp3',
		'https://img.moegirl.org/common/c/c1/Yudachi_KaiNi_33.mp3',
		'https://img.moegirl.org/common/0/0f/Yudachi_KaiNi_34.mp3',
		'https://img.moegirl.org/common/6/6e/Yudachi_KaiNi_35.mp3',
		'https://img.moegirl.org/common/e/e6/Yudachi_KaiNi_36.mp3',
		'https://img.moegirl.org/common/4/4e/Yudachi_KaiNi_37.mp3',
		'https://img.moegirl.org/common/2/2c/Yudachi_KaiNi_38.mp3',
		'https://img.moegirl.org/common/e/e8/Yudachi_KaiNi_39.mp3',
		'https://img.moegirl.org/common/e/ed/Yudachi_KaiNi_40.mp3',
		'https://img.moegirl.org/common/3/37/Yudachi_KaiNi_41.mp3',
		'https://img.moegirl.org/common/e/ed/Yudachi_KaiNi_42.mp3',
		'https://img.moegirl.org/common/2/25/Yudachi_KaiNi_43.mp3',
		'https://img.moegirl.org/common/7/77/Yudachi_KaiNi_44.mp3',
		'https://img.moegirl.org/common/3/3f/Yudachi_KaiNi_45.mp3',
		'https://img.moegirl.org/common/4/43/Yudachi_KaiNi_46.mp3',
		'https://img.moegirl.org/common/8/85/Yudachi_KaiNi_47.mp3',
		'https://img.moegirl.org/common/0/08/Yudachi_KaiNi_48.mp3',
		'https://img.moegirl.org/common/a/a4/Yudachi_KaiNi_49.mp3',
		'https://img.moegirl.org/common/1/14/Yudachi_KaiNi_50.mp3',
		'https://img.moegirl.org/common/b/b5/Yudachi_KaiNi_51.mp3',
		'https://img.moegirl.org/common/3/3b/Yudachi_KaiNi_52.mp3',
		'https://img.moegirl.org/common/8/85/Yudachi_KaiNi_53.mp3'
	];
	clock();
	var reportTimeTime = setInterval(clock,1000);
	function clock(){
		d = new Date();
		var months = d.getMonth()+1;
		var dates = d.getDate();
		var hours = d.getHours();
		var minutes = d.getMinutes();
		var seconds = d.getSeconds();
		$('dates').innerHTML=d.getFullYear()+"/"+addZero(months)+"/"+addZero(dates);
		$('times').innerHTML=addZero(hours)+":"+addZero(minutes)+":"+addZero(seconds);
		function week() {
			var weekday = ['日','月','火','水','木','金','土'];
			return weekday[d.getDay()]+'曜日';
		}
		$("weeks").innerHTML=week();
		if(minutes==0&&seconds==0){
			reportTimeAudio.src = reportTimeUrl[hours];
			reportTimeAudio.src = '';
		}
	};
}();
$('top','explain').children[0].onclick = function(){
	alert('这个页面并没有上一页poi (,,•́ . •̀,,)');
}
$('top','explain').children[1].onclick = function(){
	alert('这个页面也没有主页poi (,,•́ . •̀,,)');
}