import './index.css';
import PropTypes from 'prop-types';

const Texto = ({ color, transform }) => {
  return (
    <p className="text" style={{ color: color, textTransform: transform }}>
      Este é um parágrafo Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </p>
  );
};

Texto.propTypes = {
  color: PropTypes.string,
  transform: PropTypes.string,
};

Texto.defaultProps = {
  color: '#ffffff',
  transform: 'uppercase',
};

export default Texto;
