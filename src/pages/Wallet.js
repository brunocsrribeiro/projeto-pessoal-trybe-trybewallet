import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import SelectOption from '../components/SelectOption';
import Button from '../components/Button';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      valor: '',
      moeda: '',
      metodoDePagamento: '',
      tag: '',
      descricao: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      valor, moeda,
      metodoDePagamento,
      tag, descricao } = this.state;

    const { userEmail } = this.props;

    const methods = ['Dinheiro', 'Cartão de crédito',
      'Cartão de débito'];

    const tags = ['Alimentação', 'Lazer', 'Trabalho',
      'Transporte', 'Saúde'];

    return (
      <div>
        <div>
          <Header
            label="LOGO"
            user={ userEmail }
            labelDespesa={ 0 }
            data-testid="email-field"
          />
        </div>
        <fieldset>
          <Input
            type="number"
            name="valor"
            label="Valor: "
            value={ valor }
            onChange={ this.handleChange }
            dataTestId="value-input"
          />
          <SelectOption
            id="moeda"
            defaultOption="Selecione"
            name="moeda"
            label="Moeda: "
            value={ moeda }
            onChange={ this.handleChange }
            dataTestId="currency-input"
            // options={}
          />
          <SelectOption
            id="pagamento"
            defaultOption="Selecione"
            name="pagamento"
            label="Método de pagamento: "
            value={ metodoDePagamento }
            onChange={ this.handleChange }
            dataTestId="method-input"
            options={ methods }
          />
          <SelectOption
            id="tag"
            defaultOption="Selecione"
            name="tag"
            label="Tag: "
            value={ tag }
            onChange={ this.handleChange }
            dataTestId="tag-input"
            options={ tags }
          />
          <TextArea
            name="descricao"
            label="Descrição: "
            value={ descricao }
            onChange={ this.handleChange }
            maxLength="500"
            dataTestId="description-input"
          />
          <Button
            type=""
            // onClick={}
            label="Adicionar Despesas"
          />
        </fieldset>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string,
};

Wallet.defaultProps = {
  userEmail: '',
};

export default connect(mapStateToProps)(Wallet);
