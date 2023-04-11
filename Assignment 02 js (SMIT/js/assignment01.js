function addNumberTo(number) {
    return function (num) {
      return num + number;
    };
  }

  const add5To = addNumberTo(5);

  function add5To(num) {
    const result = add5To(num);
    alert(`The result is: ${result}`);
  };