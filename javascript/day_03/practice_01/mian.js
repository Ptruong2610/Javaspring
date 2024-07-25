// Truy cập vào thẻ h1 có id=“heading” thay đổi màu chữ thành ‘red’, và in hoa nội dung của thẻ đó
    const heading = document.getElementById("heading");
    console.log(heading);

    const heading1 = document.querySelector("#heading");
    console.log(heading1);

    heading.style.color = "red";
    heading.style.textTransform = "uppercase";

// Thay đổi màu chữ của tất cả thẻ có class “para” thành màu “blue” và có font-size = “20px”
    const paras = document.querySelectorAll(".para");
    console.log(paras);
    paras.forEach(para => {
        para.style.color = "blue";
        para.style.fontSize = "20px";
    });

// Thêm thẻ a link đến trang ‘facebook’ ở đằng sau thẻ có class “para-3”
    const link = document.createElement("a");
    link.href = "https//facebook.com";
    // link.innerText = "<span>Facebook</span>";
    link.innerHTML = "<span>Facebook</span>";
    console.log(link);

    const contentEl = document.querySelector(".content");
    document.body.insertBefore(link,contentEl);
// Thay đổi nội dung của thẻ có id=“title” thành “Đây là thẻ tiêu đề”
    const title = document.querySelector("#title");
    title.innerText = "Đây là thẻ tiêu đề";

// Thêm class “text-bold” vào thẻ có class=“description” (định nghĩa class “text-bold” có tác dụng in đậm chữ)
    const textBold = document.querySelector(".description");
    textBold.classList.add("text-bold");

// Thay thế thẻ có class=“para-3” thành thẻ button có nội dung là “Click me”
    const btn = document.createElement("Button");
    btn.innerText = "Click me";
    console.log(btn);
    const p3 = document.querySelector(".para-3");
   document.body.replaceChild(btn, p3);

// Copy thẻ có class=“para-2” và hiển thị ngay đằng sau thẻ đó
    const p2 = document.querySelector(".para-2");
    const p2Copy = p2.cloneNode(true);
    document.body.insertBefore(p2Copy,btn);

// Xóa thẻ có class=“para-1”
const p1 = document.querySelector(".para-1");
document.body.removeChild(p1);