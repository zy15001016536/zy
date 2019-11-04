class Promise{
	//构造函数
	constructor(exector){//执行器函数
		let self = this;
		this.exector = exector;
		this.status = "pendding";//等待状态
		this.success = null;//成功返回的数据
		this.fail = null;//失败返回的数据
		function resolve(value){
			if(this.status=='pendding'){
				self.success = value;//初始化数据
				self.tatus = "resolve";
				
			}
		}
		function reject(err){
			if(this.status == 'pendding'){
				self.fail = err;
				self.status = "reject"
			
			}

		}
		this.exector(resolve,reject)
	}
	//回调函数的处理
	then(resolve,reject){
		if(this.status == 'resolve'){
			resolve(this.success)
		}
		else if(this.status == 'reject'){
			reject(this.fail)
		}
	}
	//all
	static all(params){
		//判断是否为数组
		if(Array.isArray(params)){
			let resultArr = [];
			for(let item in params){
				//判断是否为Promise实例
				let _promise = params[item];

				if(_promise instanceof Promise){
					if(_promise.status=='resolve'){
						resultArr.push(_promise.success);
					}else if(_promise.status=='reject'){
						return new Promise((resolve,reject)=>{
						reject(_promise.fail)
						})
					}

				}else{
					return console.log('promise is not instanceof Promise!')
				}
			}
			if(resultArr.length==params.length){
				return new Promise((resolve,reject)=>{
					resolve(resultArr);
				});
			}
		}else{
			console.log('the prams is not Array!')
		}
	}


}



module.exports = Promise

