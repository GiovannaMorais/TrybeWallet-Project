import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormTable extends React.Component {
  render() {
    console.log('props', this.props);
    const { expenses } = this.props;
    return (
      <div>
        <thead>
          <table>
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
          </table>
        </thead>
        <tbody>
          {expenses.map(({
            tag,
            currency,
            exchangeRates,
            description,
            method,
            value,
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
            </tr>
          ))}
        </tbody>
        wallet
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});
FormTable.propTypes = {
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps)(FormTable);
