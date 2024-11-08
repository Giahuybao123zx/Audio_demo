/*const todolist = ["Gia Bao", 'Gia Huy', 'Thao Ly'];
const ul = document.createElement("ul");
for(let i = 0; i < todolist.length; i++ ) {
    const li = document.createElement("li");
    li.innerHTML = todolist[i];
    ul.appendChild(li)
}
document.body.appendChild(ul); */

let mybn = document.getElementById("mybn") //hàm document.getElementById là tìm evnent có tên là mybn hoặc tên j cx đc đầu tiên trg thẻ html
function sayhello() {                      // 
    alert("Hello World from HTML")
}
mybn.addEventListener("click", sayhello)
mybn.addEventListener("click", sayhi);

function sayhi() {
    alert("Đây là phương thức 2");
}
let my = document.getElementById("my");
my.addEventListener("click", sayhi);

mybn.removeEventListener("click", sayhi);

let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = x.map((a, b) => {
    a = a * a;
    return a;
})
console.log("Mảng: ", x);
console.log("Maparr: ", i)


let sum = (a, b, callback) => {
    let tong = a + b;
    let i = 0;
    setInterval(() => {
        callback(tong);
        i ++;
        if(i === 5) {
            clearInterval();
        }

    }, 3000

)
    
}
let printSum = x => {
    console.log("Tổng 6 + 9 là: " + x)
}

sum(6, 9, printSum);

