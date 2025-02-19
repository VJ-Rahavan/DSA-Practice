//Dynamic Array with Some Built-In Functionalities

class DynamicArray {
  constructor(capacity) {
    this.arr = new Array();
    this.capacity = capacity;
    this.size = 0;
  }

  getValueByIndex = (index) => {
    try {
      if (typeof index === 'number') {
        for (let i = 0; i < this.arr.length; i++) {
          if (i === index) {
            return this.arr[index];
          }
        }
        throw new Error('Value not found!');
      } else {
        throw new Error('Please provide numbers are supported as input');
      }
    } catch (error) {
      return error.message;
    }
  };

  insetValueBySorting = (tempArr, value) => {
    let size = 0;

    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] < value) {
        tempArr.push(this.arr[i]);
        size++;
        if (!this.arr[i + 1] || this.arr[i + 1] >= value) {
          tempArr.push(value);
          size++;
        }
      } else if (this.arr[i] > value) {
        if (!this.arr[i - 1]) {
          tempArr.push(value);
          size++;
        }
        tempArr.push(this.arr[i]);
        size++;
      } else {
        tempArr.push(value);
        tempArr.push(this.arr[i]);
        size += 2;
      }
    }

    return size;
  };

  checkIfValueCanBeAdded = () => {
    if (this.capacity === this.size) {
      throw new Error('Array Size Limit is Exceeded');
    }
  };

  insertValue = (value) => {
    try {
      let tempArr = [];
      this.checkIfValueCanBeAdded();
      if (this.arr.length === 0) {
        tempArr.push(value);
      } else {
        this.size = this.insetValueBySorting(tempArr, value);
      }
      this.arr = [...tempArr];
      return this.arr;
    } catch (error) {
      return error.message;
    }
  };

  deleteValue = (value) => {
    try {
      let temp = [],
        c = 1;
      for (let i of this.arr) {
        if (i === value && c === 1) {
          c--;
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
