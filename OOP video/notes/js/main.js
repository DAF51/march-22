// //This is an example of an object being made with an object literal

// const circle = {
//   radius: 1,
//   location: {
//     x: 1,
//     y: 1,
//   },
  
//   draw: function (){
//     console.log(`draw`)
//   }
// }

// //This is an example of an object being made using a constructor function
// function Circle(radius){
//   this.radius = radius;
//   //Ideally this should be built using the prototype method
//   this.draw = function() {
//     console.log(`draw`);
//   }
// }


// /////////////////////value types vs reference types/////////////////////

// let xPrimitive = 10;
// let yPrimitive = x;
// // yPrimitive will equal 10

// xPrimitive = 20
// // yPrimitive will still equal 10 because what yPrimitive copied over was the value



// let x ={ value: 10 };
// let y = x.value;

// x.value = 20;

// //In this example, y will be changed to 20 because objects are reference types rather than value types like primitives.
// //This means that rather than copying the value, y and x are both pointing to the same location in memory