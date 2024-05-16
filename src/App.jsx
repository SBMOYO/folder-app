import { useState } from 'react';

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="song.mp3"/>
          <File name="dance.mp3"/>
        </Folder>
        <File name="dog.jpeg"/>
        <File name="cat.png"/>

      </Folder>
      <Folder name="Documents"/>
      <Folder name="Downloads"/>

    </div>
  )
}

function Folder(props){
  const [isOpen, setIsOpen] = useState(false);
  const { name, children } = props;
  const direction = isOpen ? "down" : "right";

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return <div>
      <span onClick={handleClick}>
        <i className="blue folder icon"></i>
        <i className={`caret ${direction} icon` }></i>
      </span>
      {name}
      <div style={{marginLeft: "17px"}}>
        {isOpen ? children : null}
      </div>
    </div>
};

const File = (props) => {
  const { name } = props;
  const fileExtention = name.split(".")[1];
  const fileIcons = { 
    mp3: 'headphones',
    jpeg: 'file image',
    png: 'file image outline'
  }
  return (
    <div>
      <i className={`${fileIcons[fileExtention]} icon` }></i>
      {name}
    </div>
  );
}
export default App
