// hàm là property/method của Object
let literalObject = {
    name: "Học cơ bản",
    getName: function () {
        return "Gọi method: " + this.name
    }
}

console.log(literalObject.getName()) // => Gọi method: Học cơ bản

let js = {
    name: "js.edu.vn - học deep JS"
}

console.log(literalObject.getName.call(js)) // => Gọi method: js.edu.vn - học deep JS