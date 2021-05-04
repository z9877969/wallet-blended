export default function getTransactionsOpts({ cbOnChange, values, cbOnClick }) {
  return [
    {
      type: "date",
      name: "date",
      value: values.date,
      title: "Дата",
      cbOnChange,
    },
    {
      type: "time",
      name: "time",
      value: values.time,
      title: "Время",
      cbOnChange,
    },
    {
      type: "button",
      name: "category",
      value: values.category,
      title: "Категория",
      cbOnClick,
    },
    {
      name: "sum",
      value: values.sum,
      title: "Сумма",
      placeholder: "Введите сумму",
      cbOnChange,
    },
    {
      type: "button",
      name: "currency",
      value: values.currency,
      title: "Валюта",
      cbOnClick,
    },
    {
      name: "comment",
      value: values.comment,
      title: "Комментарий",
      placeholder: "Комментарий",
      cbOnChange,
    },
  ];
}
