// Hello, object
// importance: 5

// Write the code, one line for each action:

//     Create an empty object user.
//     Add the property name with the value John.
//     Add the property surname with the value Smith.
//     Change the value of the name to Pete.
//     Remove the property name from the object.


const user = {};
user.name = "John"
user["surname"] = "Smith"
//Both user.name and user["surname"] do the same thing, they create a key and set its value to whatever is given after the =

user.name = "Pete"
//Since the name key already exists, this doesn't create a new name key, it just replaces the previous value with the new one
delete user.name;

console.log(user)


