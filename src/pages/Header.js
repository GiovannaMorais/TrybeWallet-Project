import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Form from './Form';
import FormTable from './FormTable';
import { EditExpenseForm } from '../actions';

class Header extends React.Component {
  state = {
    id: '',
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
    exchangeRates: {},
  };

    handleChange =({ target: { name, value } }) => {
      this.setState({ [name]: value });
    }

    SaveExpensesEditadas = () => {
      const { expenses, EditedForm, id } = this.props;
      // const { id } = this.state;
      const EditExpensesForm = expenses.filter((expense) => expense.id !== id);
      // console.log('EditExpenseForm', editExpenses);
      const EditedTaskForm = expenses.find((expense) => expense.id === id);
      // console.log('EditedTaskForm', editedTask);

      // const tests = this.state;
      // const state = this.setState({ ...tests, exchangeRates: editedTask.exchangeRates });
      const EditedChange = {
        ...this.state,
        exchangeRates: EditedTaskForm.exchangeRates,
        id,
      };
      EditExpensesForm.push(EditedChange);
      const test = [...EditExpensesForm];
      EditedForm(test.sort((a, b) => a.id - b.id));
    }

    // SaveExpensesEditadas= () => {
    //   const { id, expenses, EditedForm } = this.props;
    //   const EditExpensesForm = expenses.findIndex((expense) => expense.id === id);
    //   const EditedTaskForm = expenses.filter((expense) => expense.id !== id);
    //   const test = {
    //     ...this.state,
    //     exchangeRates: EditExpensesForm,
    //     id,
    //   };
    //   const checkEdit = expenses.map((expense, i) => {
    //     if (i === EditExpensesForm) {
    //       return EditedTaskForm.push(test);
    //     }
    //     return EditedTaskForm;
    //   });
    //   EditedForm(checkEdit);
    // }

    render() {
      const { email, expenses, editor, currencies } = this.props;
      const { currency, tag, description, method, value } = this.state;

      return (
        <div>

          <header>
            <div>
              <p data-testid="email-field">{email}</p>
              <p data-testid="total-field">
                {!expenses ? 0 : expenses.reduce((acc, curr) => {
                  acc += (curr.exchangeRates[curr.currency].ask * curr.value);
                  return acc;
                }, 0).toFixed([2])}
              </p>
              <p data-testid="header-currency-field"> BRL </p>
            </div>
          </header>
          { !editor ? <Form />
            : (
              <form>
                <label htmlFor="valor">
                  Valor:
                  <input
                    id="value"
                    type="text"
                    name="value"
                    data-testid="value-input"
                    value={ value }
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="descricao">
                  Descrição:
                  <input
                    id="descricao"
                    value={ description }
                    type="text"
                    name="description"
                    data-testid="description-input"
                    onChange={ this.handleChange }
                  />
                </label>
                <label htmlFor="moeda">
                  Moeda
                  <select
                    onChange={ this.handleChange }
                    id="moeda"
                    value={ currency }
                    name="currency"
                  >
                    {currencies.map((moeda) => (
                      <option
                        key={ moeda }
                        value={ moeda }
                      >
                        { moeda }
                      </option>)) }
                  </select>
                </label>
                <label htmlFor="payWay">
                  Método de pagamento:
                  <select
                    onChange={ this.handleChange }
                    data-testid="method-input"
                    id="payWay"
                    name="method"
                    value={ method }
                  >
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Cartão de crédito">Cartão de crédito</option>
                    <option value="Cartão de débito">Cartão de débito</option>
                  </select>
                </label>
                <label htmlFor="tags">
                  Tag:
                  <select
                    data-testid="tag-input"
                    onChange={ this.handleChange }
                    name="tag"
                    id="tags"
                    value={ tag }
                  >
                    <option value="Alimentação">Alimentação</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Trabalho">Trabalho</option>
                    <option value="Transporte">Transporte</option>
                    <option value="Saúde">Saúde</option>
                  </select>
                </label>
                <button type="button" onClick={ () => this.SaveExpensesEditadas() }>
                  Editar despesa
                </button>
              </form>

            ) }
          <FormTable />
        </div>
      );
    }
}
const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
  editor: state.wallet.editor,
  currencies: state.wallet.currencies,
  id: state.wallet.idToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  EditedForm: (expenses) => dispatch(EditExpenseForm(expenses)),
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
  editor: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  EditedForm: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
