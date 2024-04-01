import { number } from "prop-types";
import React, { Component } from "react";

export class ListType extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5];
    const tens = [];
    //a. for loop
    for (let index = 0; index < numbers.length; index++) {
      const number = numbers[index];
      tens.push(number * 10);
    }
    //b. array.forEach

    numbers.forEach(function (number) {
      tens.push(number * 10);
    });

    //c. array.map
    const tensMap = numbers.map(function (number) {
      return number * 10;
    });
    console.log(tensMap);

    console.log(tens);

    //d.array.map with arrow function
    const tensArrow = numbers.map((number) => number * 10);
    console.log(tensArrow);
    return <div>ListType</div>;
  }
}

export default ListType;
