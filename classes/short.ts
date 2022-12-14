(() => {
  class Avenger {
    static avgAge: number = 35;

    constructor(
      public name: string, 
      public team: string,  
      private realName: string
    ) {}
  }

  const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott Lang');

  console.log( antman);
  
})();
