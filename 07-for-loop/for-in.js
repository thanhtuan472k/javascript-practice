// For..in dùng để lặp qua các thuộc tính của 1 cái object (lặp qua key)
let person = {
    name: 'Tuan',
    age: 18,
    gender: 'male'
}

for (let item in person) {
    console.log(item);
}