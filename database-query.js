// Passing an anonymous function to database.query()
// When the database sever is done, execute the function passed to database.query
database.query("SELECT * from hugetable", function(rows) {
  var result = rows;
});
console.log("Hello World");
