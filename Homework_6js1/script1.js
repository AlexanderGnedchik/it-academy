(function () {

    `use strict`;
    let person = {};
    person.firstName = inputName();
    person.secondName = inputSname();
    person.age = askForNumber();
    person.sex = inputSex();
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
    function inputSex() {
            let sex = prompt(`Введите пол: `);
            if (sex===`М` || sex ===`Ж`|| sex ===`м` || sex ===`ж`) {
                return sex;
            }
            else if(sex===``){
                return inputSex();
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
        if(result>0){
            return result;
        }
        else {
            return null;
        }
    }

    function Output() {
        if(person.age!==null && person.firstName!==null && person.secondName!==null){

            if(person.age>=63 && person.sex===`М`|| person.age>=58 && person.sex===`м` || person.age>=63 && person.sex===`Ж`|| person.age>=58 && person.sex===`ж`){
                alert(`Полное имя: ` + person.firstName + ` ` + person.secondName + `\n`+`Возраст: `+ person.age + `\n` + `Пол: ` + person.sex + `\n` + `Пенсия: да`);
            }
            else {
                alert(`Полное имя: ` + person.firstName + ` ` + person.secondName + `\n`+`Возраст: `+ person.age + `\n` + `Пол: ` + person.sex + `\n` + `Пенсия: нет`);
            }
        }
        else {
            alert(`Неправильно введены данные`)
        }
    }
}());