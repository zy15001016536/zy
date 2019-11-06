//process.nextTick() 接收个匿名函数 当所有同步代码执行完成后才会执行，异步代码执行之前
class Exector{
	constructor(){
		let listener;
		process.nextTick(()=>{
			this.listener();
		
		})
		//this.listener() 此处执行会报出 unidefied
	}
	add(listener){
		this.listener = listener;
	}


}

let exector = new Exector();
exector.add(()=>{console.log(22)})
console.log(11)
setTimeout(()=>{console.log(33)});


