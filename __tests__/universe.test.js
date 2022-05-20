import Universe from "../src/js/universe"; 

describe("Universe", () => {
  test('should correctly creat a spaceAge object', () => {
    const myAge = new Universe(30, 100); 
    expect(myAge.age).toEqual(30); 
    expect(myAge.lifeExpectancy).toEqual(100); 
    expect(myAge.lifeLeft).toEqual(70); 
  }); 

  test('should correctly tell you your age on Mercury', () => {
    const myAge = new Universe(30, 100, 70); 
    expect(myAge.mercuryAge()).toEqual(125); 
  }); 

  test('should correctly calculate your age on venus', () => {
    const myAge = new Universe(30, 100); 
    expect(myAge.venusAge()).toEqual(48); 
  });

  test('should correctly calculate age on mars', () => {
    const myAge = new Universe(30, 100); 
    expect(myAge.marsAge()).toEqual(16); 
  }); 

  test('should correctly calculate age on jupiter', () => {
    const myAge = new Universe(30, 100); 
    expect(myAge.jupiterAge()).toEqual(3); 
  }); 

  test('should correctly calculate life expectancy on mercury', () => {
    const myAge = new Universe(30, 100); 
    expect(myAge.lifeExpectancyOnMercury()).toEqual(417); 
  })
}); 