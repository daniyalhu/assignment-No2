function saveObjectPropertiesToLocalStorage(obj) {
    for (let prop in obj) {
      const key = prop;
      const value = obj[prop];
      localStorage.setItem(key, JSON.stringify(value)); // store each property in localStorage with its property name as the key
    }
  
    const newObj = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key));
      newObj[key] = value; // create a new object with the same properties as the original object using the data from localStorage
    }
  
    return newObj;
  }
  
  
  const myObj = {
    name: "Daniyal",
    age: 19,
    city: "Karachi"
  };
  
  const newObject = saveObjectPropertiesToLocalStorage(myObj); // save the object's properties to localStorage, retrieve the object from localStorage, and return it as a new object
  console.log(newObj); // log the new object to the console
  
  