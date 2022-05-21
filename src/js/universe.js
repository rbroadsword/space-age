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
      let yearsLeftToLive; 
      let leftOnVenus = this.lifeExpectancy - this.ageOnVenus; 
      if (Math.sign(leftOnVenus) === 1 ) {
        yearsLeftToLive = leftOnVenus; 
        return yearsLeftToLive;  
      } else {
        yearsLeftToLive = leftOnVenus * -1; 
        return yearsLeftToLive; 
      } 
    }

    lifeLeftOnMars() {
      let yearsLeftToLive; 
      let leftOnMars = this.lifeExpectancy - this.ageOnMars; 
      if (Math.sign(leftOnMars) === 1 ) {
        yearsLeftToLive = leftOnMars; 
        return yearsLeftToLive;  
      } else {
        yearsLeftToLive = leftOnMars * -1; 
        return yearsLeftToLive; 
      } 
    }

    lifeLeftOnJupiter() {
      let yearsLeftToLive; 
      let leftOnJupiter = this.lifeExpectancy - this.ageOnJupiter; 
      if (Math.sign(leftOnJupiter) === 1 ) {
        yearsLeftToLive = leftOnJupiter; 
        return yearsLeftToLive;  
      } else {
        yearsLeftToLive = leftOnJupiter * -1; 
        return yearsLeftToLive; 
      } 
  }
}