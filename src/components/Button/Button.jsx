import './Button.css';

export function Button(properties) {
  if (properties.primary) {
    return <button className='primary' title={ properties.helper }>{ properties.title || 'Enviar' }</button>;
  } else {
    return <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg" alt="Puppy" />;
  }
}
