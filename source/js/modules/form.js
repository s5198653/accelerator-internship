import {Form} from '../vendor/form-validate/form';

const initForm = () => {
  const form = new Form();
  window.form = form;
  form.init();
};

export {initForm};
