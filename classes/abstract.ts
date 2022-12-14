(()=>{
  abstract class Mutant {
    constructor(
      public name:string,
      public realName: string
    ){}
  }

  class Xmen extends Mutant {
    public saveTheWorld():string {
      return `${this.name} saved the world again.`
    }
  }

  class Villian extends Mutant {
    public attackTheWorld():string {
      return `${this.name} attacked the world again`;
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan');
  const magneto = new Villian('Magneto', 'Erik Lehnsherr');
  // console.log(wolverine.saveTheWorld());
  // console.log(magneto.attackTheWorld());

  const printName = ( character:Mutant ) => {
    // console.log(character.realName);
  }

  printName( wolverine );
})();