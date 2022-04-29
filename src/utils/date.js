const parseDate = date => {
  let parsedDate = new Date(date);
  const month = parsedDate.toLocaleString('default', { month: 'long' });
  const day = parsedDate.toLocaleString('default', { weekday: 'long' });

  return `${day} ${parsedDate.getDate()} ${month}, ${parsedDate.getFullYear()}`;
};

export {
  parseDate
};
