<!DOCTYPE html>
<html lang="en">
<head>
<title>面向对象继承=》封装</title>
</head>
<body>
	<script type="text/javascript">
	function extend(child,parent){
		var F = function(){}
		F.prototype=parent.prototype;
		child.prototype=new F();
		child.prototype.constructor=child
		child.uber=parent.prototype;
	}
	function one() {};
	one.prototype.name="one";
	one.prototype.tostring=function(){
		var rul = [];
		if(this.constructor.uber){
			rul[rul.length] = this.constructor.uber.tostring()
		}
		rul[rul.length] = this.name;

		return rul.join(',');
	};


	function two(){}


	extend(two,one)

	two.prototype.name="two";


	function area(height,width){
		this.height=height;
		this.width=width;
	}
	extend(area,two)
	area.prototype.name="area";
	area.prototype.getArea=function(){
		return +this.height*+this.width
	}

	</script>
</body>
</html>
