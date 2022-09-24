import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import style from "./Todo.module.css";
import {
  DUMMY_DATA_TODO,
  DUMMY_DATA_INPROGRESS,
  DUMMY_DATA_COMPLETED,
  onDragEnd,
} from "../../services/data";
import TodoCard from "./widgets/TodoCard";
import Title from "./widgets/Title/Title";
import AddButton from "./widgets/AddButton/AddButton";
import TodoContainer from "./widgets/TodoContainer/TodoContainer";

const Todo = () => {
  return (
    <div className={style.container}>
      <DragDropContext type="MAIN" onDragEnd={onDragEnd}>
        <TodoContainer>
          <Title title="todo" count="2" />
          <AddButton />
          <Droppable droppableId="todo" key="todo" type="MAIN">
            {(provider, snapshot) => (
              <div
                style={{
                  minHeight: "500px",
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgray",
                }}
                {...provider.droppableProps}
                ref={provider.innerRef}
              >
                {DUMMY_DATA_TODO.map((item, index) => (
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
        </TodoContainer>
        <TodoContainer>
          <Title title="In Progress" count="2" />
          <AddButton />
          <Droppable droppableId="inProgress" key="inProgress" type="MAIN">
            {(provider, snapshot) => (
              <div
                style={{
                  minHeight: "500px",
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgray",
                }}
                {...provider.droppableProps}
                ref={provider.innerRef}
              >
                {DUMMY_DATA_INPROGRESS.map((item, index) => (
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
        </TodoContainer>
        <TodoContainer>
          <Title title="Completed" count="2" />
          <AddButton />
          <Droppable droppableId="completed" key="completed" type="MAIN">
            {(provider, snapshot) => (
              <div
                style={{
                  minHeight: "500px",
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "lightgray",
                }}
                {...provider.droppableProps}
                ref={provider.innerRef}
              >
                {DUMMY_DATA_COMPLETED.map((item, index) => (
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
        </TodoContainer>
      </DragDropContext>
    </div>
  );
};

export default Todo;
