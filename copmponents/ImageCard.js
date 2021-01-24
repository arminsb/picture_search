import React from 'react';



class ImageCard extends React.Component {
    
    constructor(props){
        super(props);
        this.imageRef=React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan);
    }

    setSpan =()=>{
        console.log(this.imageRef.current.clientHeight);
    }
    
    render() {
        const { alt_description , urls} = this.props.image;
        return (
            <>
            <img
            ref={this.imageRef}
            alt={alt_description}
            src={urls.small}
            />
            </>
        );
    }
}

export default ImageCard;