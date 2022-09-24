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
import TodoCard from "./widgets/TodoCard";
import Title from "./widgets/Title/Title";
import AddButton from "./widgets/AddButton/AddButton";
import TodoContainer from "./widgets/TodoContainer/TodoContainer";

const queryAttr = "data-rbd-drag-handle-draggable-id";
const getDraggedDom = (draggableId) => {
  const domQuery = `[${queryAttr}='${draggableId}']`;
  const draggedDOM = document.querySelector(domQuery);

  return draggedDOM;
};

const Todo = () => {
  const [placeholderProps, setPlaceholderProps] = useState({});

  const handleDragStart = (event) => {
    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    const { clientHeight, clientWidth } = draggedDOM;
    const sourceIndex = event.source.index;
    var clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      [...draggedDOM.parentNode.children]
        .slice(0, sourceIndex)
        .reduce((total, curr) => {
          const style = curr.currentStyle || window.getComputedStyle(curr);
          const marginBottom = parseFloat(style.marginBottom);
          return total + curr.clientHeight + marginBottom;
        }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      ),
    });
  };

  const handleDragEnd = (result) => {
    setPlaceholderProps({});
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    onDragEnd(result);
  };

  const handleDragUpdate = (event) => {
    if (!event.destination) {
      return;
    }

    const draggedDOM = getDraggedDom(event.draggableId);

    if (!draggedDOM) {
      return;
    }

    const { clientHeight, clientWidth } = draggedDOM;
    const destinationIndex = event.destination.index;
    const sourceIndex = event.source.index;

    const childrenArray = [...draggedDOM.parentNode.children];
    const movedItem = childrenArray[sourceIndex];
    childrenArray.splice(sourceIndex, 1);

    const updatedArray = [
      ...childrenArray.slice(0, destinationIndex),
      movedItem,
      ...childrenArray.slice(destinationIndex + 1),
    ];

    var clientY =
      parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
      updatedArray.slice(0, destinationIndex).reduce((total, curr) => {
        const style = curr.currentStyle || window.getComputedStyle(curr);
        const marginBottom = parseFloat(style.marginBottom);
        return total + curr.clientHeight + marginBottom;
      }, 0);

    setPlaceholderProps({
      clientHeight,
      clientWidth,
      clientY,
      clientX: parseFloat(
        window.getComputedStyle(draggedDOM.parentNode).paddingLeft
      ),
    });
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
          <Title title="todo" count="2" />
          <AddButton />
          <Droppable droppableId="todo" key="todo" type="MAIN">
            {(provider, snapshot) => (
              <div
                style={{
                  minHeight: "500px",
                  background: snapshot.isDraggingOver
                    ? "lightblue"
                    : "transparent",
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
                style={{ position: "relative" }}
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
          <Title title="Completed" count="2" />
          <AddButton />
          <Droppable droppableId="completed" key="completed" type="MAIN">
            {(provider, snapshot) => (
              <div
                style={{ position: "relative" }}
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
