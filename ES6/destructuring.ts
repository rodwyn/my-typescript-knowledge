(()=>{
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
  };

  const avengers:Avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany'
  };

  const printAvenger = ({ ironman, ...rest }:Avengers):void => {
    console.log( ironman, rest);
  };

  printAvenger(avengers);
})();