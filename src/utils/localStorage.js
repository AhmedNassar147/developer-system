export function getFormStorage(key) {
  return localStorage.getItem(key);
}

export function setToStorage(key, values) {
  if (typeof values === "object") {
    values = JSON.stringify(values);
  }

  return localStorage.setItem(key, values);
}
