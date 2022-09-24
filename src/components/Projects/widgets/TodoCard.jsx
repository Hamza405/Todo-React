import style from "./TodoCard.module.css";
import { ImAttachment } from "react-icons/im";
import { AiOutlineMinus } from "react-icons/ai";
import TagName from "./TagName";

const TodoCard = ({ id, title, des, tags, isDrag, onDelete }) => {
  const deleteHandler = () => {
    onDelete(id);
  };
  return (
    <div className={`${style.container} ${isDrag ? style.containerR : ""}`}>
      <div className={`${style.cardHeader} ${style.cardAnimation}`}>
        <h2>. {title}</h2>
        <div>
          <AiOutlineMinus
            style={{ marginRight: "2rem" }}
            cursor="pointer"
            onClick={deleteHandler}
            size={18}
            color="gray"
          />
          <ImAttachment size={18} color="gray" />
        </div>
      </div>

      <p className={`${style.des} ${style.cardAnimation}`}>{des}</p>
      <div className={`${style.cardFooter} ${style.cardAnimation}`}>
        {tags.map((item) => (
          <TagName key={item.tag} title={item.tag} color={item.color} />
        ))}
      </div>
    </div>
  );
};

export default TodoCard;
