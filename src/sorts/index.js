export const sorting = (arr, type, field) => {
  return type === "asc"
    ? sortByAscending(arr, field)
    : sortByDescending(arr, field);
};

function sortByAscending(arr, field) {
  return arr.sort((a, b) => {
    const fieldA =
      typeof a[field] === "string" ? a[field].toLowerCase() : a[field];
    const fieldB =
      typeof b[field] === "string" ? b[field].toLowerCase() : b[field];
    if (fieldA < fieldB) {
      return -1;
    }
    if (fieldA > fieldB) {
      return 1;
    }
    return 0;
  });
}

function sortByDescending(arr, field) {
  return arr.sort((a, b) => {
    const fieldA =
      typeof a[field] === "string" ? a[field].toLowerCase() : a[field];
    const fieldB =
      typeof b[field] === "string" ? b[field].toLowerCase() : b[field];
    if (fieldA > fieldB) {
      return -1;
    }
    if (fieldA < fieldB) {
      return 1;
    }
    return 0;
  });
}
