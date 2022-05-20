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

  venusAge() {
      let ageOnVenus = Math.floor(this.age / .62); 
      console.log(ageOnVenus); 
      return ageOnVenus; 
    }
  }