import style from "./Sidebar.module.css";
import { GrHomeRounded } from "react-icons/gr";
import { ImStatsBars2 } from "react-icons/im";
import { AiOutlineFolderOpen, AiOutlineCalendar } from "react-icons/ai";
import { BsChatLeftDots } from "react-icons/bs";
import { TbSettings } from "react-icons/tb";
import { MdOutlineLogout } from "react-icons/md";
import SidebarItem from "./SidebarItem";

const items = [
  {
    icon: <GrHomeRounded size={15} />,
    title: "Overview",
    active: false,
  },
  {
    icon: <ImStatsBars2 size={15} />,
    title: "Stats",
    active: false,
  },
  {
    icon: <AiOutlineFolderOpen size={15} />,
    title: "Projects",
    active: true,
  },
  {
    icon: <BsChatLeftDots size={15} />,
    title: "Chat",
    active: false,
    message: 2,
  },
  {
    icon: <AiOutlineCalendar size={15} />,
    title: "Calendar",
    active: false,
  },
];

function Sidebar() {
  return (
    <div className={style.sidebar}>
      <h1 className={style.logo}>.Todo</h1>
      <SidebarItem icon={<GrHomeRounded size={15} />} title="Overview" />
      <SidebarItem icon={<ImStatsBars2 size={15} />} title="Stat" />
      <SidebarItem
        icon={<AiOutlineFolderOpen size={15} />}
        title="Project"
        active={true}
      />
      <SidebarItem
        icon={<BsChatLeftDots size={15} />}
        title="Chat"
        message={2}
      />
      <SidebarItem icon={<AiOutlineCalendar size={15} />} title="Calendar" />
      <div className={style.downList}>
        <SidebarItem icon={<TbSettings size={15} />} title="settings" />
        <SidebarItem icon={<MdOutlineLogout size={15} />} title="Logout" />
      </div>
    </div>
  );
}

export default Sidebar;
