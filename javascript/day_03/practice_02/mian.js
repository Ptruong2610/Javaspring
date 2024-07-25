// Câu 1. Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn). Yêu cầu
// const id = document.createElement("p");
// id.id= "text";
// id.innerText="Tạo 1 thẻ p có id=“text”, có nội dung bất kỳ (có thể tạo bằng HTML hay Javascript - tùy chọn)";
// document.body.appendChild(id);
// // Đặt màu văn bản thành #777

// const id1 = document.getElementById("text")
// id1.style.color="#777"; 
// id1.style.fontSize = "2rem";
// console.log(id);

// Đặt kích thước phông chữ thành 2rem
// Đặt nội dung HTML thành Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript.


//Bài 3
//câu 4
const list = document.getElementById("list");
const listItemToRemove = list.querySelector("li:nth-child(4)");
listItemToRemove.parentElement.removeChild(listItemToRemove);

//câu 5
const newListItem = document.createElement("li");
newListItem.textContent = "Nội dung mới";
const listItems = list.getElementsByTagName("li");
// list.listItems[2].insertAdjacentElement("afterend",newListItem);

const indexToInsert = 3; // Chỉ mục của thẻ <li> thứ 4 trước khi nó bị xóa
list.insertBefore(newListItem, listItems[indexToInsert]);