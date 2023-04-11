function saveObjectToLocalStorage(key, obj) {
    const serializedObj = JSON.stringify(obj); // convert the object to a string using JSON.stringify
    localStorage.setItem(key, serializedObj); // store the stringified object in localStorage using the specified key
  }
  
  const myObj = {
    name: "Daniyal",
    age: 19,
    city: "Karachi"
  };
  
  saveObjectToLocalStorage("myObjKey", myObj); // save the object to localStorage with the key "myObjKey"
  console.log(myObj)