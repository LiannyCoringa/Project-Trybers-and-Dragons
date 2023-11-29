import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  static implement = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    Dwarf.implement += 1;
    return Dwarf.implement;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;