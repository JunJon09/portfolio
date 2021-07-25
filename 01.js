$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(2000);
	},2800); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});


function scrollHorizontally(e) {
	//eには普通はwindow.eventが入る。ただできない時にはeが入る。
	e = window.event || e;
	//Math.maxはその中で大きいやつを返す。その逆
	var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
	// スクロールさせたいところ
	//画像のピクセルと全体のピクセルをa,bで表す。
	//そして、a/bで表した数字とdeltaでかける。
	const image = new Image();
	image.src = 'images/dog.png';
	window.console.log(image.height);//2300
	let client_w = document.getElementById('box').clientWidth;
	let client_h = document.getElementById('box').clientHeight;	
	window.console.log(client_h);//3200
	delta = delta * 2.3;	
	document.querySelector('article').scrollLeft -= delta; // Multiplied by 40
	window.console.log(document.querySelector('article').scrollLeft -= delta);

	//e.preventDefault(); // イベント発生箇所のスクロールはキャンセル
}

document.querySelector('section').addEventListener('mousewheel', scrollHorizontally, false);
    //ファイヤーフォックスについて書かれてる。
    document.querySelector('section').addEventListener('DOMMouseScroll', scrollHorizontally, false);