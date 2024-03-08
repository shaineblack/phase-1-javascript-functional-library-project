function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        callback(values[i]);
      }
    }
    return collection;
  }

  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        result.push(callback(collection[i]));
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
      }
    }
    return result;
  }

  function myReduce(collection, callback, acc) {
    let result = acc;
    if (Array.isArray(collection)) {
      let startIndex = 0;
      if (acc === undefined) {
        result = collection[0];
        startIndex = 1;
      }
      for (let i = startIndex; i < collection.length; i++) {
        result = callback(result, collection[i], collection);
      }
    } else {
      const values = Object.values(collection);
      let startIndex = 0;
      if (acc === undefined) {
        result = values[0];
        startIndex = 1;
      }
      for (let i = startIndex; i < values.length; i++) {
        result = callback(result, values[i], collection);
      }
    }
    return result;
  }

  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          return values[i];
        }
      }
    }
    return undefined;
  }

  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          result.push(values[i]);
        }
      }
    }
    return result;
  }

  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }

  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }

  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }

  function myKeys(object) {
    return Object.keys(object);
  }
  
  function myValues(object) {
    return Object.values(object);
  }