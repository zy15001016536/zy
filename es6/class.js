//原生js的类其实就是一个函数
function Fu(name){
	this.name = name;//私有属性
}
Fu.prototype.show = function(){//公共方法
	console.log(this.name);
}
Fu._name = 'static'
Fu._show = function(){console.log(this._name)}
//继承
function Zi(age,name){
	Fu.call(this,name);//继承属性
	this.age = age;
}
Zi.prototype = Fu.prototype;//继承方法
Zi.prototype.constructor = Zi;//修改原型
let zi = new Zi('18','zy')
zi.show()

//es6类的写法
class Fuu{
	constructor(name){
		this.name = name;
	}
	show(){
		console.log(this.name);
	}
	static _name = 'static';
	static _show = function(){
		console.log(this._name);
	}
}

class Zii{
	constructor(name,age){
		super(name);
	}
}

let zii = new Zii('zy',18);
zii.show();



