import Button from "../_share/Button/Button";
import LableInput from "../_share/LableInput/LableInput";
import Section from "../_share/Section/Section";

const сatOptsList = {
  incomes: [
    {
      name: "category",
      value: "Зарплата",
      title: "Зарплата",
      type: "radio",
    },
    {
      name: "category",
      value: "Бонус",
      title: "Бонус",
      type: "radio",
    },
  ],
  costs: [
    {
      name: "category",
      value: "Еда",
      title: "Еда",
      type: "radio",
    },
    {
      name: "category",
      value: "Машина",
      title: "Машина",
      type: "radio",
    },
  ],
};

const CategoriesList = ({ transType, handleChange, history, onToggle }) => {
  const optsList = сatOptsList[transType] || [];
  const handleGoBack = () => {
    history.push("/" + transType);
  };

  const handleCategoryChange = (e) => {
    handleChange(e);
    onToggle();
    handleGoBack();
  };

  return (
    <Section>
      <Button title="Goback" cbOnClick={handleGoBack} />
      {optsList.length && (
        <ul>
          {optsList.map(({ name, type, value, title }) => (
            <li key={value}>
              <LableInput
                type={type}
                title={title}
                name={name}
                value={value}
                cbOnChange={handleCategoryChange}
              />
              <Button cbOnClick={() => {}} title="..." />
            </li>
          ))}
        </ul>
      )}
      <LableInput name={"addCat"} value={"addCat"} cbOnClick={() => {}} />
    </Section>
  );
};

export default CategoriesList;
