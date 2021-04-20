import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 
        */
       this.state = {
           linkName: '',
           linkURL: ''
       }
       this.handleChange = this.handleChange.bind(this);
       this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleChange = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       this.setState({value: event.target.value});
    }

    onFormSubmit = (event) => {
        // to prevent page reload on form submit
        event.preventDefault();
        
        /*
            TODO - Logic for calling props to handle submission and setting state changes
        */
       this.props.onFormSubmit(
          this.state 
       )

    }

    render() {

        return(
            <form onSubmit={this.onFormSubmit}>
                {/* TODO - Logic for returning a form element with labels and inputs for link name and URL */}
                <label>
                    Link Name:
                    <input type = "text" value={this.state.linkName} onChange={this.handleChange} />
                </label>
                <label>
                    URL:
                    <input type = "text" value ={this.state.linkURL} onChange={this.handleChange} /> 
                </label>
            </form>
        )
    
    }
}

export default Form;
