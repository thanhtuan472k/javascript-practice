// Cho sẵn một dãy số tự nhiên A có N số với - 106 < A[i] < 106, 0 < i < N - 1.  Viết hàm f(A) trả về các vị trí xuất hiện của giá trị lớn thứ nhì trong dãy(vị trí bắt đầu từ 0).Ví dụ:
// Input: A = 5 2 7 - 4 2 7 0 6 1 3 7 6
// Output: [7, 11]
//     (Giá trị 6 xuất hiện tại vị trí 7 & 11)

let array = [5, 2, 7, -4, 2, 7, 0, 6, 1, 3, 7, 6]

function findMax(array) {
    let max = array[0]
    let max2 = array[0]


    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max2 = max
            max = array[i]
        } else {
            if (array[i] > max2 && array[i] != max) {
                max2 = array[i]
            }
        }
    }

    console.log(max2);

}



findMax(array)