(() => {
  class Avenger {
    constructor(
      public name:string,
      public realName:string
    ){
      // console.log('Avenger constructor called!!!');
    }

    protected getFullName():string {
      return `${ this.name } is ${ this.realName }`;
    }
  }

  class Xmen extends Avenger {
    constructor(
      name:string,
      realName:string,
      public isMutant:boolean
    ){
      super(name, realName);
      // console.log('X-men constructor called!!!');
    }

    get xmenFUllName():string {
      return super.getFullName();
    }

    set setRealName( name:string) {
      this.realName = name;
    }
  }

  const wolverine = new Xmen('Wolverine', 'Logan', true);
  // console.log(wolverine.xmenFUllName);

  wolverine.setRealName = 'Daken';

  // console.log(wolverine.xmenFUllName);
  
})();