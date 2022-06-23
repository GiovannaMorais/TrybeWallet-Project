import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveExpensesInState } from '../actions';

class Form extends React.Component {
  state = {
    value: 0,
    description: '',
    currency: 'USD',
    method: 'Dinheiro',
    tag: 'Alimentação',
  };

  handleClick = async () => {
    const { saveExpenses, expenses } = this.props;
    const { value, description, currency, method, tag } = this.state;
    const ExchangeRates = await fetch('https://economia.awesomeapi.com.br/json/all')
      .then((result) => result.json());
    this.setState({
      id: !expenses.length ? 0 : expenses.length,
      value,
      description,
      currency,
      method,
      tag,
      exchangeRates: ExchangeRates,
    });
    saveExpenses(this.state);
    this.setState({
      value: 0,
    });
  }

  handleChange =({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  render() {
    const { currency, tag, description, method, value } = this.state;
    const { currencies } = this.props;
    return (
      <form>
        <label htmlFor="valor">
          Valor:
          <input
            id="valor"
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
        <button
          type="reset"
          onClick={ this.handleClick }
        >
          Adicionar despesa
        </button>
      </form>
    );
  }
}
const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveExpenses: (state) => dispatch(saveExpensesInState(state)),
});

Form.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  saveExpenses: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
