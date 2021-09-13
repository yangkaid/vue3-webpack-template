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
start()