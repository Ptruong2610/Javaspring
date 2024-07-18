// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max",
        price: 3000000,
        brand: "Apple",
        count: 2,
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
];

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
const printCartProducts = (products) => {
    for (let i = 0; i < products.length; i++) {
        let productInfo = `${products[i].name} - ${products[i].price} - ${products[i].brand} - ${products[i].count}`;
        console.log(productInfo);
    }

};
printCartProducts(products);

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
const calculateTotalPrice  = (products) =>{
    let totalPrice = 0;
    for(let i = 0; i<products.length;i++){
        let productTotalPrice = products[i].price*products[i].count;
        totalPrice += productTotalPrice;
    }   
    return totalPrice;
}
console.log("Tổng tiền tất cả sản phẩm trong giỏ hàng là : "+ calculateTotalPrice(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"
const findProductsByBrand = (products, brand) => {
    return products.filter(product => product.brand === brand);
};

let appleProducts = findProductsByBrand(products, "Apple");
console.log("Các sản phẩm của thương hiệu Apple:");
console.log(appleProducts);

// 4. Tìm các sản phẩm có giá > 20000000
const findProductsByPrice  = (products,price) =>{
    return products.filter(product => product.price > price);
};
console.log("Các sản phẩm có giá lớn hơn 20000000");
console.log(findProductsByPrice(products,20000000));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường) 
const findProductsByName  = (products, keyword) =>{
    return products.filter(product =>product.name.toLowerCase().includes(keyword.toLowerCase()));
}
console.log("Các sản phẩm có chữ 'pro' trong tên:");
console.log(findProductsByName(products,"pro"));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
let newProduct = {
    name: "Google Pixel 5",
    price: 15000000,
    brand: "Google",
    count: 2,
};
products.push(newProduct);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
products = products.filter(product => product.brand !== "Samsung");
console.log(products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
products.sort((a, b) => a.price - b.price);

// 9. Sắp xếp giỏ hàng theo count giảm dần
products.sort((a, b) => b.price - a.price);


// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
const getRandomProducts = () => {
    let randomProducts = [];
    while (randomProducts.length < 2) {
        let randomIndex = Math.floor(Math.random() * products.length);
        let product = products[randomIndex];
        if (!randomProducts.includes(product)) {
            randomProducts.push(product);
        }
    }
    return randomProducts;
};
console.log(getRandomProducts());