const getNameOfTheDay = (date: Date) =>
  date.toLocaleDateString('en-EN', {
    weekday: 'long',
  });

export default getNameOfTheDay;
