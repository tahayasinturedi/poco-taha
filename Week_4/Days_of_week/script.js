let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

do {
    translatedDay = prompt("Please enter a day:");
    if (daysOfWeek.includes(translatedDay)) {        
        switch (translatedDay) {
            case "Sunday":
                translatedDay = "Sonntag";
                break;
            case "Monday":
                translatedDay = "Montag";
                break;
            case "Tuesday":
                translatedDay = "Dienstag";
                break;
            case "Wednesday":
                translatedDay = "Mittwoch";
                break;
            case "Thursday":
                translatedDay = "Donnerstag";
                break;
            case "Friday":
                translatedDay = "Freitag";
                break;
            case "Saturday":
                translatedDay = "Samstag";
                break;
        }
        console.log(translatedDay);
        alert(translatedDay);
    } else {
        alert("Please enter one of the valid days of the week.");
    }
} while (!daysOfWeek.includes(translatedDay));