import Section from "../_share/Section/Section";

const MainInfo = ({ title, btnTitle, options, transType, handleClick }) => {
  return (
    <Section title={title}>
      <button type="button" onClick={() => handleClick(transType)}>{btnTitle}</button>
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
