import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { isEmpty } from "lodash";

import style from "./Todo.module.css";
import {
  DUMMY_DATA_TODO,
  DUMMY_DATA_INPROGRESS,
  DUMMY_DATA_COMPLETED,
  onDragEnd,
} from "../../services/data";
import { dragStart, dragUpdate } from "../../services/dnd_helper";
import TodoCard from "./widgets/TodoCard";
import Title from "./widgets/Title/Title";
import AddButton from "./widgets/AddButton/AddButton";
import TodoContainer from "./widgets/TodoContainer/TodoContainer";

const Todo = () => {
  const [placeholderProps, setPlaceholderProps] = useState({});

  const [todoList, setTodoList] = useState(DUMMY_DATA_TODO);
  const [completedList, setCompletedList] = useState(DUMMY_DATA_COMPLETED);
  const [inProgressList, setInProgressList] = useState(DUMMY_DATA_INPROGRESS);

  const addTodoHandler = (todo) => {
    DUMMY_DATA_TODO.push(todo);
    setTodoList((prev) => [...DUMMY_DATA_TODO]);
  };
  const removeTodoHandler = (todoId) => {
    const temp = DUMMY_DATA_TODO.filter((i) => i.id !== todoId);
    DUMMY_DATA_TODO.splice(0, DUMMY_DATA_TODO.length, ...temp);
    setTodoList((prev) => prev.filter((i) => i.id !== todoId));
  };

  const removeInProgressHandler = (todoId) => {
    const temp = DUMMY_DATA_INPROGRESS.filter((i) => i.id !== todoId);
    DUMMY_DATA_INPROGRESS.splice(0, DUMMY_DATA_INPROGRESS.length, ...temp);
    setTodoList((prev) => prev.filter((i) => i.id !== todoId));
  };

  const removeCompletedHandler = (todoId) => {
    const temp = DUMMY_DATA_COMPLETED.filter((i) => i.id !== todoId);
    DUMMY_DATA_COMPLETED.splice(0, DUMMY_DATA_COMPLETED.length, ...temp);
    setTodoList((prev) => prev.filter((i) => i.id !== todoId));
  };

  const handleDragStart = (event) => {
    const obj = dragStart(event);
    setPlaceholderProps(obj);
  };

  const handleDragEnd = (result) => {
    setPlaceholderProps({});
    if (!result.destination) {
      return;
    }
    onDragEnd(result);
    setTodoList(DUMMY_DATA_TODO);
    setInProgressList(DUMMY_DATA_INPROGRESS);
    setCompletedList(DUMMY_DATA_COMPLETED);
  };

  const handleDragUpdate = (event) => {
    const obj = dragUpdate(event);
    setPlaceholderProps(obj);
  };

  return (
    <div className={style.container}>
      <DragDropContext
        type="MAIN"
        onDragEnd={handleDragEnd}
        onDragStart={handleDragStart}
        onDragUpdate={handleDragUpdate}
      >
        <TodoContainer>
          <Title title="todo" count={DUMMY_DATA_TODO.length} />
          <AddButton onAdd={addTodoHandler} status="todo" />
          <Droppable droppableId="todo" key="todo" type="MAIN">
            {(provider, snapshot) => (
              <div {...provider.droppableProps} ref={provider.innerRef}>
                {todoList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provider, snapshot) => (
                      <div
                        {...provider.draggableProps}
                        {...provider.dragHandleProps}
                        ref={provider.innerRef}
                      >
                        <TodoCard
                          isDrag={snapshot.isDragging}
                          key={item.id}
                          id={item.id}
                          onDelete={removeTodoHandler}
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
          <Title title="In Progress" count={DUMMY_DATA_INPROGRESS.length} />
          <AddButton disable={true} status="inProgress" />
          <Droppable droppableId="inProgress" key="inProgress" type="MAIN">
            {(provider, snapshot) => (
              <div
                style={{ position: "relative" }}
                {...provider.droppableProps}
                ref={provider.innerRef}
              >
                {inProgressList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provider, snapshot) => (
                      <div
                        {...provider.draggableProps}
                        {...provider.dragHandleProps}
                        ref={provider.innerRef}
                      >
                        <TodoCard
                          isDrag={snapshot.isDragging}
                          key={item.id}
                          id={item.id}
                          onDelete={removeInProgressHandler}
                          title={item.title}
                          des={item.des}
                          tags={item.tags}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provider.placeholder}
                {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
                  <div
                    className={style.targetBorder}
                    style={{
                      top: placeholderProps.clientY,
                      left: placeholderProps.clientX,
                      height: placeholderProps.clientHeight,
                      width: placeholderProps.clientWidth,
                    }}
                  />
                )}
              </div>
            )}
          </Droppable>
        </TodoContainer>
        <TodoContainer>
          <Title title="Completed" count={DUMMY_DATA_COMPLETED.length} />
          <AddButton disable={true} status="completed" />
          <Droppable droppableId="completed" key="completed" type="MAIN">
            {(provider, snapshot) => (
              <div
                style={{ position: "relative" }}
                {...provider.droppableProps}
                ref={provider.innerRef}
              >
                {completedList.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provider, snapshot) => (
                      <div
                        {...provider.draggableProps}
                        {...provider.dragHandleProps}
                        ref={provider.innerRef}
                      >
                        <TodoCard
                          isDrag={snapshot.isDragging}
                          key={item.id}
                          id={item.id}
                          title={item.title}
                          onDelete={removeCompletedHandler}
                          des={item.des}
                          tags={item.tags}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provider.placeholder}
                {!isEmpty(placeholderProps) && snapshot.isDraggingOver && (
                  <div
                    className={style.targetBorder}
                    style={{
                      top: placeholderProps.clientY,
                      left: placeholderProps.clientX,
                      height: placeholderProps.clientHeight,
                      width: placeholderProps.clientWidth,
                    }}
                  />
                )}
              </div>
            )}
          </Droppable>
        </TodoContainer>
      </DragDropContext>
    </div>
  );
};

export default Todo;
