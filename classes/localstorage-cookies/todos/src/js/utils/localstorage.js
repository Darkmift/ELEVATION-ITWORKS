// save to localStorage
export function storeToLs(key, value) {
  const obj = { data: value };
  localStorage.setItem(key, JSON.stringify(obj));
}

// extract from localStorage
export function readFromLS(key) {
  const result = localStorage.getItem(key);
  try {
    return JSON.parse(result).data;
  } catch (error) {
    console.error('🚀 ~ readFromLS ~ error:', error);
    return null;
  }
}
