const regexMatch = (valueToMatch: string, value: string) => {
  const reg = new RegExp(valueToMatch);

  return reg.exec(value);
};

export default regexMatch;
