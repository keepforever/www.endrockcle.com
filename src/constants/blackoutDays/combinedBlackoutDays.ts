import { brianBlackout } from './brian';
import { bryanBlackout } from './bryan';
import { danBlackout } from './dan';
import { holidayBlackout } from './holidays';
import { remyBlackout } from './remy';
import { seanBlackout } from './sean';
import { showsBooked } from './showsBooked';

export const temp = [
  ...brianBlackout,
  ...bryanBlackout,
  ...danBlackout,
  ...remyBlackout,
  ...seanBlackout,
  ...showsBooked,
  ...holidayBlackout,
];

export const blackoutDays = [...new Set(temp)];
