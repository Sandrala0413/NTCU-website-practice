var verifyCode;
document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('verifyCanvas');
    var ctx = canvas.getContext('2d'); //以2D方式畫圖
    var refresh = document.getElementById('refresh');
    verifyCode = generateVerify();

    drawVerify();

    refresh.addEventListener('click', function () {
        verifyCode = generateVerify();
        drawVerify();
    }); //被視為一行執行程式所以要加分號

    function generateVerify() {
        var chars = '123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var len = 4;
        var verify = '';
        for (var i = 0; i < len; i++) {
            var index = Math.floor(Math.random() * chars.length);
            //random會產生介於0(包含)到1(不包含)之間的隨機數
            //*chars.length為了確保產生的index範圍在有效的索引值之間
            verify += chars[index];
        }
        return verify;
    }

    function drawVerify() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        //清除canvas的內容：清除座標從(0,0)開始、寬度是 canvas 的宽度，高度为 canvas 的高度的区域内的所有内容
        ctx.font = '20px Arial';
        ctx.fillStyle = '#ffff';
        ctx.textAlign = 'center'; //水平置中
        ctx.textBaseline = 'middle'; // 垂直置中
        ctx.fillText(verifyCode, canvas.width / 2, canvas.height / 2);
        //將內容放在Canvas畫的圖的(10,30)位置
    }
});




function button() {
    document.getElementById("bowl").src = "bowlFull.png";
    setTimeout(function () {
        var accValue = document.getElementById("acc").value;
        var pwValue = document.getElementById("pw").value;
        var verValue = document.getElementById("ver").value;

        if (accValue != "admin" && pwValue != "1234") {
            window.location.href = "loginPage.html";
            alert("Wrong account/password.");
        }
        else if (verValue != verifyCode) {
            window.location.href = "loginPage.html";
            alert("Wrong verifyCode.");
        }
        else {
            window.open("success.html","_blank").focus; //focus:聚焦在新跳轉的頁面
        }
    }, 200)

}

function hidePassword() {
    var passwordInput = document.getElementById("pw");
    var eyeIcon = document.getElementById("eye");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.className = "fa-regular fa-eye-slash";
    } else {
        passwordInput.type = "password";
        eyeIcon.className = "fa-regular fa-eye";
    }
}

function resetPage() {
    window.location.href = "loginPage.html";
}
