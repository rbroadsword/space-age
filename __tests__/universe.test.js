import Universe from "../src/js/universe"; 

describe("Universe", () => {
  test('should correctly creat a spaceAge object', () => {
    const myAge = new Universe(30, 100); 
    expect(myAge.age).toEqual(30); 
    expect(myAge.lifeExpectancy).toEqual(100); 
    expect(myAge.lifeLeft).toEqual(70); 
  }); 

  test('should correctly tell you your age on Mercury', () => {
    const myAge = new Universe(30, 100);
    myAge.mercuryAge(); 
    expect(myAge.ageOnMercury).toEqual(125); 
  }); 

  test('should correctly calculate your age on venus', () => {
    const myAge = new Universe(30, 100); 
    myAge.venusAge(); 
    expect(myAge.ageOnVenus).toEqual(48); 
  });

  test('should correctly calculate age on mars', () => {
    const myAge = new Universe(30, 100); 
    myAge.marsAge(); 
    expect(myAge.ageOnMars).toEqual(16); 
  }); 

  test('should correctly calculate age on jupiter', () => {
    const myAge = new Universe(30, 100); 
    myAge.jupiterAge(); 
    expect(myAge.ageOnJupiter).toEqual(3); 
  }); 

  test('should tell user if they have lived past their life expectancy on mercury and return years left to live', () => {
    const myAge = new Universe(30, 150); 
    myAge.mercuryAge();
    expect(myAge.lifeLeftOnMercury()).toEqual(25); 
  }); 

  test('should tell user if they have lived past their life expectancy on mercury and return years lived past', () => {
    const myAge = new Universe(30, 100); 
    myAge.mercuryAge(); 
    expect(myAge.lifeLeftOnMercury()).toEqual(25); 
  }); 

  test('should tell user if they have lived past their life expectancy on venus and return years left to live', () => {
    const myAge = new Universe(30, 100); 
    myAge.venusAge(); 
    expect(myAge.lifeLeftOnVenus()).toEqual(52); 
  });

  test('should tell user if they have lived past their life expectancy on venus and return years lived past', () => {
    const myAge = new Universe(30, 40); 
    myAge.venusAge(); 
    expect(myAge.lifeLeftOnVenus()).toEqual(8); 
  }); 

  test('should tell user if they have lived past their life expectancy on mars and return years left to live', () => {
    const myAge = new Universe(30, 100); 
    myAge.marsAge(); 
    expect(myAge.lifeLeftOnMars()).toEqual(84); 
  }); 

  test('should tell user if they have lived past their life expectancy on mars and return years lived past', () => {
    const myAge = new Universe(30, 40); 
    myAge.marsAge(); 
    expect(myAge.lifeLeftOnMars()).toEqual(8); 
  }); 

  test('should correctly calculate life left on jupiter', () => {
    const myAge = new Universe(30, 10);
    myAge.jupiterAge(); 
    expect(myAge.lifeLeftOnJupiter()).toEqual(6); 
  }); 

}); 