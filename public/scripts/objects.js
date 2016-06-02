(function() {
    // function Book(name,length,author) {
    //     this.title = name;
    //     this.length = length;
    //     this.author = author;
    // }
    //
    // Book.prototype = {
    //     title : "",
    //     currentPage : 0,
    //     author : "",
    //     length : -1,
    //     flip : function FlipToPage(num) {
    //         this.currentPage = this.num;
    //     },
    //     printOut : function sayName() {
    //         return "The name of the book is :" + this.title;
    //     }
    //
    // };
    //
    // var kiteRunner = new Book("The Kite Runner", 320, "Khaled Hosseini");
    // // console.dir(kiteRunner);
    // // console.log(kiteRunner.printOut());
    // // console.dir(Array.prototype.concat);
    // // console.dir(Array.prototype);
    //
    // //Prototypal inheritance rocks.
    //
    // function Plant() {
    //     this.country = "Mexico";
    //     this.isOrganic = true;
    // }
    //
    // Plant.prototype.showAttributes = function(){
    //     console.log("The plant is called " +this.name +" and it's color is " +this.color);
    // };
    //
    // Plant.prototype.organicOrNot = function() {
    //     if(this.isOrganic) {
    //         return "This is Organic";
    //     } else {
    //         return this.isOrganic;
    //     }
    // };
    //
    // function Fruit(fruitName, fruitColor) {
    //     this.name = fruitName;
    //     this.color = fruitColor;
    // }
    //
    //
    // Fruit.prototype = new Plant();
    //
    //
    // var aMango = new Fruit("Mango", "Green to Yellow");
    //
    // aMango.showAttributes();
    //
    // var demoObj = {
    //     name: "Sunny",
    //     location: "CA"
    // };
    //
    // console.log(demoObj.toString());

    // console.log(Fruit.prototype.organicOrNot);

    //Create an object called Teacher derived from the Person class,
    // and implement a method called teach which receives a string called subject,
    // and prints out: [teacher's name] is now teaching [subject]

    function Person(name, age) {
        this.name = name;
        this.age = age;
    }

    Person.prototype = {
        talk : function() {
            return "Hello! My name is " +this.name;
        },

        walk : function() {
            return (this.name).split(' ')[0] +"\'s walking.. Taa dadaa dadaa!";
        }
    };


    var sunny = new Person("Sunny Bharadwaj", 23);
    var sid = new Person("Sidhartha Madhavaram", 24);

    function Teacher(name,subject) {
        this.name = name;
        this.subject = subject;
    }

    Teacher.teach = function() {
        return (this.name +"\'s teaching " +this.subject);
    };

    // Teacher.prototype.teach = function() {
    //     return (this.name +"\'s teaching " +this.subject);
    // };


    // Teacher.prototype = Person.prototype;


    var op = new Teacher("Om Prakash", "Math");
    console.log(op.teach());

}());