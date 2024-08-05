// Bài 1:
const getStringHasMaxLength = (arr) => {
    let maxLength = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > maxLength) {
            maxLength = arr[i].length;
        }
    }

    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === maxLength) {
            result.push(arr[i]);
        }
    }

    return result;
};
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));

//   Bài 2:
const users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
];
const getUsersByAgeAndStatus = (users) =>
    users.filter(user => user.age > 25 && user.isStatus === true);

const getUsersByAscendingAge = (users) =>
    users.sort((a, b) => a.age - b.age);

console.log(getUsersByAgeAndStatus(users));
console.log(getUsersByAscendingAge(users));

    // Bài 3

const getCountElement = (arr) =>{
    const count = {};
    arr.forEach(element => {
        count[element] = (count[element] || 0) +1;
    });
    return count;
}
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]));