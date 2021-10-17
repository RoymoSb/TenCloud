function footerPosition() {
    // 判斷頁面大小
    var contentHigh = document.body.scrollHeight;
    // 判斷視窗大小
    var winHigh = window.innerHeight;
    // 假如 頁面大小 < 視窗大小 就更改class
    if (contentHigh < winHigh) {
        $('#blank').removeClass("blank")
        $('#blank').addClass('blank-bootom');
    }else{
        $('#blank').removeClass("blank-bootom")
        $('#blank').addClass('blank');
    }
}
// 執行
window.onload =function(){
    footerPosition();
}

// 切換按鈕更改footer位置
$("button").click(function () {
    footerPosition();
});