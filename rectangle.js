const rectangle = {
  width: 5,
  height: 5,
  set installWidth(sm) {
    if (Number.isInteger(sm)) {
      this.width = sm;
    }
    if (!Number.isInteger(sm)) {
      this.width = Number(sm);
    }
  },
  set installHeight(sm) {
    if (Number.isInteger(sm)) {
      this.height = sm;
    }
    if (!Number.isInteger(sm)) {
      this.height = Number(sm);
    }
  },
  get perimeter() {
    return `${this.width * 2 + this.height * 2}см`;
  },
  get square() {
    return `${this.width * this.height}см`;
  },
};

rectangle.installWidth = '10.5';
rectangle.installHeight = '10';
console.log(rectangle.perimeter);
console.log(rectangle.square);
console.log(rectangle);
