import './Gallery.css';
import Title from '../Title/Title';
import img1 from '../../assets/galleryimg 1.jpg';
import img2 from '../../assets/galleryimg 2.jpg';
import img3 from '../../assets/gallery img 3.jpg';
import img4 from '../../assets/gallery img 4.jpg';
import img5 from '../../assets/gallery img 5.jpg';
import img6 from '../../assets/gallery img 6.jpg';
import img7 from '../../assets/gallery img 7.jpg';
import img8 from '../../assets/gallery img 8.jpg';
import img9 from '../../assets/gallery img 9.jpg';
import img10 from '../../assets/gallery img 10.jpg';
import img11 from '../../assets/gallery img 11.jpg';
import img12 from '../../assets/gallery img 12.jpg'
import { useState } from 'react';

// Array of images and captions
const initialImages = [
  { src: img1, alt: 'Image 1', caption: '' },
  { src: img2, alt: 'Image 2', caption: '' },
  { src: img3, alt: 'Image 3', caption: '' },
  { src: img4, alt: 'Image 4', caption: '' },
  { src: img5, alt: 'Image 5', caption: '' },
  { src: img6, alt: 'Image 6', caption: '' },
];

const moreImages = [
  { src: img7, alt: 'Image 7', caption: '' },
  { src: img8, alt: 'Image 8', caption: '' },
  { src: img9, alt: 'Image 9', caption: '' },
  { src: img10, alt: 'Image 10', caption: '' },
  { src: img11, alt: 'Image 11', caption: '' },
  { src: img12, alt: 'Image 12', caption: '' },

  
];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const [showMore, setShowMore] = useState(true);

  const handleViewMore = () => {
    setImages((prevImages) => [...prevImages, ...moreImages]);
    setShowMore(false); // Hide the button after loading more images
  };

  return (
    <div className='gallery-box'>
      
    <div className="gallery-container">
      <div className="title-text">
        <Title subTitle="Team Revanta" title="Gallery" />
      </div>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image.src} alt={image.alt} className="gallery-image" />
           {/* <p className="gallery-caption">{image.caption}</p> */}
          </div>
        ))}
      </div>
      {showMore && (
        <button className="view-more-btn" onClick={handleViewMore}>
          View More
        </button>
      )}
    </div>
    </div>
   
  );
};

export default Gallery;
