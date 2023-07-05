
function flatten(value) {
  let result = [];

  for (let i = 0; i < value.length; i++) {
    if (Array.isArray(value[i])) {
      result.push(...value[i].flat());
    } else {
      result.push(value[i]);
    }
  }

  return result;
}
