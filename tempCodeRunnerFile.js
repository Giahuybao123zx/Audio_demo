let x = prompt(parseInt("Nhap so dong: "))
let y = prompt(parseInt("Nhap so dong: "))

 let d = [x][y];
console.log("Nhap so phan tu cua ban: ")
 for(let i = 0; i < x; i ++) {
    for(let j = 0; j < y; j++){
        console.log('a[0', i, '][', j, '] = ')
        d[i][j] = prompt(parseInt());


    }
    console.log("Mang ban vua nhap la: ")
    for(let i = 0; i < x; i ++) {
        for(let j = 0; j < y; j++) {
            console.log( arr[i][j] + ' ')
        }
        console.log();
    }
 }