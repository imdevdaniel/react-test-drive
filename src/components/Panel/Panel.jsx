import './Panel.css';

export function Panel(props) {
  const cData = { ...props.componentData };

  cData.title = `Título ${cData.uid}`;

  return (
    <div className='panel'>
      <h3>{ props.componentData.title }</h3>
      <p>{ props.componentData.content }</p>
      <button onClick={() => props.onDataChange(cData)}>Cambiar</button>
    </div>
  );
}
