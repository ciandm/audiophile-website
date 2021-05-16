import React from 'react';
import ResponsiveImage from '../shared/ResponsiveImage/ResponsiveImage';
import styles from './Gallery.module.scss';

function Gallery({ images, name }) {
  return (
    <section className={styles.section}>
      <div className={styles.gallery}>
        {Object.values(images).map((i, index) => (
          <div className={styles.galleryImage} key={index}>
            <ResponsiveImage
              src={i.desktop.replace('./', '/')}
              alt={`Gallery image for ${name}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
