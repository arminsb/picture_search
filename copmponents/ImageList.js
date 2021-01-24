import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';
let showersult = (props) => {
    console.log(props.images);
    const photos = props.images.map(Image => {
        return <ImageCard image={Image} key={Image.id} />
    });

    return (
        <div className='image-list'>
            {photos}
        </div>
    );
}

export default showersult;