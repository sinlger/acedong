        function clone(obj){
            var F=function(){};
            F.prototype = obj;
            return new F();
        }
        var Person={
            name:"人",
            age:"25",
            like:[],
            sya:function(){
                console.log(this.name+" "+this.age);
            }
        }
        var Student = clone(Person);
        Student.no = "";
        Student.sayHello = function(){
            console.log(this.name+" Hello ");
        }

        var stu1 = clone(Student);
            // stu1.name="donghe";
            // stu1.age = "25";
            // stu1.like.push('ss')
        console.log(stu1.name);
