// Editor.jsx
import React, { useEffect, useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

export default function Editor({ displayName, value, language, onChange }) {
  const [open, setOpen] = useState(true);
  const [extensions, setExtensions] = useState([]);

  useEffect(() => {
    let isMounted = true;

    async function loadLanguage() {
      if (language === "html") {
        const { html } = await import("@codemirror/lang-html");
        if (isMounted) setExtensions([html()]);
      } else if (language === "css") {
        const { css } = await import("@codemirror/lang-css");
        if (isMounted) setExtensions([css()]);
      } else if (language === "javascript") {
        const { javascript } = await import("@codemirror/lang-javascript");
        if (isMounted) setExtensions([javascript()]);
      }
    }

    loadLanguage();

    return () => {
      isMounted = false;
    };
  }, [language]);

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expend-collapse-button"
          onClick={() => setOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>

      {open && (
        <CodeMirror
          value={value}
          className="code-mirror-wrapper"
          style={{ flexGrow: 1 }}
          extensions={extensions}
          theme="dark"
          onChange={(value, viewUpdate) => onChange(value)}
        />
      )}
    </div>
  );
}
