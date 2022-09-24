import { useRef, useState } from "react";
import style from "./AddButton.module.css";
import { random } from "../../../../services/data";
import { IoIosAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

const AddButton = ({ onAdd, status, disable }) => {
  const titleRef = useRef();
  const desRef = useRef();
  const [addMod, setAddMod] = useState(false);

  const addHandler = () => {
    const title = titleRef.current.value;
    const des = desRef.current.value;
    if (title.length === 0 || desRef.length === 0) return;
    onAdd({
      id: Date.now().toString(),
      title,
      status: status,
      des,
      tags: [{ tag: "HA", color: random() }],
    });
    setAddMod(false);
  };

  if (disable === true) {
    return (
      <button style={{ cursor: "auto" }} className={style.button}>
        <IoIosAdd color="darkcyan" size={20} />
      </button>
    );
  }

  return addMod ? (
    <div className={style.button}>
      <label htmlFor="title">Title :</label>
      <input ref={titleRef} id="title" className={style.input} />
      <label htmlFor="des">Description :</label>
      <br />
      <textarea ref={desRef} id="des" className={style.input} />
      <br />
      <button
        onClick={addHandler}
        style={{ width: "50%" }}
        className={style.button}
      >
        <IoIosAdd color="darkcyan" size={20} />
      </button>
      <button
        onClick={() => setAddMod(false)}
        style={{ width: "50%" }}
        className={style.button}
      >
        <AiOutlineMinus color="darkcyan" size={20} />
      </button>
    </div>
  ) : (
    <button onClick={() => setAddMod(true)} className={style.button}>
      <IoIosAdd color="darkcyan" size={20} />
    </button>
  );
};

export default AddButton;
