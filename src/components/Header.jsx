import React from 'react';
import PropTypes from 'prop-types';

export default function Header({ uploadFile, fileName }) {
  return (
    <header className="header">
      <div className="links-block">
        <a href="static/template.xlsx" className="btn-link" download>Download exel</a>
        <div className="file-wrapper">
          <div className="file-input-wrapper">
            <button type="button" className="btn-link">Upload exel</button>
            <input type="file" className="file" onChange={uploadFile} />
          </div>
          {fileName && <p className="filename-text">{fileName}</p>}
        </div>
      </div>
    </header>
  );
}


Header.propTypes = {
  uploadFile: PropTypes.func.isRequired,
  fileName: PropTypes.string,
};
