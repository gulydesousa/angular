namespace Validations{

    export const validateText = (text: string):boolean => {
        return text.length > 3;
    }

    const validateDate = (myDate: Date):boolean => {
        return !isNaN(myDate.valueOf());
    }

}

console.log(Validations.validateText('Hello'));

console.log(Validations.validateText('Hi'));
console.log(Validations.);