function start () {
    let name = "yangkai"
    const person = {
        age: 123,
        sayHi: function() {
            console.log("我的年龄是", this.age);
        }
    }
    console.log(name)
    console.log(person);
}
const arr = [1,2,3,4,5,6,7,7,7,7,8,9]
const find = (arr) => {
    let sum = arr.reduce((pre,cur) => {
        return pre + cur
    })
    return sum
}
start()
const sum = find(arr)
console.log(sum)