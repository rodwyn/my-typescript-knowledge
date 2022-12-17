(() => {
  interface Mutant {
    name: string;
    power: string;
    getPower():string;
  }

  interface Human {
    realName: string;
    age: number;
  }

  class Xmen implements Human, Mutant {
    constructor(
      public age: number,
      public realName: string,
      public name: string,
      public power:string
    ){}

    getPower():string {
      return this.power;
    }
  }
})();