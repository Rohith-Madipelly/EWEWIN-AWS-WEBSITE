import React, { useState } from 'react';
import './Upload.css'

import { FaCamera } from "react-icons/fa";
const ProfilePictureUpload = () => {
    const [ProfileimageSrc, setImageSrc] = useState('https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
      // Use a regular expression to check if the input is a number
      const newValue = e.target.value.replace(/[^0-9]/g, '');
      
      // Update the state only if the new value is a number
      setInputValue(newValue);
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            console.error("Reader >", reader)

            reader.onload = (event) => {
                setImageSrc(event.target.result);
            };

            reader.readAsDataURL(file);
        }
    };

    const handleUploadButtonClick = () => {
        document.getElementById('fileInput').click();
        // This will open the file manager to select the pic for input >>type >file
    };

    return (

        // Profile Section 
        <div className='Pic-Section'>

            <div className="circle">
                <img className="profile-pic" src={ProfileimageSrc} alt="Profile" onClick={handleUploadButtonClick} />
            </div>

            <div className="p-image">
                <FaCamera className="upload-button" onClick={handleUploadButtonClick} />
                <input
                    id="fileInput"
                    className="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                />
            </div>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-IydJHxxQuo?si=KiKHtdhuEwvmg7cI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        
            <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Enter numbers only"
    />
        </div>
    );
};

export default ProfilePictureUpload;
