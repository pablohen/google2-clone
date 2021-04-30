import Image from 'next/image';
import React from 'react';

const Avatar = ({ url, className }) => {
  return (
    <Image
      src={url}
      alt="profile pic"
      width={48}
      height={48}
      className={`rounded-full w-10 h-10 cursor-pointer transition duration-150 transform hover:scale-150 ${className}`}
    />
  );
};

export default Avatar;
