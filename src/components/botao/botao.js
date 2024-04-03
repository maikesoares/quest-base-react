import './botao.css';
import PropTypes from 'prop-types';

const showLabel = (label) => {
  alert(`A label desse botão é '${label}'`);
};

const Button = ({ label }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        showLabel(label);
      }}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
};

Button.defaultProps = {
  label: 'ReactNative',
};

export default Button;
