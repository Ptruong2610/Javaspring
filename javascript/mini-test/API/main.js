
const postList = document.getElementById("post-list");

// Tạo phần tử h2
const apiTitle = document.createElement("h2");
apiTitle.textContent = "Type: posts";

// Tạo phần tử chứa nút button
const buttonGroup = document.createElement("div");
buttonGroup.classList.add("btn-group");

// Tạo nút button
const postsBtn = document.createElement("button");
postsBtn.id = "posts-btn";
postsBtn.textContent = "Posts";

const albumsBtn = document.createElement("button");
albumsBtn.id = "albums-btn";
albumsBtn.textContent = "Albums";

const photosBtn = document.createElement("button");
photosBtn.id = "photos-btn";
photosBtn.textContent = "Photos";

// Thêm các nút button vào phần tử chứa nó
buttonGroup.appendChild(postsBtn);
buttonGroup.appendChild(albumsBtn);
buttonGroup.appendChild(photosBtn);

// Thêm phần tử h2 và phần tử chứa nút button vào trước phần tử ul
postList.insertAdjacentElement("beforebegin", apiTitle);
postList.insertAdjacentElement("beforebegin", buttonGroup);

fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            const postItem = document.createElement("li");
            postItem.textContent = post.title;
            postList.appendChild(postItem);
        });
        postsBtn.classList.add("active");
        albumsBtn.classList.remove("active");
        photosBtn.classList.remove("active");
    });

// Thêm sự kiện click cho các nút button
postsBtn.addEventListener("click", () => {
    apiTitle.textContent = "Type: posts";
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => {
            postList.innerHTML = "";
            posts.forEach((post) => {
                const postItem = document.createElement("li");
                postItem.textContent = post.title;
                postList.appendChild(postItem);
            });
            postsBtn.classList.add("active");
            albumsBtn.classList.remove("active");
            photosBtn.classList.remove("active");
        });
});

albumsBtn.addEventListener("click", () => {
    apiTitle.textContent = "Type: albums";
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then((response) => response.json())
        .then((albums) => {
            postList.innerHTML = "";
            albums.forEach((album) => {
                const albumItem = document.createElement("li");
                albumItem.textContent = album.title;
                postList.appendChild(albumItem);
            });
            albumsBtn.classList.add("active");
            postsBtn.classList.remove("active");
            photosBtn.classList.remove("active");
        });
});

photosBtn.addEventListener("click", () => {
    apiTitle.textContent = "Type: photos";
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((photos) => {
            postList.innerHTML = "";
            photos.forEach((photo) => {
                const photoItem = document.createElement("li");
                photoItem.textContent = photo.title;
                postList.appendChild(photoItem);
            });
            photosBtn.classList.add("active");
            postsBtn.classList.remove("active");
            albumsBtn.classList.remove("active");
        });
});