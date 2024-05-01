function helloWorld(language) {
    switch (language) {
        case "es":
            return "¡Hola, Mundo!";
        case "de":
            return "Hallo, Welt!";
        default:
            return "Hello, World";
    }
}


console.log(helloWorld("en")); 
console.log(helloWorld("es"));  
console.log(helloWorld("de")); 
