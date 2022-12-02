(() => {
  type Hero = {
    name: string,
    age?: number,
    powers: string[],
    getName?: () => string
  };

  let myCustomVariable: string | number | Hero = 'Rodwyn';
  
  myCustomVariable = 20;

  myCustomVariable = {
    name: 'Rodwyn',
    powers: ['sex-appeal'],
  }
})();
