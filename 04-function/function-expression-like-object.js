// function là object

const x = function (thamso) {
    return this.name + "-" + thamso
}

let object1 = { name: "Tuan" }

let object2 = { name: "JS" }

console.log(x.call(object1, "tham số 1"));

console.log(x.call(object2, "tham số 2"));


