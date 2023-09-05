(function(){
    console.log(`db connected`);
})();
// a semicolon at end is always required in above case.
((name) => {
    console.log(`something connected for ${name}`);
})('aman');
