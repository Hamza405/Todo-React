const queryAttr = "data-rbd-drag-handle-draggable-id";
const getDraggedDom = (draggableId) => {
  const domQuery = `[${queryAttr}='${draggableId}']`;
  const draggedDOM = document.querySelector(domQuery);

  return draggedDOM;
};

export const dragStart = (event) => {
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
  return {
    clientHeight,
    clientWidth,
    clientY,
    clientX: parseFloat(
      window.getComputedStyle(draggedDOM.parentNode).paddingLeft
    ),
  };
};

export const dragUpdate = (event) => {
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

  return {
    clientHeight,
    clientWidth,
    clientY,
    clientX: parseFloat(
      window.getComputedStyle(draggedDOM.parentNode).paddingLeft
    ),
  };
};
