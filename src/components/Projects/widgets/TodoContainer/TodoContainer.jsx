import style from "./TodoContainer.module.css";

const TodoContainer = (props) => {
  return <div className={style.container}>{props.children}</div>;
};

export default TodoContainer;
