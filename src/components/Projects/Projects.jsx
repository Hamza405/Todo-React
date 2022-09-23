import style from "./Projects.module.css";
import Todo from "./Todo";

const Projects = () => {
  return (
    <div className={style.projectLayout}>
      <div className={style.top}>
        <h2 className={style.title}>Projects</h2>
        <select className={`dropdown ${style.dropdownAnimation}`}>
          <option value="fruit">Hamza Al Sheikh</option>
          <option value="vegetable">Test</option>
          <option value="meat">Test Test</option>
        </select>
      </div>
      <div>
        <Todo />
      </div>
    </div>
  );
};

export default Projects;
