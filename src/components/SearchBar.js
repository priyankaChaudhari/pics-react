import React from 'react';

class SearchBar extends React.Component {
    onInputChange(event) {
        console.log("s---", event.target.value);
    }
    onInputClick(){
        console.log("input was clicked");
    }

    state = { term: 'Hi there!'};

    onFormSubmit(event) {
        event.preventDefault();
        console.log(this.state.term)
        this.props.onSubmit(this.state.term);
    }
    render() {

        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={(e) =>this.onFormSubmit(e)}>
                    <div class="field">
                    <label>Image Search</label>
                        <input type="text" onClick={this.onInputClick}
                         value={this.state.term} 
                         onChange={(e) =>{this.setState({term:e.target.value})}}  />
                    </div>  
                </form>
            </div>
        );
    }
}

export default SearchBar;