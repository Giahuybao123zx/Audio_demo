let digits = [0, 1, 2, 3, 4, 5, 5, 7, 8, 9];
let numbers = [];

  for (let i = 0; i < digits.length; i++) {
    for (let j = 0; j < digits.length; j++) {
      if (i !== j) {
        for (let k = 0; k < digits.length; k++) {
          if (i !== k && j !== k) {
            for (let l = 0; l < digits.length; l++) {
              if (i !== l && j !== l && k !== l) {
                const number = parseInt("" + digits[i]+ digits[j]+ digits[k] + digits[l]);
                if (number % 3 === 0) {
                  numbers.push(number);
                }
              }
            }
          }
        }
      }
    }
  }

// console.log(numbers);
// switch (month) {
//   case 1: case 3: case 5: case 7: case 8: case 10: case 12:
//       days = 31;
//       break;
//   case 4: case 6: case 9: case 11:
//       days = 30;
//       break;
//   case 2:
 
//       if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
//           days = 29;
//       } else {
//           days = 28;  
//       }
//       break;
//   default:
//       System.out.println("Tháng không hợp lệ.");
//       return; 
// }

// System.out.println("Tháng " + month + " năm " + year + " có " + days + " ngày.");


// }


// }
