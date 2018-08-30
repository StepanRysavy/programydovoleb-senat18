function validation (q) {
  return {
    result: q.required === false || q.value !== null,
    message: 'radio ' + ((q.required === false || q.value !== null) ? 'is' : 'is not ') + 'selected'
  }
}

export default validation;
