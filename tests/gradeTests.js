var book = require("../lib/grades").book;

exports ["can add new grade"] = function(test){
    book.addGrade(90);
    var count = book.getCountOfGrades();
    
    test.equal(count, 1)    
    test.done();
    }