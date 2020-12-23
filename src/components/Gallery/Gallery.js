import React from 'react';
import axios from 'axios';
import './gallery.module.css';
//import { BrowserRouter, Link } from 'react-router-dom';
import Request from 'axios-react';

class Gallery extends React.Component {
    
    state = {
        images: []
    };

    // Demo = () => (
    //     <Request
    //         config={{
    //             method: 'get',
    //             url: 'https://boiling-refuge-66454.herokuapp.com/images',
    //         }}
    //     >
    //         {({ loading, response, error, refetch, networkStatus }) => (
    //             <div>
    //                 {networkStatus && <span>{networkStatus}</span>}
    //                 {loading && <span>Loading...</span>}
    //                 {error && <span>{error.response.data}</span>}
    //                 {response && <h3>{response.data.title}</h3>}
    //                 <button onClick={refetch}>Refetch!</button>
    //             </div>
    //         )}
    //         {
            
            
    //         }
    //     </Request>
    // );

    componentDidMount() {
        axios.get(`https://boiling-refuge-66454.herokuapp.com/images`)
            .then(res => {
                const images = res.data;
                this.setState({ images });
            }
        )
    };


    render() {
        return (
            <section className="Desktop-row_1">
                { this.state.images.map(img => 
                <img src={img.url} id={img.id} 
                onClick={this.handleOpenModal} className="Desktop-img" 
                alt="Rectangle 1" />)}
            </section>
        )
    }
};

export default Gallery;