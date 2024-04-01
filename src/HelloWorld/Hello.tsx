import { number } from "prop-types";
import React, { SyntheticEvent } from "react";

export interface Props {
  name: string;
  entusiasmLevel?: number;
}
/**PROPS**/
//FUNCTION COMPONENT
/*
function Hello({ name, entusiasmLevel = 1 }: Props) {
  if (entusiasmLevel <= 0) {
    throw new Error("You could be a little more enthusiastic. :D");
  }

  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(entusiasmLevel)}
      </div>
    </div>
  );
}
*/

//CLASS COMPONENT
/*
class Hello extends React.Component<Props> {
  render() {
    const { name, entusiasmLevel = 1 } = this.props;
    if (entusiasmLevel <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(entusiasmLevel)}
        </div>
      </div>
    );
  }
}
*/

//STATE --> Replace Hello with the new implementation below that stores enthusiasm level as state.

interface State {
  currentEnthusiasm: number;
}

class Hello extends React.Component<Props, State> {
  state = { currentEnthusiasm: this.props.entusiasmLevel || 1 };

  onIncrement = (event: SyntheticEvent) => {
    console.log(event);
    this.updateEnthusiasm(1);
  };
  onDecrement = (event: SyntheticEvent) => {
    console.log(event.target);
    this.updateEnthusiasm(-1);
  };

  render() {
    const { name } = this.props;

    if (this.state.currentEnthusiasm <= 0) {
      throw new Error("You could be a little more enthusiastic. :D");
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {name + getExclamationMarks(this.state.currentEnthusiasm)}
        </div>
        <button onClick={this.onDecrement}>-</button>
        <button onClick={this.onIncrement}>+</button>
      </div>
    );
  }
  updateEnthusiasm(change: number) {
    this.setState((currentState) => {
      return { currentEnthusiasm: currentState.currentEnthusiasm + change };
    });
  }
}
export default Hello;

//helpers

function getExclamationMarks(numchars: number) {
  return Array(numchars + 1).join("!");
}
