import style from "./Title.module.css";

const Title = ({ title, count }) => {
  return (
    <div className={style.container}>
      <p className={style.title}>{title}</p>
      <p className={style.count}>{count}</p>
    </div>
  );
};

export default Title;
