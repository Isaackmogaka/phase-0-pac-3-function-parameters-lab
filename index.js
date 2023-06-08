function introduction(name){
   return (`Hi, my name is ${name}`) 
}


function introductionWithLanguage(name, language) {
  return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}
console.log(introductionWithLanguage("Isaack", "Python"));
console.log(introductionWithLanguage("Enock", "JavaScript"));


function introductionWithLanguageOptional(name, language = "Javascript") {
  return "Hi, my name is " + name + " and I am learning to program in " + language + ".";
}
console.log(introductionWithLanguage("Gracie", "JavaScript"));




