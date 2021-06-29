import Section from "../components/_share/Section/Section";
import Button from "../components/_share/Button/Button";
import { useSelector } from "react-redux";

const CategoriesListPage = ({ match, history }) => {
  const {
    params: { transType },
  } = match;

  const data = useSelector((state) => state.transactions)[transType];

  const handleOpenEditForm = (transId) => {
    history.push({
      pathname: `/${transType}/edit/${transId}`,
    });
  };

  console.log(data);

  return (
    <Section title="CategoriesListPage">
      <ul>
        {data.map((item) => {
            const cbArgs = [item.id]
          return (
            <li key={item.id}>
              <span>{item.date}</span> | <span>{item.category}</span> |
              <span>{item.sum === "" ? 0 : item.sum}</span>
              <Button
                title="Edit"
                cbOnClick={handleOpenEditForm}
                cbArgs={cbArgs}
              />
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default CategoriesListPage;
