import style from "./AddButton.module.css";
import { IoIosAdd } from "react-icons/io";

const AddButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={style.button}>
      <IoIosAdd color="darkcyan" size={20} />
    </button>
  );
};

export default AddButton;
