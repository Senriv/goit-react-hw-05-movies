import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ btnName, onClick }) => {
  return (
    <Btn onClick={onClick} type="button">
      {btnName}
    </Btn>
  );
};

export default Button;

Button.propTypes = {
  btnName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
