(()=>{
  let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
    name: 'Barry Allen',
    age: 24,
    powers: ['speed']
  };

  flash = {
    name: 'Wally West',
    powers: ['force'],
    getName() {
      return this.name
    }
  }
})();