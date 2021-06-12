import Section from "../_share/Section/Section";
import icons from "../../assets/icons/sprite.svg";
import css from "./MainInfo.module.css";
import IconAdd from "../_icons/IconAdd";

const MainInfo = ({ title, btnTitle, options, transType, handleClick }) => {
  console.log(icons);
  return (
    <Section title={title}>
      <button
        className={css.btn}
        type="button"
        onClick={() => handleClick(transType)}
      >
        {/* <svg className={css.icon}>
          <use href={icons + "#icon-add-outline"}></use>
        </svg> */}
        <IconAdd className={css.icon} />
      </button>
      <span>RUB</span>
      <ul>
        {options.map(({ id, descr }) => (
          <li key={id}>
            <span>{descr}</span>
            <span>0.00</span>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default MainInfo;
