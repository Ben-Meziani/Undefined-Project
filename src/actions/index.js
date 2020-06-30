export * from './room';
export * from './user';
export * from './upload';
export * from './dices';
export * from './video';

export const TOGGLE_OPEN = 'TOGGLE_OPEN';
export const CHANGE_VALUE = 'CHANGE_VALUE';
export const DROPDOWN_CHANGE = 'DROPDOWN_CHANGE';
export const LOADING = 'LOADING';

export const toggleOpen = (value) => ({
  type: TOGGLE_OPEN,
  value,
});

export const dropdownChange = (selectedValue) => ({
  type: DROPDOWN_CHANGE,
  selectedValue,
});

export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  name,
  value,
});

export const loading = () => ({
  type: LOADING,
});
