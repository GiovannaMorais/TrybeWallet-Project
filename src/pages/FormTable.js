import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RemoveExpenseInState,
} from '../actions';

class FormTable extends React.Component {
  deleteExpenses = (id) => {
    const { deleteExp } = this.props;
    deleteExp(id);
  }

  render() {
    // console.log('props', this.props);
    const { expenses } = this.props;
    console.log('expenses local', expenses);
    console.log('expenses', expenses.length);

    return (
      <section>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map(({
            tag,
            currency,
            exchangeRates,
            description,
            method,
            value, id,
          }, index) => (
            <tr key={ index }>
              <td>{description}</td>
              <td>{tag}</td>
              <td>{method}</td>
              <td>{ Number(value).toFixed(2) }</td>
              <td>{ exchangeRates[currency].name.split('/')[0] }</td>
              <td>{ Number(exchangeRates[currency].ask).toFixed(2) }</td>
              <td>
                { Number(exchangeRates[currency].ask * value).toFixed(2) }
              </td>
              <td>Real</td>
              <td>
                <button
                  type="button"
                  data-testid="delete-btn"
                  onClick={ () => this.deleteExpenses(id) }
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </section>

    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  deleteExp: (id) => dispatch(RemoveExpenseInState(id)),
});
FormTable.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
  deleteExp: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FormTable);
