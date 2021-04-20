import React from 'react';
import Form from './Form';
import Table from './Table';

class LinkContainer extends React.Component {
    constructor(props){
        super(props)
        /* TODO - Create state object for storing favLinks */
        this.state = {
            favLinks: [{name:"Nav", URL: "github.com"}] //example
        }
    }

    removeCharacter = index => { // here is where i get an error
        /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
            let array = this.state.favLinks; 
        //    array.indexOf(this.state.favLinks)
            if (index !== -1) {
              array.splice(index, 1);
              this.setState({favLinks: array});
            }
    }

    handleSubmit = favLink => {
        /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
       this.setState({
           favLinks: this.state.favLinks.concat([favLink])
       });
    }

    render() {

        return (
            <div className="container">
                <h1>My Favorite Links</h1>
                <p>Add a new url with a name and link to the table.</p>
                {/*TODO - Add Table Component */}
                <Table favLinks={this.state.favLinks} deleteData ={this.removeCharacter}/>
                <br/>

                <h3>Add New</h3>
                {/*TODO - Add Form Component */}
                <Form onFormSubmit={this.onFormSubmit} />
            </div>
        );
    }
}

export default LinkContainer;