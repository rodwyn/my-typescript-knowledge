(() => {
  let avenger: any = 123;

  avenger = 'Dr Strange';

  console.log( (avenger as string).charAt(0) );

  avenger = 150.23256415;
  console.log( (<number>avenger).toFixed(2) );
  
  
})();