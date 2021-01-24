import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {


    state = { images: [] };


    async onSearchsubmit(term) {
        const { data } = await unsplash.get('/search/photos', {
            params: {
                query: term
            }
        });
        this.setState({ images: data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchsubmit.bind(this)} />
                {this.state.images.length > 0 && `Found: ${this.state.images.length}`}
                <br/>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

//functional based component
// const App=()=>{
//     return(
//         <div className="ui container" style={{marginTop:'10px'}}>
//             <SearchBar />
//         </div>
//     );
// }

export default App;