# acedong.js

  原生js封装的一些常用函数
  
  1、ace.getId() 获取ID
  
  2、ace.getClass() 获取class
  
  3、ace.getTargName() 获取TargName
  
  4、ace.getStyle(obj, attr) 获取css 属性值
  
  5、ace.setStyle(obj,attr,value) 设置css 属性值
  
  6、ace.getViewport() 获取浏览器视口大小
  
  7、ace.elementHeight(id)/ace.elementWidth(id) 获取对象属性的高、宽
  
  8、ace.loadScriptString(code) 直接编译添加js
  
  9、跨浏览器的事件兼容
      ace.EventUtil:
      
        getTarget() //返回事件目标
        
        getEvent() //返回对event对象的引用
      
        preventDefault()  //取消事件默认行为
      
        stopPropagation() //阻止事件冒泡
      
        addHandler()  //添加事件
      
        removeHandler() //移除事件
      
  
