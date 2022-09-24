import { FiSearch } from "react-icons/fi";
import { BsQuestionCircle, BsBell } from "react-icons/bs";
import personImage from "../../assets/images/person.jpg";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.search}>
        <label className={style.searchIcon}>
          <FiSearch size={20} alignmentBaseline="central" />
        </label>
        <input placeholder="Search" className={style.searchInput} />
      </div>
      <div className={style.headerActions}>
        <div className={style.headerAnimation}>
          <BsQuestionCircle size={20} />
        </div>
        <div className={style.headerAnimation}>
          <BsBell size={20} />
        </div>
        <div className={style.headerAnimation}>
          <select className="dropdown">
            <option value="fruit">Hamza Al Sheikh</option>
            <option value="vegetable">Test</option>
            <option value="meat">Test Test</option>
          </select>
        </div>

        <div className={style.headerAnimation}>
          <img
            src={personImage}
            alt="image"
            className={`${style.actionsImage}`}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
