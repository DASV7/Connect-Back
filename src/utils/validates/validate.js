module.exports = {
    isEmptyObj(obj) {
      if (obj === [] || obj === null || obj === undefined || obj === {} || obj === "[]" || obj === "{}") {
        return true;
      }
      if (obj.constructor === Object && Object.keys(obj).length === 0) {
        return true;
      }
    },
    isEmptyArray(obj) {
      if (!obj.length || obj === [] || obj === null || obj === undefined || obj === {} || obj === "[]") {
        return true;
      }
    },
    isEmptyQuery(query) {
      if (query === "undefined" || query === undefined || query === "null" || query === null) {
        return true;
      }
    },
    validEmail(email) {
      if (/^[^@ ]+@[^@ ]+\.[^@ \.]{2,}$/.test(email)) {
        return true;
      }
      return false;
    },
    validPhone(phone) {
      if (/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/.test(phone)) {
        return true;
      }
      return false;
    },
    validNumber(value) {
      const numbers = /^[0-9]+$/;
      if (value.match(numbers)) {
        return true;
      }
      return false;
    },
    validImage(file) {
      const fileExts = /(\/png|\/jpeg|\/jpg|\/svg)$/i;
      const isValid = fileExts.exec(file);
      return isValid;
    },
    validFile(file) {
      const fileExts = /(\.(doc|docx|docm|pdf))$/i;
      const isValid = fileExts.exec(file);
      return isValid;
    },
  };
  