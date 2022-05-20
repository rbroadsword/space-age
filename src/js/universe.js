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

    jupiterAge() {
      let ageOnJupiter = Math.round(this.age / 11.86); 
      console.log(ageOnJupiter); 
      return ageOnJupiter; 
    }

    lifeExpectancyOnMercury() {
      let expectancyOnMercury = Math.round(this.lifeExpectancy / .24); 
      console.log(expectancyOnMercury); 
      return expectancyOnMercury; 
    }

    lifeExpectancyOnVenus() {
      let expectancyOnVenus = Math.round(this.lifeExpectancy / .62); 
      console.log(expectancyOnVenus); 
      return expectancyOnVenus; 
    }

    lifeExpectancyOnMars() {
      let expectancyOnMars = Math.round(this.lifeExpectancy / 1.88); 
      console.log(expectancyOnMars); 
      return expectancyOnMars; 
    }

    lifeExpectancyOnJupiter() {
      let expectancyOnJupiter = Math.round(this.lifeExpectancy / 11.86); 
      console.log(expectancyOnJupiter); 
      return expectancyOnJupiter; 
    }
  }