import "./App.css";
import ProjectsPage from "./projects/ProjectsPage";
import Greet from "./Greeter/Greet";
import Hello from "./HelloWorld/Hello";
import FruitList from "./Fruit/FruitList";
import { MOCK_PROJECTS } from "./projects/MockProjects";
import ProjectList from "./projects/ProjectList";

function App() {
  // return (
  //   <blockquote cite="Umesh Maurya">
  //     Tell me and I forget, teach me and I may remember, involve me and I learn.
  //   </blockquote>
  // );
  const person = { firstName: "Siddhesh" };
  const data = [
    { id: 1, name: "apple" },
    { id: 2, name: "orange" },
    { id: 3, name: "blueberry" },
    { id: 4, name: "banana" },
    { id: 5, name: "kiwi" },
  ];
  return (
    <>
      {/* <div className="container">
        <ProjectsPage />
      </div> */}

      {/* <div className="container">
        <Greet first="Umesh" last="Kumar" />
        <Greet person={person} />
      </div> */}
      {/* <Hello name="Umesh" />
      <FruitList names={data} /> */}

      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}

export default App;
