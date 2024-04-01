import React from "react";

type FruitListProps = {
  names: {
    id: number;
    name: string;
  }[];
};

export default function FruitList(props: FruitListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.id}>
            {name.id} {name.name}
          </h2>
        );
      })}
    </div>
  );
}
