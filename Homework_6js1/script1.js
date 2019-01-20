(function () {

    `use strict`;
    let person = {};
    person.firstName = inputName();
    person.secondName = inputSname();
    person.age = askForNumber();
    person.sex = inputSex();
    person.output = Output();

    function inputName() {
        let name = prompt(`Enter first name: `);
        if ( name === null || name===``){
            return null;
        }
        else {
            return name;
        }
    }
    function inputSname() {
        let name = prompt(`Enter Second name: `);
        if ( name === null || name===``){
            return null;
        }
        else {
            return name;
        }
    }
    function inputSex() {
            let sex = prompt(`Enter sex`);
            if (sex===`M` || sex ===`F`|| sex ===`m` || sex ===`f`) {
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
        let age = prompt(`Enter age `);
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

            if(person.age>=63 && person.sex===`F`|| person.age>=58 && person.sex===`M` || person.age>=63 && person.sex===`f`|| person.age>=58 && person.sex===`m`){
                alert(`Полное имя: ` + person.firstName + ` ` + person.secondName + `\n`+`Age: `+ person.age + `\n` + `Sex: ` + person.sex + `\n` + `Пенсия: yes`);
            }
            else {
                alert(`Полное имя: ` + person.firstName + ` ` + person.secondName + `\n`+`Age: `+ person.age + `\n` + `Sex: ` + person.sex + `\n` + `Пенсия: no`);
            }
        }
        else {
            alert(`Неправильно введены данные`)
        }
    }
}());