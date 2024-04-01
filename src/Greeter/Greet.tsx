// function Greet() {
//   return <h1>Hello</h1>;
// }

import React from "react";

interface GreetProps {
  first?: string; // Assuming 'first' is a string prop
  last?: string;

  person?: {
    firstName: string;
  };
}
/*
function Greet({ first, last, person }: GreetProps) {
  //   props.first = "Kumar";  props are immutable
  //const { first, last } = props;

  return (
    <h1>
      Hello, {first} {last} {person?.firstName}
    </h1>
  );
}
*/
class Greet extends React.Component<GreetProps> {
  render() {
    const { first, last, person } = this.props;

    return (
      <h1>
        Hello, {first || ""}
        {last || ""}
        {person?.firstName || ""}
      </h1>
    );
  }
}

export default Greet;
