// // Реалізуй клас, що описує коло. 
class Circle {
  constructor(r) {
    this.r = r;
  }
  get radius() {
    return this.r;
  }
  set radius(r) {
    this.r = r;
  }
  get diameter() {
    return this.r * 2;
  }
  area() {
    return Math.PI * this.r * this.r
  }
  length() {
    return Math.PI * this.r * 2
  }
}
let fistCircle = new Circle(7)
console.log(fistCircle.radius);
console.log(fistCircle.diameter);
console.log(fistCircle.area());
console.log(fistCircle.length());

// Реалізуй клас, що описує канцелярський маркер. 
class Marker {
  constructor(color, quantity) {
    this.color = color;
    this.quantity = quantity;
  }

  createLine(line) {
  let lineBlock =document.getElementById('line-block');
    for (let i = 0; i < line.length; i++) {
      if (this.quantity != 0) {
        if (line[i] == " ") {
          this.quantity += 0.5;
        }
        lineBlock.innerHTML += line[i];
        lineBlock.style.color = this.color;
        this.quantity -= 0.5;
      } else {
        document.write("The ink in the marker is over");
        break;
      }
    }
  }
}
class colorMarker extends Marker {
  fill(quantity) {
    if (quantity > 100) {
      quantity = 100;
    } else {
      this.quantity += quantity;
    }
  }
}
let myMarker = new colorMarker(	"#FA8072",1);
myMarker.fill(15);
let text = prompt("Enter your text here")
myMarker.createLine(text);



