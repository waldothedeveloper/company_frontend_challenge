const fail = new RegExp(/fail/, "i");
const success = new RegExp(/success/, "i");
const error = new RegExp(/error/, "i");

export const matchingStringHelper = (string) => {
  //
  if (string.match(success)) {
    return {
      __html: string.replace(
        success,
        `<strong>${string.match(success)[0]}</strong>`
      ),
    };
  }
  //
  if (string.match(error)) {
    return {
      __html: string.replace(
        error,
        `<strong>${string.match(error)[0]}</strong>`
      ),
    };
  }
  //
  if (string.match(fail)) {
    return {
      __html: string.replace(fail, `<strong>${string.match(fail)[0]}</strong>`),
    };
  }
};
