const blackoutDays = [
  '2/04/2022',
  '3/11/2022',
  '3/12/2022',
  '3/13/2022',
  '4/01/2022',
  '4/08/2022',
  '4/09/2022',
  '4/10/2022',
  '4/15/2022',
  '4/16/2022',
  '4/22/2022',
  '4/23/2022',
  '4/24/2022',
  '4/29/2022',
  '4/30/2022',
  '5/13/2022',
  '5/27/2022',
  '6/03/2022',
  '6/04/2022',
  '6/17/2022',
  '6/18/2022',
  '6/19/2022',
  '6/24/2022',
  '6/25/2022',
  '6/26/2022',
  '7/30/2022',
  '7/31/2022',
  '8/05/2022',
  '8/06/2022',
  '8/18/2022',
  '8/19/2022',
  '8/20/2022',
  '9/02/2022',
  '9/03/2022',
  '10/08/2022',
  '12/23/2022',
  '12/24/2022',
  '12/25/2022',
];

// convert single date to format MM/DD/YYYY
export const convertDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

// generate an array of dates for each day of the year
export const daysOfYear = Array.from({ length: 365 }, (_, i) => {
  return new Date(2022, 0, i + 1);
});

// convert date to MM/DD/YYYY
export const convertDateToString = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month}/${day}/${year}`;
};

// get day name from date
export const getDayName = (date: Date) => {
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return dayNames[date.getDay()];
};

// get month name from date
export const getMonthName = (date: Date) => {
  const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  return monthNames[date.getMonth()];
};

export function getOrdinalNum(n: number) {
  return (
    n +
    (n > 0
      ? ['th', 'st', 'nd', 'rd'][(n > 3 && n < 21) || n % 10 > 3 ? 0 : n % 10]
      : '')
  );
}

export const availableDates = daysOfYear.filter((date, index) => {
  if (
    index > 45 &&
    (date.getDay() === 0 || date.getDay() === 6 || date.getDay() === 5)
  ) {
    const indexOfFoundDate = blackoutDays.indexOf(convertDateToString(date));
    const shouldReturnTrue = indexOfFoundDate === -1;
    return shouldReturnTrue;
  } else {
    return false;
  }
});
