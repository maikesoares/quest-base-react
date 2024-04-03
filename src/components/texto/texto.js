import './texto.css';
import PropTypes from 'prop-types';

const Texto = ({ color, transform }) => {
  return (
    <p className="text" style={{ color: color, textTransform: transform }}>
      Este é um parágrafo
    </p>
  );
};

Texto.propTypes = {
  color: PropTypes.string,
  transform: PropTypes.string,
};

Texto.defaultProps = {
  color: 'red',
  transform: 'uppercase',
};

export default Texto;
