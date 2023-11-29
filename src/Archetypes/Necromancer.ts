import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static implement = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Necromancer.implement += 1;
    return Necromancer.implement;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;