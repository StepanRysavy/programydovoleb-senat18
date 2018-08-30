import B from '@/language/babylon';

function validation (q) {

  return {
    result: q.value.indexOf('@') > -1,
    message: q.value.indexOf('@') > -1 ? '' : B('validate.email')
  }
}

export default validation;
