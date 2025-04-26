import { useNavigate } from 'react-router-dom';
import './ButtonBack.scss';

export const ButtonBack = ({className = ''}: {className: string}) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className={`cart__back-button ${className}`} onClick={handleGoBack} >
      &lt; Back
    </button>
  );
};
