// Code your solution here
function findMatching(names , string){
    //takes an array of names and a string
    // returns matching list of drivers
    // .filter takes a callback function and runs it through the array
    // if the return is true, the element is copied to a new array
const nameFilter = names.filter(function(names){
    return names.toLowerCase() === string.toLowerCase();
  });
  return nameFilter;
}

function fuzzyMatch(names,string){
    //returns drivers name that matches provided letters
const nameFilter = names.filter(function(el){
          return el[0] === string[0];
 });
 return nameFilter;
}

function matchName(driver,string){
    //driver has two properties: name and hometown
    //return each element whose name === string
    // return the whole object
    const nameMatch = driver.filter((name)=> {
        return name === string
         });
    return nameMatch.keys;
}