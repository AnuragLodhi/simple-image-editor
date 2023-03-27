import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function selectTool(tool) {
  switch (tool) {
    case 'Select': return <div>Select</div>;
    case 'Crop': return <div>Crop</div>;
    case 'Resize': return <div>Resize</div>;
    default: return <div>Select a tool</div>
  }
}

function App() {
  const [count, setCount] = useState(0)
  const [tool, setTool] = useState('jdu');

  return (
    <div className="App">
      <header>
        <div className="dimensions">Dimensions <span>100 x 200</span></div>
        <div className='name'>Image Editor</div>
        <div className='share-section'>
          <button>Share</button>
          <button>Download</button>
        </div>
      </header>
      <main>
        {/* <a href="https://dribbble.com/shots/20268513-Collaborative-Photo-Editing-Software-UI">helo</a> */}
        <div className="toolbar"></div>
        <div className="viewport"></div>
        <div className="tool-settings">
          <div className='tool-name'>{tool}</div>
          {selectTool(tool)}
        </div>
      </main>
    </div>
  )
}

export default App
