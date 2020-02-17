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
export const IS_ACTIVE_BTN = (name, number) => {
  const boolName = name === false;
  const boolNumber = number === false;
  const isActive = boolName && boolNumber;
  return !isActive;
};
export function SET_ERROR(element, inputName, error) {
  const { name, value } = element;
  const condition = {
    name: value.length >= 3,
    number: value.length === 10 || value.length === 12,
  };
  if (name === inputName) {
    if (condition[name]) {
      return {
        error: { ...error, [name]: false },
      };
    }
    return {
      error: { ...error, [name]: true },
    };
  }
}
