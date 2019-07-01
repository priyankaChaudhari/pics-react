import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {spans: 0};
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
        console.log(this.imageRef, "imageref");
        console.log(this.imageRef.current.clientHeight, "i!!!!!!!!!!mageref");
    }

    setSpans = () => {
         console.log(this.imageRef.current.clientHeight,"ssssssss");
         const height = this.imageRef.current.clientHeight;
         const spans = Math.ceil(height / 10);
         this.setState({spans})
    };
    render() {
        const { discription, urls} = this.props.image;
        console.log(discription, "sdfgdd", urls)
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
                <img ref={this.imageRef } alt= {discription}
                src={urls.regular}
                 />
            </div>
        );
    }
}
export default ImageCard;