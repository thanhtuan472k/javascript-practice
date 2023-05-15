function callback() {
    console.log("Đây là callback");
}

function cha(thecallback) {
    console.log("Trước khi truyền vào callback");
    setTimeout(thecallback, 200)

    console.log("Sau khi gọi callback");
}

cha(callback)

