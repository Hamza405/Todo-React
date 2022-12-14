const colors = ["red", "blue", "green", "yellowgreen", "orange"];
export const random = () => colors[Math.floor(Math.random() * colors.length)];

export const DUMMY_DATA_TODO = [
  {
    id: "1sst",
    title: "First Task",
    status: "todo",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur qui, vero minima enim temporibus est saepe error, odit eligendi necessitatibus ab harum deserunt consequuntur? Odio, doloremque. Cupiditate, fuga. Temporibus, hic.",
    tags: [
      { tag: "HA", color: random() },
      { tag: "ML", color: random() },
      { tag: "SR", color: random() },
    ],
  },
  {
    id: "2st",
    title: "Second Task",
    status: "todo",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    tags: [
      { tag: "HA", color: random() },
      { tag: "ML", color: random() },
    ],
  },
];

export const DUMMY_DATA_INPROGRESS = [
  {
    id: "4st",
    title: "Final Task",
    status: "inProgress",
    des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur qui, vero minima enim temporibus est saepe error, odit eligendi necessitatibus ab harum deserunt consequuntur? Odio, doloremque. Cupiditate, fuga. Temporibus, hic.",
    tags: [{ tag: "SR", color: random() }],
  },
];

export const DUMMY_DATA_COMPLETED = [];

export const onDragEnd = (result) => {
  const { source, destination, draggableId } = result;
  if (!destination) return;
  if (source.droppableId === destination.droppableId) return;

  if (
    source.droppableId === "todo" &&
    destination.droppableId === "inProgress"
  ) {
    const task = DUMMY_DATA_TODO.find((i) => i.id === draggableId);
    task.status = "inProgress";
    const temp = DUMMY_DATA_TODO.filter((i) => i.id !== draggableId);
    DUMMY_DATA_TODO.splice(0, DUMMY_DATA_TODO.length, ...temp);
    DUMMY_DATA_INPROGRESS.push(task);
  } else if (
    source.droppableId === "inProgress" &&
    destination.droppableId === "completed"
  ) {
    const task = DUMMY_DATA_INPROGRESS.find((i) => i.id === draggableId);
    task.status = "completed";
    const temp = DUMMY_DATA_INPROGRESS.filter((i) => i.id !== draggableId);
    DUMMY_DATA_INPROGRESS.splice(0, DUMMY_DATA_INPROGRESS.length, ...temp);
    DUMMY_DATA_COMPLETED.push(task);
  } else if (
    source.droppableId === "todo" &&
    destination.droppableId === "completed"
  ) {
    const task = DUMMY_DATA_TODO.find((i) => i.id === draggableId);
    task.status = "completed";
    const temp = DUMMY_DATA_TODO.filter((i) => i.id !== draggableId);
    DUMMY_DATA_TODO.splice(0, DUMMY_DATA_TODO.length, ...temp);
    DUMMY_DATA_COMPLETED.push(task);
  } else {
    return;
  }
};
