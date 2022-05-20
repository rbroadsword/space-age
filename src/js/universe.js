export default class Universe {
  constructor(age, lifeExpectancy){
    this.age = age; 
    this.lifeExpectancy = lifeExpectancy;
    this.lifeLeft = this.lifeExpectancy - this.age; 
    this.ageOnMercury = 0; 
    this.ageOnVenus = 0; 
    this.ageOnMars = 0; 
    this.ageOnJupiter = 0; 
  }

  mercuryAge() {
    let ageOnMercury = Math.round(this.age / .24); 
    this.ageOnMercury = ageOnMercury; 
  }

  venusAge() {
      let ageOnVenus = Math.round(this.age / .62); 
      this.ageOnVenus = ageOnVenus; 
    }

    marsAge() {
      let ageOnMars = Math.round(this.age / 1.88); 
      return ageOnMars; 
    }

    jupiterAge() {
      let ageOnJupiter = Math.round(this.age / 11.86); 
      return ageOnJupiter; 
    }

    lifeLeftOnMercury() {
      let expectancyOnMercury = Math.round(this.lifeExpectancy / .24); 
      return expectancyOnMercury; 
    }

    lifeLeftOnVenus() {
      let expectancyOnVenus = Math.round(this.lifeExpectancy / .62); 
      return expectancyOnVenus; 
    }

    lifeLeftOnMars() {
      let expectancyOnMars = Math.round(this.lifeExpectancy / 1.88); 
      return expectancyOnMars; 
    }

    lifeLeftOnJupiter() {
      let expectancyOnJupiter = Math.round(this.lifeExpectancy / 11.86); 
      return expectancyOnJupiter; 
    }
  }