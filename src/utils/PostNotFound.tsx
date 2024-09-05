import Image from 'next/image';
import React from 'react';

type Props = {};

const PostNotFound = (props: Props) => {
  return (
    <div style={styles.container}>
      <Image 
        width={300} 
        height={300} 
        src="/assets/images/404/3.png" 
        alt="404" 
        style={{ display: 'block' }}
        objectFit="contain" 
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  },
};

export default PostNotFound;