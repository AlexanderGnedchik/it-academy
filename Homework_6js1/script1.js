(function () {

    `use strict`;
    let person = {};
    person.firstName = inputName();
    person.secondName = inputSname();
    person.age = askForNumber();
    person.gender = inputGender();
    person.output = Output();

    function inputName() {
        let name = prompt(`Введите имя: `);
        if ( name === null || name===``){
            return null;
        }
        else {
            return name;
        }
    }
    function inputSname() {
        let name = prompt(`Введите фамилию: `);
        if ( name === null || name===``){
            return null;
        }
        else {
            return name;
        }
    }
    function inputGender() {
            let gender = prompt(`Введите пол: `);
            if (gender===`М` || gender ===`Ж`|| gender ===`м` || gender ===`ж`) {
                return gender;
            }
            else if(gender===``){
                return inputGender();
            }
            else {
                // alert(`You must enter F or f and M or m`);
                return null;
            }
        }
    function inputAge() {
        let age = prompt(`Введите возраст `);
        if (age === null) {
            return null;
        }
        return parseInt(age);
    }
    function askForNumber () {
        let result;
        do {
            result = inputAge();
        } while (result !== null && !isFinite(result));
        if(result>0 && result <130){
            return result;
        }
        else {
            return null;
        }
    }

    function Output() {
        if(person.age!==null && person.firstName!==null && person.secondName!==null && person.gender!==null){

            if(person.age>=63 && person.gender===`М`|| person.age>=58 && person.gender===`м` || person.age>=63 && person.gender===`Ж`|| person.age>=58 && person.gender===`ж`){
                alert(`Полное имя: ` + person.firstName + ` ` + person.secondName + `\n`+`Возраст: `+ person.age + `\n` + `Пол: ` + person.gender + `\n` + `Пенсия: да`);
            }
            else {
                alert(`Полное имя: ` + person.firstName + ` ` + person.secondName + `\n`+`Возраст: `+ person.age + `\n` + `Пол: ` + person.gender + `\n` + `Пенсия: нет`);
            }
        }
        else {
            alert(`Неправильно введены данные`)
        }
    }
}());