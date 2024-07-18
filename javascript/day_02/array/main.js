// Khai báo array rỗng
let arr = [];

// Khai báo array
let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
number[0] = 1;
number[1] = "Bùi Hiên";
number[2] = true;

// Khai báo và khởi tạo giá trị cho array
let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];

//Bài 1 : Viết function tìm số lượng lớn nhất trong mảng
 const findMax = (arr) =>{
    arr.sort((a,b) => b-a);
    return arr[0];
 }
 const findMax2 = (arr) =>{
    let max = arr[0];
    arr.forEach((value) => {
        if(value>max){
            max = value;
        }
    });
    return max;
 }
  findMax3 = (arr) =>{
    return Math.max(...arr);// Cú pháp ES6 : Spread operator
  }
console.log(findMax([4,2,6,7,8,1,10]));
console.log(findMax2([4,2,6,7,8,1,10]))
// Bài 3 : Viết function cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới 
//với các số lượng là số dư tương ứng khi chia mảng cũ cho 2, Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]

const modul02 = (arr) =>{
    let rs = [];
    arr.forEach((value) => {
            rs.push(value % 2);
    });
    return rs;
}
console.log(modul02([4,2,6,8,1,7]));

function modulo22(arr) {
    // const result = arr.map(e => e % 2)
    // return result

    return arr.map((e) => e % 2);
}

console.log(modulo22([4, 2, 5, 6, 2, 7]));

// Bài 5: Viết function truyền vào 1 chuỗi, hãy sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang (Sử dụng array để làm)

// Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’

const repeatString = (string) => {
    const repeatedArray = new Array(10).fill(string);
    const repeatedString = repeatedArray.join('-');
    return repeatedString;
  };
  
  // Ví dụ sử dụng
  const result = repeatString('a');
  console.log(result); // Kết quả: 'a-a-a-a-a-a-a-a-a-a'