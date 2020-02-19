import shortid from 'shortid';

export const ALL_ID = {
  nameId: shortid.generate(),
  numberId: shortid.generate(),
  finedId: shortid.generate(),
};
export const MUTE_NUMBER = n => {
  if (n.length === 10) {
    return `(${n[0]}${n[1]}${n[2]}) ${n[3]}${n[4]}${n[5]} ${n[6]}${n[7]} ${n[8]}${n[9]}`;
  }
  return `+${n[0]} ${n[1]}(${n[2]}${n[3]}${n[4]}) ${n[5]}${n[6]}${n[7]} ${n[8]}${n[9]} ${n[10]}${n[11]}`;
};
export const IS_ACTIVE_BTN = error => {
  // //-----// switch metod //-----//
  // switch (error.name) {
  //   case false:
  //     switch (error.number) {
  //       case false:
  //         return false;
  //       default:
  //         return true;
  //     }
  //   default:
  //     return true;
  // }
  // //-----// if metod //-----//
  if (error.name === false) {
    if (error.number === false) {
      return false;
    }
  }
  return true;
  // //-----// bool metod //-----//
  // const boolName = error.name === false;
  // const boolNumber = error.number === false;
  // return !(boolName && boolNumber);
};
export const errorHandler = (element, error) => {
  const { name, value } = element;
  const condition = {
    name: value.length >= 3,
    number: value.length === 10 || value.length === 12,
  };
  if (condition[name]) {
    return {
      ...error,
      [name]: false,
    };
  }
  return {
    ...error,
    [name]: true,
  };
};
