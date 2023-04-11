function getObjectFromLocalStorage(key) {
    const serializedObj = localStorage.getItem(key); // get the stringified object from localStorage using the specified key
    if (serializedObj === null) {
      return null; // return null if the key is not found in localStorage
    }
    const obj = JSON.parse(serializedObj); // convert the stringified object back to an object using JSON.parse
    return obj; // return the object
  }
  
  const myObj = getObjectFromLocalStorage("myObjKey"); // retrieve the object from localStorage with the key "myObjKey"
  console.log(myObjKey); // log the retrieved object to the console
