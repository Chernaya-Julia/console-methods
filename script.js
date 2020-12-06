console.log ("Бла-бла", 1, 45, "Бла");

console.info ("Какая-то информация");

console.warn ("Предостерегаю тебя от чего-то там");

console.error ("ОШИБКА ОШИБКА ОШИБКА");

console.group ("Свёртыш");

    console.group ("Номер 1");
        console.log ("1");
        console.error ("Ошибка");
        console.log ("3");
    console.groupEnd(); 

    console.group ("Номер 2");
        console.warn ("Осторожно");
        console.log ("5");
        console.log ("6");
    console.groupEnd(); 

console.groupEnd(); 
