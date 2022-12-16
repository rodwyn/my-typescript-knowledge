(() => {
  class Avenger {
    static avgAge: number = 35;

    constructor(
      public name: string, 
      public team: string,  
      private realName: string
    ) {}

    public getBio():string {
      return `${ this.name } is part of the team ${ this.team }`;
    }

    private getRealName():string {
      return this.realName;
    }

    static getAvgAge():number {
      return this.avgAge;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott Lang');

  // console.log( antman.getBio() );
  
})();
