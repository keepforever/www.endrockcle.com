import { blackoutDays } from '../constants/blackoutDays';

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

// function to determine if date is in the past
export const isPast = (date: Date) => {
  return date < new Date();
};

export const availableDates = daysOfYear.filter((date, index) => {
  const isAfterDayFortyFive = index > 153;
  const isDateInPast = isPast(date);
  const isFriSatSun =
    date.getDay() === 0 || date.getDay() === 6 || date.getDay() === 5;
  const convertedDate = convertDate(date);
  const isBlackoutDay = blackoutDays.includes(convertedDate);

  return isAfterDayFortyFive && isFriSatSun && !isBlackoutDay && !isDateInPast;
});
