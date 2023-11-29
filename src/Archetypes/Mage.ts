import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  static implement = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
  }

  static createdArchetypeInstances(): number {
    Mage.implement += 1;
    return Mage.implement;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;