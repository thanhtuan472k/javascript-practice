/**
 * Khai báo mà không định nghĩa type cho biến đó thì gọi là inference
 * TS sẽ dùng thuật toán của nó để đoán kiểu dữ liệu
 */

let test = [2, 1, 0, 'b']

console.log(test.push(2))

console.log(test)

