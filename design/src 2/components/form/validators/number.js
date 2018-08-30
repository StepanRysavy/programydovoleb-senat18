function validation (q) {
  return {
    result: !isNaN(q.value),
    message: 'value is ' + (isNaN(q.value) ? 'not ' : '') + 'a number'
  }
}

export default validation;
