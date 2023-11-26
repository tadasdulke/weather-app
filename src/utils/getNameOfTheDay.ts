const getNameOfTheDay = (date: Date) =>
  date.toLocaleDateString('en-EN', {
    weekday: 'short',
  });

export default getNameOfTheDay;
