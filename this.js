//es5 this指向的问题 永远指向最后调用的那个对象var
var name = "windowsName";
function show(){
	var name = "inner";
	console.log(this.name);//windowsName
	console.log("this:"+this)//Window
} 
show();//window.show();
console.log("outer:"+this);//Window


//example2 
var name = "outer";
var age = 18;
var o = {
	name:"inner",
	show:function(){
		console.log(this.name)//inner
		console.log(this.age)//undefined
	}

}
o.show()//window.o.show()

//example3
var name = 'outer';
var o = {
	name:'inner',
	show:function(){
		console.log(name);//outer
	}
}
var fn = o.show;
fn();

//example4

var name = 'outer';
function show(){
	var name = 'inner';
	innerFunction(){
		console.log(this.name)//outer
	}
}

show()



//example5
var name = 'outer';
var o = {
	name:'inner';
	fn1:function(){
		console.log(this.name)
	}
	fn2:function(){
		setTimeiout(function(){
			this.fn1();
		})
	}
}

o.fn2()//this.fn1 is not a function  this->window





/**
 *改变this的指向
 *1.使用es6的语法 箭头函数
 *2.在函数内部使用_this = this;
 *3.apply,call,bind
 *4.new 实例化一个对象
  **/

//箭头函数 this始终指向函数定义是的this,而非执行时。箭头函数中没有this绑定，需要查找作用域链来看this的指向如果箭头函数被非箭头函数包裹，则指向最近非箭头函数的this
var name = 'outer';
var o = {
        name:'inner',
        fn1:function(){
                console.log(this.name)
        },
        fn2:function(){
                setTimeiout(()=>{//箭头函数的指向为fn2的调用者
                        this.fn1();
                })
        }
}

o.fn2()//inner


//保存this的指向 _this = this;
var name = 'outer';
var o = {
        name:'inner',
        fn1:function(){
                console.log(this.name)
        },
        fn2:function(){
		var _this = this;//_this 保存为对象o
                setTimeiout(function(){
                        _this.fn1();
                })
        }
}

o.fn2()//inner

//apply
var name = 'outer';
var o = {
        name:'inner',
        fn1:function(){
                console.log(this.name)
        },
        fn2:function(){
                var _this = this;//_this 保存为对象o
                setTimeiout(function(){
                        fn1.apply(o);
                })
        }
}

o.fn2()//inner


//call
var name = 'outer';
var o = {
        name:'inner',
        fn1:function(){
                console.log(this.name)
        },
        fn2:function(){
                var _this = this;//_this 保存为对象o
                setTimeiout(function(){
                        fn1.call(o);
                })
        }
}

o.fn2()//inner


//bind
var name = 'outer';
var o = {
        name:'inner',
        fn1:function(){
                console.log(this.name)
        },
        fn2:function(){
                var _this = this;//_this 保存为对象o
                setTimeiout(function(){
                        fn1.bind(o)();
                })
        }
}

o.fn2()//inner


