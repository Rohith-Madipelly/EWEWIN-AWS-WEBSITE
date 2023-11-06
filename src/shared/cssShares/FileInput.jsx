import React from 'react';
import './csspart.css'
const FileInput = () => {
  return (
    <div class="file-input">
      <input
        type="file"
        name="file-input"
        id="file-input"
        class="file-input__input"
      />
      <label class="file-input__label" for="file-input">
        <span>Upload file</span>
        </label>
    </div>
  );
};

export default FileInput;
