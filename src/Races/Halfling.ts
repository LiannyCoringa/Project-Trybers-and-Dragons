import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  static implement = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    Halfling.implement += 1;
    return Halfling.implement;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;