import B from '@/language/babylon';

function validation (q) {

  return {
    result: q.value.length > 0,
    message: q.value.length === 0 ? B('validate.nonEmpty') : ''
  }
}

export default validation;
