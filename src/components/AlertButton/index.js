import './index.css';
import PropTypes from 'prop-types';

const Button = ({ label }) => {
  return (
    <button
      className="btn"
      onClick={() => {
        alert(`A label deste botão é '${label}'`);
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
  label: 'React',
};

export default Button;
