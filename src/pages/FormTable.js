import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { RemoveExpenseInState,
} from '../actions';

class FormTable extends React.Component {
  deleteExpenses = ({ target: { name } }) => {
    const { deleteExp } = this.props;
    deleteExp(name);
  }

  render() {
    // console.log('props', this.props);
    const { expenses } = this.props;
    // console.log('expenses local', expenses);
    // console.log('expenses', expenses.length);

    return (
      <section>
        {' '}
        <table>
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
            {expenses.map((expense) => (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{ Number(expense.value).toFixed(2) }</td>
                <td>{ expense.exchangeRates[expense.currency].name.split('/')[0] }</td>
                <td>
                  { Number(expense.exchangeRates[expense.currency].ask)
                    .toFixed(2) }

                </td>
                <td>
                  { Number(expense.exchangeRates[expense.currency].ask
                    * expense.value).toFixed(2) }
                </td>
                <td>Real</td>
                <td>
                  <button
                    type="button"
                    data-testid="edit-btn"
                  >
                    Editar
                  </button>
                  <button
                    type="button"
                    data-testid="delete-btn"
                    name={ expense.id }
                    onClick={ this.deleteExpenses }
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
