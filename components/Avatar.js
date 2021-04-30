import React from 'react';

const Avatar = ({ url, className }) => {
  return (
    <img
      loading="lazy"
      src={url}
      alt="profile pic"
      width="460px"
      height="460px"
      className={`rounded-full w-10 h-10 cursor-pointer transition duration-150 transform hover:scale-150 ${className}`}
    />
  );
};

export default Avatar;
