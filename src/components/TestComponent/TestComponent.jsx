import './TestComponent.css';
import { Button } from '../Button/Button';

export function TestComponent() {
  return (
    <div>
      <h1 className='main-text'>Hola Mundo!</h1>
      <Button title="Test One" primary="true" helper="Help text" other="none"/>
    </div>
  );
}
