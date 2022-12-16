(() => {
  class Apocalypse {
    static instance: Apocalypse;

    private constructor( public name:string ){}

    static callApocalypse():Apocalypse {
      if ( !Apocalypse.instance ) {
        Apocalypse.instance = new Apocalypse('im the only apocalypse');
      }

      return Apocalypse.instance;
    }

    public changeName( newName:string ):void {
      this.name = newName;
    }
  }

  const apocalypse1 = Apocalypse.callApocalypse();
  const apocalypse2 = Apocalypse.callApocalypse();
  const apocalypse3 = Apocalypse.callApocalypse();

  // console.log( apocalypse1, apocalypse2, apocalypse3);
  
  apocalypse2.changeName('Dark Phoenix');

  // console.log( apocalypse1, apocalypse2, apocalypse3);
})();
