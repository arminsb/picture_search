import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };
    
    onFormSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                
                <form onSubmit={this.onFormSubmit.bind(this)}>
                    <div className='ui form'>
                        <div className='ui field'>
                            <label>Image Search</label>
                            <input
                                value={this.state.term}
                                type='text'
                                onChange={e => this.setState({ term: e.target.value })} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;