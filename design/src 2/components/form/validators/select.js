function validation (q) {
  return {
    result: q.required === false || q.value !== null,
    message: 'select ' + ((q.required === false || q.value !== null) ? 'is' : 'is not ') + 'selected'
  }
}

export default validation;
