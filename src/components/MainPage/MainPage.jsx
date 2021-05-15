import MainInfo from "../MainInfo/MainInfo";
import Button from "../_share/Button/Button";
import Section from "../_share/Section/Section";
import mainInfoOpts from "../../assets/options/mainInfo";

const balanceOpts = [
  {
    id: "allTime",
    descr: "Все время",
  },
];

const MainPage = ({ history, location }) => {
  const handleOpenTransaction = (transType) => {
    const pathname = "/" + transType;
    history.push({pathname: pathname, state: {
      from: location
    }});
  };
  return (
    <>
      <h1>Журнал расходов</h1>
      <MainInfo
        options={mainInfoOpts}
        title={"Расходы"}
        transType="costs"
        btnTitle="Add"
        handleClick={handleOpenTransaction}
      />
      <MainInfo
        options={mainInfoOpts}
        title={"Доходы"}
        transType="incomes"
        btnTitle="Add"
        handleClick={handleOpenTransaction}
      />
      <MainInfo options={balanceOpts} title={"Баланс"} btnTitle="..." />
      <Section>
        <Button title="Все расходы" />
        <Button title="Все доходы" />
      </Section>
    </>
  );
};

export default MainPage;
