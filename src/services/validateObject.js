function validateObject(obj) {
  const errors = [];

  for (let key in obj) {
    if (!validateNumber(obj[key])) {
      errors.push(key);
    }

    if (key === 'procent' && obj[key] > 100) {
      errors.push(key);
    }
  }

  if (errors.length > 0) {
    return { isValid: false, errors };
  }

  return { isValid: true };
}

function validateNumber(value) {
  if (typeof value === 'number') {
    value = value.toString();
  }
  if (typeof value !== 'string') return false;
  const trimmedValue = value.trim();
  if (!trimmedValue) return false;
  const regex = /^[+-]?\d+(\.\d+)?$/;
  if (!regex.test(trimmedValue)) return false;
  const parsedValue = parseFloat(trimmedValue);
  if (parsedValue <= 0) return false;
  if (parsedValue !== parseFloat(value)) return false;
  return true;
}

export default validateObject;
