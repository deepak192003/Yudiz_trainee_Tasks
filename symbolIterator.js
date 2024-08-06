const customIterable = {
    data: [10, 20, 30],
     [Symbol.iterator]() {
      let index = 0;
      const data = this.data;
      return {
        next() {
          if (index < data.length) {
            return { value: data[index++], done: false };
          } else {
            return { value: undefined, done: true };
          }
        }
      };
    }
  };
  
  for (const value of customIterable) {
    console.log(value);
  }
  
  // Output:
  // 10
  // 20
  // 30
  