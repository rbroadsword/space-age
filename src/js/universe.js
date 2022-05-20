export default class Universe {
  constructor(age, lifeExpectancy, lifeLeft){
    this.age = age; 
    this.lifeExpectancy = lifeExpectancy; 
    this.lifeLeft = lifeExpectancy - age; 
  }

  mercuryAge() {
    let ageOnMercury = Math.round(this.age / .24); 
    return ageOnMercury; 
  }

  venusAge() {
      let ageOnVenus = Math.round(this.age / .62); 
      console.log(ageOnVenus); 
      return ageOnVenus; 
    }

    marsAge() {
      let ageOnMars = Math.round(this.age / 1.88); 
      console.log(ageOnMars); 
      return ageOnMars; 
    }
  }