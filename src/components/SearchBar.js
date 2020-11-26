import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    state= {
        term: ''
    };
    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);
        // TODO: Make sure we call callback from parent component
    };



    render(){
        return(
             <div className="search-bar ui segment searchsize">
                 <form onSubmit={this.onFormSubmit} className="ui form">
                     <div className="field">
                         <label className="search-label">Video Search</label>
                         <input 
                         value={this.state.term}
                          type="text"
                          onChange={this.onInputChange}
                          />
                     </div>
                 </form>
             </div>
             );
    }
}

export default SearchBar;