(() => {
  const fullName = ( firstName:string, upper:boolean = false, lastName?:string ):string => {
    if (upper) {
      return `${ firstName} ${ lastName || '' }`.toUpperCase();
    }
    else {
      return `${ firstName} ${ lastName || '' }`;
    }
  }

  console.log(fullName('Tony'));
  console.log(fullName('Tony', true));
  console.log(fullName('Tony', true, 'Stark'));
})();
