import React ,{ useEffect, useState } from 'react'
import Editor from "./Editor";
import useLocalStorage from './useLocalStorage';
function App() {

  const [html, setHtml] = useLocalStorage('html','');
  const [css, setCss] =useLocalStorage('css','');
  const [javascript, setJavascript] = useLocalStorage('javascript','');
  const [srcDoc, setSrcDoc] = useState("");

  useEffect (() => {
    const timeout = setTimeout(() =>{
      setSrcDoc(`
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${javascript}</script>
    </html>
  `)
    }, 250 );
    return () => clearTimeout(timeout)
  },[html,css,javascript])
  return (
    <>
        <div className='pane top-pane'>
          <Editor 
            displayName="HTML"
            language="html"
            value={html}
            onChange={setHtml}
          />
          <Editor 
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
          />
          <Editor 
            displayName="JS"
            language="javascript"
            value={javascript}
            onChange={setJavascript}
          />
        </div>
        <div className='pane bg'>
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
          />
        </div>
    </>
  )
}

export default App;
