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
	delta = delta * 2.3;	
	document.querySelector('article').scrollLeft -= delta; // Multiplied by 40
	window.console.log(document.querySelector('article').scrollLeft -= delta);

	//e.preventDefault(); // イベント発生箇所のスクロールはキャンセル
}

document.querySelector('section').addEventListener('mousewheel', scrollHorizontally, false);
    //ファイヤーフォックスについて書かれてる。
    document.querySelector('section').addEventListener('DOMMouseScroll', scrollHorizontally, false);