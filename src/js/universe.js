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
      return ageOnVenus; 
    }

    marsAge() {
      let ageOnMars = Math.round(this.age / 1.88); 
      return ageOnMars; 
    }

    jupiterAge() {
      let ageOnJupiter = Math.round(this.age / 11.86); 
      return ageOnJupiter; 
    }

    lifeExpectancyOnMercury() {
      let expectancyOnMercury = Math.round(this.lifeExpectancy / .24); 
      return expectancyOnMercury; 
    }

    lifeExpectancyOnVenus() {
      let expectancyOnVenus = Math.round(this.lifeExpectancy / .62); 
      return expectancyOnVenus; 
    }

    lifeExpectancyOnMars() {
      let expectancyOnMars = Math.round(this.lifeExpectancy / 1.88); 
      return expectancyOnMars; 
    }

    lifeExpectancyOnJupiter() {
      let expectancyOnJupiter = Math.round(this.lifeExpectancy / 11.86); 
      return expectancyOnJupiter; 
    }
  }