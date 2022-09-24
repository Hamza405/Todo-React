import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import style from "./Todo.module.css";
import TodoCard from "./widgets/TodoCard";
import Title from "./widgets/Title/Title";
import AddButton from "./widgets/AddButton/AddButton";
import TodoContainer from "./widgets/TodoContainer/TodoContainer";

const DUMMY_DATA = [
  {
    id: "1sst",
    title: "First Task",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur qui, vero minima enim temporibus est saepe error, odit eligendi necessitatibus ab harum deserunt consequuntur? Odio, doloremque. Cupiditate, fuga. Temporibus, hic.",
    tags: ["HA", "MA", "SR"],
  },
];

const Todo = () => {
  return (
    <div className={style.container}>
      <DragDropContext type="todo" onDragEnd={(r) => console.log(r)}>
        <TodoContainer>
          <Title title="todo" count="2" />
          <AddButton />
          <Droppable droppableId="todo" key="todo" type="todo">
            {(provider, snapshot) => (
              <div {...provider.droppableProps} ref={provider.innerRef}>
                {DUMMY_DATA.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provider, snapshot) => (
                      <div
                        {...provider.draggableProps}
                        {...provider.dragHandleProps}
                        ref={provider.innerRef}
                      >
                        <TodoCard
                          key={item.id}
                          title={item.title}
                          des={item.des}
                          tags={item.tags}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provider.placeholder}
              </div>
            )}
          </Droppable>

          {/* <TodoCard
          title="create"
          des="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur qui, vero minima enim temporibus est saepe error, odit eligendi necessitatibus ab harum deserunt consequuntur? Odio, doloremque. Cupiditate, fuga. Temporibus, hic."
          tags={["HA", "MD", "SH"]}
        /> */}
        </TodoContainer>
        <TodoContainer>
          {/* <Title title="todo" count="2" /> */}
          <AddButton />
        </TodoContainer>
        <TodoContainer>
          {/* <Title title="todo" count="2" /> */}
          <AddButton />
        </TodoContainer>
      </DragDropContext>
    </div>
  );
};

export default Todo;
