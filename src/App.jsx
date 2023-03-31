import { useState, useRef, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Image, Layer, Stage } from 'react-konva';
import useImage from 'use-image';

function selectTool(tool) {
  switch (tool) {
    case 'Select': return <div>Select</div>;
    case 'Crop': return <div>Crop</div>;
    case 'Resize': return <div>Resize</div>;
    default: return <div>Select a tool</div>
  }
}

function Tool({ toolName , onClick, children}) {
  return (
    <>
    <button className='tool' onClick={() => onClick(toolName)}>{children}</button>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [tool, setTool] = useState('Select a tool');
  const [image, imageStatus] = useImage("/src/assets/cube.jpg");
  const [viewportDimensions, setViewportDimensions] = useState({ width: 0, height: 0 });

  const viewportRef = useRef(null);

  useEffect(() => {
    const { width, height } = viewportRef.current.getBoundingClientRect();
    setViewportDimensions({ width, height });
  }, []);

  const handleResize = () => {
    const { width, height } = viewportRef.current.getBoundingClientRect();
    setViewportDimensions({ width, height });
  }

  const handleToolClick = (toolName) =>   {
    console.log(toolName);
    setTool(toolName);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div className="App">
      <header>
        <div className="dimensions">Dimensions {imageStatus === 'loaded' && (<span>{image.width} x {image.height}</span>)}</div>
        <div className='name'>Image Editor</div>
        <div className='share-section'>
          <button>Share</button>
          <button>Download</button>
        </div>
      </header>
      <main>
        {/* <a href="https://dribbble.com/shots/20268513-Collaborative-Photo-Editing-Software-UI">helo</a> */}
        <div className="toolbar">
          <Tool toolName='blur' onClick={handleToolClick} >Blur</Tool>
          <Tool toolName='crop' onClick={handleToolClick}>Crop</Tool>
          <Tool toolName='resize' onClick={handleToolClick}>Resize</Tool>
        </div>
        <div className="viewport" ref={viewportRef}>
          {imageStatus === 'loaded' && (
            <Stage width={viewportDimensions.width} height={viewportDimensions.height}>
              <Layer>
                <Image
                  image={image}
                  x={viewportDimensions.width / 2 - image.width / 2}
                  y={viewportDimensions.height / 2 - image.height / 2}
                />
              </Layer>
            </Stage>
          )}
        </div>
        <div className="tool-settings">
          <div className='tool-name'>{tool.slice(0, 1).toUpperCase() + tool.slice(1)}</div>
        </div>
      </main>
    </div>
  )
}

export default App
