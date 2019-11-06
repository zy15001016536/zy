class EventMitter{
	//
	constructor(){
		this.events = new Object(null);
		this._maxListeners = 10;//一种事件最多注册十次
	}


	on(type,listener){
		if(this.events[type]){
			this.events[type].push(listener)
		}else{
			this.events[type] = [listener];

		}
	}

	once(type,listener){
		
		let wrapper = (...rest)=>{//封装个函数用于执行listener函数，执行完毕，销毁
			listener.apply(this,rest);
			this.removeListener(type,wrapper)
			
		}
		this.on(type,wapper);
	
	}

	removeListener(type,listener){
		if(this.events[type]&&this.events[type].length>0){
			this.events[type] = this.events[type].filter(l=>return l!=listener)
		}
	
	}

}
