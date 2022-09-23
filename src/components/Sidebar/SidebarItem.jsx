import style from "./Sidebar.module.css";

function SidebarItem({ icon, title, active, message }) {
  return (
    <div className={style.sidebarItem}>
      <div className={style.icon}>{icon}</div>
      <p className={style.title}>{title}</p>
      {message && <div className={style.message}>{message}</div>}
      {active && <div className={style.marker}></div>}
    </div>
  );
}

export default SidebarItem;
