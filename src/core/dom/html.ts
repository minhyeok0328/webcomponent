const html = (data: TemplateStringsArray, ...args: unknown[]) => {
  const parseString = data.reduce((result: string, str: string, i: number) => {
    result += str;
    if (i < str.length) {
      result += str[i];
    }
    return result;
  });

  const a = parseString.substring(parseString.indexOf('@') + 1);
  return parseString;
};

export default html;
