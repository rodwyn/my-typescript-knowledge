(() => {
  class Avenger {
    public name: string;
    public team: string;
    private realName: string;
    static avgAge: number = 35;

    constructor(name: string, team: string,  realName: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const antman: Avenger = new Avenger('Antman', 'Captain', 'Scott Lang');

  console.log( antman);
  
})();
