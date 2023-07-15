import { ItemName } from '../../hooks';

import cabbageSeeds from './cabbage-seeds.png';
import farmer from './farmer.png';

export default {
  'Cabbage Seeds': cabbageSeeds,
  'Farmer': farmer,
} as { [K in ItemName]: string };