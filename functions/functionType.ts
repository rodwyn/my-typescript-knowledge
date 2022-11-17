(() => {
  const addNumbers = ( a:number, b:number ):number => a+b;
  const greet = (name:string):string => `Hola ${ name }`;
  const saveTheWorld = ():string => `Èl mundo está salvado.`;

  const firstFunction: (a:number, b:number) => number = addNumbers;
  const secondFunction: (name:string) => string = greet;
  const thirdFunction: () => string = saveTheWorld;
})();