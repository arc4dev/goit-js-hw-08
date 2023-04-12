import _ from 'lodash';

const form = document.querySelector('.feedback-form');
const formInputs = form.querySelectorAll('input, textarea');

//vars
const emptyObj = {
  email: '',
  message: '',
};

//func
const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('feedback-form-state')) || emptyObj;
};

const setLocalStorage = obj => {
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
};

const setLastFormState = () => {
  const data = getLocalStorage();

  formInputs.forEach(input => {
    input.value = data[input.name];
  });
};

const createInputObj = inputs => {
  return Array.from(inputs).reduce((obj, input) => {
    obj[input.name] = input.value;
    return obj;
  }, {});
};

/////////////////////////

setLastFormState();

//events
form.addEventListener(
  'input',
  _.throttle(() => {
    //get all inputs
    const inputs = form.querySelectorAll('input, textarea');

    //create an object with {name:value} props
    const inputObj = createInputObj(inputs);

    //set obj to local storage
    setLocalStorage(inputObj);
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault();

  console.log(e.target.elements[0].value, e.target.elements[1].value);

  form.reset();
  setLocalStorage(emptyObj);
});
