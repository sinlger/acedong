	(function(){
		var options={
			color:'#333'
		};
		var api = {
			//插件参数设定
			config: function (opts) {
				if(!opts) return options;
				for(var key in opts) {
					options[key] = opts[key];
				}
				return this;
			},
			//插件监听
			listen: function listen(elem) {
				if (typeof elem === 'string') {
					var elems = document.querySelectorAll(elem),
						i = elems.length;
						while (i--) {
							listen(elems[i]);
						}
						return
				}
				//插件功能函数可以写在这


				return this;
			}
		}
		this.pluginName = api;
	})();
