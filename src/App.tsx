import "./App.css";
import ProjectsPage from "./projects/ProjectsPage";
import Greet from "./Greeter/Greet";

function App() {
  // return (
  //   <blockquote cite="Umesh Maurya">
  //     Tell me and I forget, teach me and I may remember, involve me and I learn.
  //   </blockquote>
  // );
  const person = { firstName: "Siddhesh" };
  return (
    <>
      {/* <div className="container">
        <ProjectsPage />
      </div> */}

      <div className="container">
        <Greet first="Umesh" last="Kumar" />
        <Greet person={person} />
      </div>
    </>
  );
}

export default App;
