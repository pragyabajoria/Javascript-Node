function execute(someFunction, value) {
  someFunction(value);
}

// Defining and passing an anonymous function in-place
execute(function(word) { console.log(word) }, "Hello");
