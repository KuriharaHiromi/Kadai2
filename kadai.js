// 定数　h1にkadaiのhtmlの要素を取得
const h1 = document.querySelector('h1')
//h1をopacityで透明にしてからページを開いた際に1.5秒で文字が映るようにアニメーションをつける。
h1.animate({
  opacity: [0, 1]
}, 1500)

//window.onloadでページを読み込んだ際に
window.onload=function(){
  //ページをスクロールするとクラス「up」で表記した文章を読み込む変数を作成。
  var scroll = document.querySelectorAll('.up');
   
  //アニメーションの関数を作成
  var Animation = function() {
    //下までスクロールした際にループさせる
    for(var i = 0; i < scroll.length; i++) {
      //画面の下との差が80px
      var triggerMargin = 80; 
      //スクロールしたアニメーション部分の要素の高さの数値が画面上端から要素の数値と
      //画面の下からの差、80px分を足した分を越して表示された際に
      if (window.innerHeight > scroll[i].getBoundingClientRect().top + triggerMargin) {
        //上の条件を満たした時にクラスを表示
        scroll[i].classList.add('show');
      }
    }
  }
  //スクロールした時にアニメーションの関数を作動
  window.addEventListener('scroll', Animation);
  
}                               