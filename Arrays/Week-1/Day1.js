//Dynamic Array with Some Built-In Functionalities

class DynamicArray {
  constructor(capacity) {
    this.arr = [];
    this.capacity = capacity;
    this.size = 0;
  }

  getValueByIndex = (index) => {
    try {
      if (typeof index === 'number') {
        if (this.arr[index]) {
          return this.arr[index];
        }
        throw new Error('Value not found!');
      } else {
        throw new Error('Please provide numbers are supported as input');
      }
    } catch (error) {
      return error.message;
    }
  };

  checkIfValueCanBeAdded = () => {
    if (this.capacity === this.size) {
      throw new Error('Array Size Limit is Exceeded');
    }
  };

  insertValue(value) {
    try {
      if (this.size === this.capacity) {
        this.checkIfValueCanBeAdded();
      }

      let tempArr = [];
      let inserted = false;

      for (let i = 0; i < this.size; i++) {
        if (!inserted && this.arr[i] >= value) {
          tempArr.push(value);
          inserted = true;
        }
        tempArr.push(this.arr[i]);
      }

      if (!inserted) tempArr.push(value);

      this.arr = tempArr;
      this.size++;

      return this.arr;
    } catch (error) {
      return error.message;
    }
  }

  deleteValue = (value) => {
    try {
      let temp = [],
        c = 1;
      for (let i of this.arr) {
        if (i === value && c === 1) {
          c--;
          this.size--;
          console.log('Deleted');
        } else {
          temp.push(i);
        }
      }

      if (c === 1) {
        throw new Error('Value not found!');
      }

      this.arr = [...temp];

      return this.arr;
    } catch (error) {
      return error.message;
    }
  };
}

const data = new DynamicArray(4);
console.log(data.insertValue(10));
console.log(data.insertValue(78));
console.log(data.insertValue(10));
console.log(data.insertValue(8));
console.log(data.insertValue(11));
console.log(data.insertValue(8));
console.log(data.insertValue(89));
console.log(data.insertValue(1));
console.log(data.getValueByIndex(2));

console.log(data.deleteValue(1));
