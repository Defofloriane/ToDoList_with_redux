import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class AddTache extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    state = {  
        title:"",
        description: "",
       
    }
    add = (e) =>{
       
         e.preventDefault();
         if(this.state.title === "" || this.state.description=== "" ){
             alert("Please enter the value")
             return;
         }
         //envoyer les donnees au app
         this.props.addTacheHandler(this.state);
         //reinitialiser les champs
        this.setState({ title:"", description:"" });
         window.location.href = "http://localhost:3000"
        // this.props.history.push("/");
        // this.props.history.go(0);
     };
    render() { 
        return ( 
        <div>
           <form className="ui form" onSubmit={this.add}>
           <div className="field">
               <label>title</label>
                <input type="text" name="title" placeholder="title"
                value={this.state.title}
                onChange={(e) => this.setState({title: e.target.value})}/>
               </div>
               <div className="field">
               <label>description</label>
                <textarea
                   name="description" 
                   placeholder="description"
                   value={this.state.name}
                   onChange={(e) => this.setState({description: e.target.value})}/>
                
               </div>
         
                  <button>Add</button>
                 <Link to='/'>
                
            <button  > back </button>
           </Link>
          
           </form>
        </div> 
        );
    }
}
 
export default AddTache;