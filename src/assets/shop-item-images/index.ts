import { ItemName } from '../../hooks';

import cabbageSeeds from './cabbage-seeds.png';
import farmer from './farmer.png';
import bot from './bot.png';

export default {
  'Cabbage Seeds': cabbageSeeds,
  'Farmer': farmer,
  'Bot': bot,
} as { [K in ItemName]: string };