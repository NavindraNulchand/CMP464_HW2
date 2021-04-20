import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        
        /*
            TODO - set initial state for link name and URL 
        */
       this.state = {
           name: '',
           URL: ''
       }
    }

    handleChangeForName = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       this.setState({name: event.target.value});

    }

    handleChangeForURL = event => {
        /*
            TODO - Logic for changing state based on form changes
        */
       this.setState({URL: event.target.value});

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
                    <input type = "text" value={this.state.linkName} onChange={this.handleChangeForName} />
                </label>
                <label>
                    URL:
                    <input type = "text" value ={this.state.linkURL} onChange={this.handleChangeForURL} /> 
                </label>
                <input type = "submit">

                </input>
            </form>
        )
    
    }
}

export default Form;
