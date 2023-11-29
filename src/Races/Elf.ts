import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  static implement = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    Elf.implement += 1;
    return Elf.implement;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;