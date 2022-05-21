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
      this.ageOnMars = ageOnMars; 
    }

    jupiterAge() {
      let ageOnJupiter = Math.round(this.age / 11.86); 
      this.ageOnJupiter =  ageOnJupiter; 
    }

    lifeLeftOnMercury() {
      let yearsLeftToLive; 
      let leftOnMercury = this.lifeExpectancy - this.ageOnMercury; 
      if (Math.sign(leftOnMercury) === 1 ) {
        yearsLeftToLive = leftOnMercury; 
        return yearsLeftToLive;  
      } else {
        yearsLeftToLive = leftOnMercury * -1; 
        return yearsLeftToLive; 
      }
    }

    lifeLeftOnVenus() {
      let leftOnVenus = this.lifeExpectancy - this.ageOnVenus; 
      return leftOnVenus; 
    }

    lifeLeftOnMars() {
      let leftOnMars = this.lifeExpectancy - this.ageOnMars; 
      return leftOnMars; 
    }

    lifeLeftOnJupiter() {
      let leftOnJupiter = this.lifeExpectancy - this.ageOnJupiter; 
      return leftOnJupiter; 
    }
  }