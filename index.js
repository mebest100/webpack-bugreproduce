function ChangeText() {
   const elelment = document.getElementById("root")
   elelment.innerHTML = "Hello YuanBest"
}

    // 方法一：通过window提升变量作用域
     window.ChangeText = function () {
       ChangeText();
     };


//方法二：定义点击事件监听，给点击目标绑定click事件
// function listener(id, callback) { //注意这里的id是点击按钮的id,不是被改变目标对象的id
//     document.querySelector(`#${id}`).addEventListener('click',callback)
// }

// listener('btn',function () {
//     ChangeText();
// })

