namespace Validator {
  export const Text = (text:string): boolean => {
    return text.length > 3 ? true : false;
  } 

  export const Dates = (date:Date):boolean => {
    return isNaN(date.valueOf()) ? false : true;
  } 
}

console.log(Validator.Text('Rod'));

