import React, { useState } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompressAlt, faExpandAlt } from '@fortawesome/free-solid-svg-icons'


export default function Editor({ displayName, value, language, onChange }) {

const [open, setOpen] = useState(true);

const getLang = () => {
if (language === 'html') return html();
if (language === 'css') return css();
if (language === 'javascript') return javascript();
return [];
};



return (
<div className={`editor-container ${open? '' : 'collapsed'}`}>
    <div className="editor-title">
        {displayName}
        <button type='button' className='expend-collapse-button' onClick={() => setOpen(prevOpen => !prevOpen)}>
            < FontAwesomeIcon icon={ open ? faCompressAlt : faExpandAlt }/>
        </button>
    </div>

    <CodeMirror
    value={value}
    
    className='code-mirror-wrapper'
    style={{ flexGrow: 1 }}
    extensions={[getLang()]}
    theme="dark"
    onChange={onChange}
    ></CodeMirror>
    
</div>
);
}
