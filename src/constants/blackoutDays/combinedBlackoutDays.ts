import { brianBlackout } from './brian';
import { bryanBlackout } from './bryan';
import { danBlackout } from './dan';
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
];

export const blackoutDays = [...new Set(temp)];

// export const blackoutDays = [
//   '6/3/2022',
//   '6/4/2022', // McArthur's Show
//   '6/5/2022', // OSPW
//   '6/17/2022',
//   '6/18/2022',
//   '6/19/2022',
//   '6/24/2022',
//   '6/25/2022',
//   '6/26/2022',
//   '7/1/2022', // holiday
//   '7/2/2022', // holiday
//   '7/3/2022', // holiday
//   '7/8/2022', // OSPW
//   '7/9/2022', // The Works show
//   '7/10/2022', // OSPW
//   '7/15/2022', // month is full
//   '7/16/2022', // month is full
//   '7/17/2022', // month is full
//   '7/22/2022', // basement show
//   '7/23/2022', // OSPW
//   '7/24/2022', // OSPW
//   '7/29/2022', // month is full
//   '7/30/2022',
//   '7/31/2022',
//   '8/5/2022',
//   '8/6/2022',
//   '8/12/2022', // OSPW
//   '8/13/2022', // OSPW
//   '8/14/2022', // OSPW
//   '8/18/2022', // Roundhouse show (PIB)
//   '8/19/2022',
//   '8/20/2022',
//   '8/21/2022', // OSPW
//   '9/2/2022', // Elena's Wedding
//   '9/3/2022', // Elena's wedding
//   '9/9/2022', // OSPW
//   '9/10/2022', // The works show
//   '9/11/2022', // OSPW
//   '10/8/2022',
//   '12/23/2022',
//   '12/24/2022',
//   '12/25/2022',
// ];
