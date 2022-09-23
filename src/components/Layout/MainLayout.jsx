import style from "./MainLayout.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";

const MainLayout = () => {
  return (
    <div className={style.layout}>
      <div className={style.sidebar}>
        <Sidebar />
      </div>
      <div className={style.homeLayout}>
        <Header />
        <Projects />
      </div>
    </div>
  );
};

export default MainLayout;
