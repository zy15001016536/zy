//Jquery构造函数
(function(window,undifined){
	var jQuery = (function(){
		var jQuery = function(selector,context){
			return new jQuery.fn.init(selector,context,rootjQuery)
		}
		jQuery.fn = jQuery.prototype = {
			construcotr:jQuery,
			init:function(selector,context,rootjQuery){
				
			
			}
		
		}
		return jQuery;
	})()
	window.jQuery = window.$ = jQuery;
})(window)
