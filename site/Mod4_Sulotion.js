console.log ("Hello in Module 4 Assignment!");

/*Element of names array*/
var names = ["John" , "Jen" , "Jim" , "Jason"
            ,"Laura" , "Paul" , "Frank" , "Larry" 
            ,"Paula" , "john" , "jason"  , "jen"
            ,"jim"];


/* str: name form 'names' Array. */
/* char: to checking if the first charactar is 'j or J'. */
function check (str){

 if( (str.charAt(0) != 'j') && (str.charAt(0) != 'J') ){
 	
 	console.log("Hello " + str);
 }
 else {
    
    console.log("GoodBey " + str);
 }

};

for ( var i = 0 ; i <= names.length ; i++ ) { 

  check (names[i])
}


