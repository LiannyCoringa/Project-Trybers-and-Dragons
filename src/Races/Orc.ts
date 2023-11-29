import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  static implement = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    Orc.implement += 1;
    return Orc.implement;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;