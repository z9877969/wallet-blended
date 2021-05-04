import moment from "moment";
import Button from "../_share/Button/Button";
import LableInput from "../_share/LableInput/LableInput";
import Section from "../_share/Section/Section";
import getTransOpts from "../../assets/options/transactionsOpts";
import { Component } from "react";
import CategoriesList from "../CategoriesList/CategoriesList";
import { Route } from "react-router";

class TransactionPage extends Component {
  state = {
    date: moment().format("YYYY-MM-DD"),
    time: moment().format("HH:mm"),
    category: "Еда",
    sum: "",
    currency: "RUB",
    comment: "",
    isCategoryList: false,
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const { history, match } = this.props;
    history.push(`${match.url}/categories`);
    this.handleToggleCatList();
  };

  handleToggleCatList = () => {
    this.setState((prev) => ({ isCategoryList: !prev.isCategoryList }));
  };

  handleGoBack = () => {
    this.props.history.push("/");
  };

  render() {
    const {
      match: { params, path },
    } = this.props;

    const title = params.transType === "incomes" ? "Доходы" : "Расходы";
    return (
      <>
        {!this.state.isCategoryList && (
          <Section>
            <form>
              <Button title="GoBack" cbOnClick={this.handleGoBack} />
              <h2>{title}</h2>
              <Button title="Ok" type="submit" />
              <ul>
                {getTransOpts({
                  cbOnChange: this.handleChange,
                  cbOnClick: this.handleClick,
                  values: this.state,
                }).map((option) => (
                  <li key={option.name}>
                    <LableInput {...option} />
                  </li>
                ))}
              </ul>
            </form>
          </Section>
        )}
        <Route
          path={`${path}/categories`}
          render={(props) => (
            <CategoriesList
              {...props}
              transType={params.transType}
              handleChange={this.handleChange}
              onToggle={this.handleToggleCatList}
            />
          )}
        />
      </>
    );
  }
}

export default TransactionPage;