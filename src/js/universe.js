export default class Universe {
  constructor(age, lifeExpectancy, lifeLeft){
    this.age = age; 
    this.lifeExpectancy = lifeExpectancy; 
    this.lifeLeft = lifeExpectancy - age; 
  }

  mercuryAge() {
    let ageOnMercury = Math.floor(this.age / .24); 
    return ageOnMercury; 
  }
}