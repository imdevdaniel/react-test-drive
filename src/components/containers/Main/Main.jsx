import { useState } from 'react';
import { Panel } from '../../Panel/Panel';
import './Main.css';

export function Main() {
  const serviceData = [
    {
      uid: '00001',
      title: 'Título 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta quibusdam, atque vel tenetur delectus corrupti veniam minus cum id ullam. Qui, sed quis omnis perferendis nulla magnam veniam magni!'
    },
    {
      uid: '00002',
      title: 'Título 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta quibusdam, atque vel tenetur delectus corrupti veniam minus cum id ullam. Qui, sed quis omnis perferendis nulla magnam veniam magni!'
    },
    {
      uid: '00003',
      title: 'Título 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta quibusdam, atque vel tenetur delectus corrupti veniam minus cum id ullam. Qui, sed quis omnis perferendis nulla magnam veniam magni!'
    },
    {
      uid: '00004',
      title: 'Título 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta quibusdam, atque vel tenetur delectus corrupti veniam minus cum id ullam. Qui, sed quis omnis perferendis nulla magnam veniam magni!'
    },
    {
      uid: '00005',
      title: 'Título 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta quibusdam, atque vel tenetur delectus corrupti veniam minus cum id ullam. Qui, sed quis omnis perferendis nulla magnam veniam magni!'
    },
    {
      uid: '00006',
      title: 'Título 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta quibusdam, atque vel tenetur delectus corrupti veniam minus cum id ullam. Qui, sed quis omnis perferendis nulla magnam veniam magni!'
    },
    {
      uid: '00007',
      title: 'Título 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta quibusdam, atque vel tenetur delectus corrupti veniam minus cum id ullam. Qui, sed quis omnis perferendis nulla magnam veniam magni!'
    }
  ];

  const [mainData, setMainData] = useState(serviceData);

  const handleNewData = (newData) => {
    console.log('UPSTREAM DATA:', newData);

    const newState = [ ...mainData ];

    newState.find((element) => element.uid === newData.uid).title = newData.title;

    console.log(newState);

    setMainData(newState);
  };

  return (
    <div className='main-container'>
      { mainData.map((data) => {
        return <Panel
          key={data.uid}
          componentData={data}
          onDataChange={handleNewData}/>
      }) }
    </div>
  );
}
