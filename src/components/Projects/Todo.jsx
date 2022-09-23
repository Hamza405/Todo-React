import style from "./Todo.module.css";
import TodoCard from "./widgets/TodoCard";
import Title from "./widgets/Title/Title";
import AddButton from "./widgets/AddButton/AddButton";
import TodoContainer from "./widgets/TodoContainer/TodoContainer";

const Todo = () => {
  return (
    <div className={style.container}>
      <TodoContainer>
        <Title title="todo" count="2" />
        <AddButton />
        <TodoCard
          title="create"
          des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur qui, vero minima enim temporibus est saepe error, odit eligendi necessitatibus ab harum deserunt consequuntur? Odio, doloremque. Cupiditate, fuga. Temporibus, hic."
          tags={["HA", "MD", "SH"]}
        />
      </TodoContainer>
      <TodoContainer>
        {/* <Title title="todo" count="2" /> */}
        <AddButton />
      </TodoContainer>
      <TodoContainer>
        {/* <Title title="todo" count="2" /> */}
        <AddButton />
      </TodoContainer>
    </div>
  );
};

export default Todo;
