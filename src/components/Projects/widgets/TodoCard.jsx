import style from "./TodoCard.module.css";
import { ImAttachment } from "react-icons/im";
import TagName from "./TagName";

const TodoCard = ({ title, des, tags }) => {
  return (
    <div className={style.container}>
      <div className={`${style.cardHeader} ${style.cardAnimation}`}>
        <h2>. {title}</h2>
        <ImAttachment size={18} color="gray" />
      </div>
      <p className={`${style.des} ${style.cardAnimation}`}>{des}</p>
      <div className={`${style.cardFooter} ${style.cardAnimation}`}>
        {tags.map((item) => (
          <TagName key={item} title={item} />
        ))}
      </div>
    </div>
  );
};

export default TodoCard;
