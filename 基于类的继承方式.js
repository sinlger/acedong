        function Person(name,work,age){
            this.name=name;
            this.work = work;
            this.age = age;
            this.like=[];
        }
        Person.prototype={
            constructor:Person,
            say:function(){
                console.log(this.name+" "+this.work+" "+this.age);
            }
        }
        function Student(name,work,age,no){
            Person.call(this,name,work,age)
            this.no=no;
        }
        Student.prototype = new Person();

        var p1= new Student("001");

        p1.name = "name1";
        p1.work = "work1";
        p1.age = "age1";
        p1.like.push("sex");
        p1.say()
        console.log(p1.like)
        var p2= new Student("002");
        p2.name = "name2";
        p2.work = "work2";
        p2.age = "age2";

        p2.say()
        console.log(p2.like)
