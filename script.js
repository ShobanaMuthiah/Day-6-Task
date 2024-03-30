//Day 6 Tasks

//Task 1

//a. Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class Movie1{
    constructor (title,studio,rate){
        this.tname=title;
        this.sname=studio;
        this.rating=rate;

    }
}
const obj1=new Movie1("Don","Lyca","8");
console.log(obj1.tname);
console.log(obj1.sname);
console.log(obj1.rating);

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
console.log("\n\n")
class Movie{
    constructor (title,studio,rate="PG"){
        this.tname=title;
        this.sname=studio
        this.rating=rate;

    }
}
const obj=new Movie("Don","Lyca");
console.log(obj.tname);
console.log(obj.sname);
console.log(obj.rating);
console.log("\n\n")
//c. Write a method getPG, which takes an array of base type Movie as its argument, 
//and returns a new array of only those movies in the input array with a rating of "PG".
//  You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie4 {
    constructor(title,studio, rating='PG') {
      this.title = title;
      this.studio=studio;
      this.rating = rating;
    }
  
  
  static getPG(movies) {
    // Filter movies with rating "PG"
    return movies.filter(movie => movie.rating === "PG");
  }
}
  
  const movies = [
    new Movie4("Leo","7 screen", "8"),
    new Movie4("don","lyca"),
    new Movie4("maaveeran", "shanthi talkies"),
    new Movie4("Hi nanna","vyra entertainments", "5.6")
  ];
  
  const mov = Movie4.getPG(movies);
  console.log(mov);
  console.log("\n\n")
//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class Movie3{
    constructor (title,studio,rate="PG"){
        this.tname=title;
        this.sname=studio
        this.rating=rate;

    }
}
const obj2=new Movie3("Casino Royale","Eon Productions","PG­13");
console.log(obj2.tname);
console.log(obj2.sname);
console.log(obj2.rating);

//Task 2

//Convert the UML diagram to Typescript class. - use number for double

console.log("\n\nconvert the UML diagram to Typescript class\n\n ")
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color = color;
    }
    get Radius(){
        return this.radius
    }
    set Radius(n){
        this.radius = n;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color = c
    }
    get toString(){
        return ("Circle[radius= "+this.radius+ ", color = "+this.color+"]");
    }
    get area(){
        return Math.PI*Math.pow(this.radius,2)
    }
    get circumference(){
        return 2*Math.PI*this.radius
    }
}
let obj3= new Circle(1.0,"red") 
console.log(obj3.Radius);
console.log(obj3.Color);
console.log(obj3.toString);
console.log(obj3.area);
console.log(obj3.circumference);


//Task 3

//Write a “person” class to hold all the details.
console.log("\n\nHold all details of 'person' class\n\n ")
class Person{
    constructor (name,age,gender,maritalsts,contact,email){
        this.pname=name;
        this.page=age;
        this.pgen=gender
        this.msts=maritalsts;
        this.cont=contact
        this.mail=email

    }
}
const obj4=new Person("shobana","21","female","single","9302949302","shobanam@gmail.com");
console.log(obj4.pname);
console.log(obj4.page);
console.log(obj4.pgen);
console.log(obj4.msts);
console.log(obj4.cont);
console.log(obj4.mail);

//Task 4

//write a class to calculate the Uber price.
console.log("\n\ncalculation of uber price\n\n ")
class Uber{
    constructor (km,pr=50)
    {
        this.km=km;
        this.pr=pr;

    }
    set ub(n)
    { 
        this.km=n;
        // return this.km*this.pr;
    }
    get ub()
    {
        return this.km*this.pr;
    }
}
const uber=new Uber(20);
console.log(uber.ub);