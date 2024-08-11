import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';

interface ImageLoaderProps {
  src: string;
  alt?: string;
  className?: string;
  circle?: boolean;
  height?: string;
  width?: string;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  alt = 'Image',
  className,
  circle = false,
  height = '100%',
  width = '100%',
}) => {
  const [loaded, setLoaded] = useState(false);

  const onLoad = () => {
    setLoaded(true);
  };

  return (
    <>
      {!loaded && (
        <Skeleton
          circle={circle}
          height={height}
          width={width}
          className={`${className}`}
        />
      )}
      <img
        alt={alt}
        className={`${className || ''} ${loaded ? 'is-img-loaded' : 'is-img-loading'}`}
        onLoad={onLoad}
        style={{ display: !loaded ? 'none' : undefined }}
        src={src}
      />
    </>
  );
};

ImageLoader.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
  circle: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
};

export default ImageLoader;