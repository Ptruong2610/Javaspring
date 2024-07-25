const sayHello= () =>{
    alert("Xin chào các bạn 1");
};

const btn2 = document.getElementById("btn2");
btn2.onclick = () =>{
    alert("xin chào các bạn 2");
}

const btn3 = document.getElementById("btn3");
btn3.addEventListener("click",()=>{
    alert("Xin chào các bạn 3");
})

 const btnPlay = document.getElementById("play");
 const btnPause = document.getElementById("pause");
 const timeEl = document.getElementById("time");
 const messageEl = document.getElementById("message")

 let time = 10;
 let interval;
//  let interval = setInterval(()=>{
//     time--;
//     timeEl.innerText = `${time}s`;
//     if (time === 0) {
//         messageEl.innerText = "Hết giờ";
//         clearInterval(interval);
//     }
//  }, 1000);

 btnPlay.addEventListener("click", ()=>{
    interval = setInterval(() =>{
        time--;
        timeEl.innerText = `${time}s`;
        if (time === 0) {
            messageEl.innerText = "Hết giờ";
            clearInterval(interval);
        }
    }, 1000)
 });
//  btnPause.addEventListener("click", ()=>{
//     clearInterval(interval);
//  })

//  document.addEventListener("click", (e)=>{
//     const currentEl = document.querySelector(".circle");
//     if (currentEl) {
//         currentEl.parentElement.removeChild(currentEl);
//     }

//     const circleEl = document.createElement("div");
//     circleEl.classList.add("circle");
    
//     circleEl.style.left = `${e.offsetX -50}px`;
//     circleEl.style.top = `${e.offsety -50}px`;
//     document.body.appendChild(circleEl);
//  })

 //Tìm kiếm User
 const users = [
    {id : 1, name:"Phan Văn Trường"},
    {id : 2, name:"Phan Văn Ánh"},
    {id : 3, name:"Phan Văn Bình"},
    {id : 4, name:"Phan Văn Duy"},
    {id : 1, name:"Phan Văn Thành"},
    {id : 5, name:"Phan Văn ngọc"},
    {id : 6, name:"Phan Văn nhất"}
 ];
 const inputEl = document.getElementById("input");
 const btnShowAll = document.getElementById("showAll");
 const listUserEL = document.getElementById("list");
 
 const renderUsers = (users)=>{
    let html ="";
    users.forEach(user => {
        html +=`<li>${user.id} - ${user.name}</li>`;
    }); 
    listUserEL.innerHTML = html;
 }

//  renderUsers(users);
 inputEl.addEventListener("keydown", (e)=>{
    if (e.key === "Enter") {
        //lấy ra keyword từ input
        const keyword = e.target.value;

        //lọc ra những user có chứa keyword
        const result = users.filter(user => user.name.toLowerCase().includes(keyword.toLowerCase()));

        //Hiển thị kết quả
        renderUsers(result);
    }
 })
 btnShowAll.addEventListener("click", ()=>{
        renderUsers(users);
 });

 //Scroll back to top
 const btnTop = document.getElementById("back-to-top")
 window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 300){
        //Hiển thị nút back top top
        btnTop.classList.remove("hide");
    }else{
        btnTop.classList.add("hide");
        //Ẩn nút back to top
    }
 });
 btnTop.addEventListener("click", ()=>{
    window.scroll({
        top : 0,
        behavior :"smooth"
    });
 })
