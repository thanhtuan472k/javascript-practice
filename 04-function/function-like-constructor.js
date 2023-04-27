function Constructor(name) {
    this.name = name
    this.getName = function () {
        return this.name
    }
}

const newPerson = new Constructor("Tuan")

console.log(newPerson.getName());

Constructor.prototype.getMe = function () {
    return this.name + "-" + "hàm Me"
}

console.log(newPerson.getMe());

