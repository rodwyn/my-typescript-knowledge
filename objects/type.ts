(()=>{
  type Hero = {
    name: string,
    age?: number,
    powers: string[],
    getName?: () => string
  };

  let flash: Hero = {
    name: 'Barry Allen',
    age: 24,
    powers: ['speed']
  };

  let Batman: Hero = {
    name: 'Bruce Wayne',
    age: 36,
    powers: ['millionare'],
    getName() {
      return this.name
    },
  }

  
})();