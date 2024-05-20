const cipher = (salt: string): ((text: string) => string) => {
  const textToChars = (text: string): number[] => text.split('').map((c) => c.charCodeAt(0));
  const byteHex = (n: number): string => ('0' + n.toString(16)).substr(-2);
  const applySaltToChar = (code: number): number => textToChars(salt).reduce((a, b) => a ^ b, code);

  return (text: string): string =>
    text
      .split('')
      .map(textToChars)
      .map((a) => a[0])
      .map(applySaltToChar)
      .map(byteHex)
      .join('');
};

const decipher = (salt: string): ((encoded: string) => string) => {
  const textToChars = (text: string): number[] => text.split('').map((c) => c.charCodeAt(0));
  const applySaltToChar = (code: number): number => textToChars(salt).reduce((a, b) => a ^ b, code);
  return (encoded: string): string =>
    encoded
      .match(/.{1,2}/g)!
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join('');
};

const encryptStr = (text: string): string => cipher('SECRET')(text);

export { encryptStr, decipher };
