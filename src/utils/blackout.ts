const blackoutDays = [
  '02/04/2022',
  '03/11/2022',
  '03/12/2022',
  '03/13/2022',
  '04/01/2022',
  '04/08/2022',
  '04/09/2022',
  '04/10/2022',
  '04/15/2022',
  '04/16/2022',
  '04/22/2022',
  '04/23/2022',
  '04/24/2022',
  '04/29/2022',
  '05/13/2022',
  '05/27/2022',
  '06/03/2022',
  '06/04/2022',
  '06/17/2022',
  '06/18/2022',
  '06/19/2022',
  '06/24/2022',
  '06/25/2022',
  '06/26/2022',
  '07/30/2022',
  '07/31/2022',
  '08/05/2022',
  '08/06/2022',
  '08/18/2022',
  '08/19/2022',
  '08/20/2022',
  '09/02/2022',
  '09/03/2022',
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

export const availableDates = daysOfYear.filter((date, index) => {
  if (
    index > 45 &&
    (date.getDay() === 0 || date.getDay() === 6 || date.getDay() === 5)
  ) {
    const tempDateString = date.toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'numeric',
      year: 'numeric',
    });
    return !blackoutDays.includes(tempDateString);
  }
  return false;
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
