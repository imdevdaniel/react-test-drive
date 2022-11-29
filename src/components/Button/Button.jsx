import { useState } from 'react';
import './Button.css';

export function Button(properties) {
  const [btnType, setBtnType] = useState('primary');

  const handleBtnTypeChange = () => {
    if (btnType === 'primary') setBtnType('secondary')
    else setBtnType('primary')
  };

  return (
    <button
      className={`btn ${ btnType === 'primary' ? 'btn-primary' : 'btn-secondary' }`}
      onClick={handleBtnTypeChange}
      >
      { btnType === 'primary' ? `Enviar` : `Cancelar` }
    </button>
  );
}
