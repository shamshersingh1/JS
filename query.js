let query=" Find places near me ";
console.log("query", query);
let trimmedQuery=query.trim();
console.log("trimmedQuery", trimmedQuery);
let wordsArr=trimmedQuery.split(" ");
console.log("wordArr",wordsArr);
let outcome= wordsArr.join("+");
console.log("outcome str",outcome);
