import React, { Component } from 'react';
import  shared  from './suggestionsapi';

import './typeahead.css';

import Details from './details';

class Typeahead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText:'',
      selectedItem:'',
      typeaheadResults: [],
      addResultsResponse: '',     
      error: null,
      showMessage: false

    }
  }

componentDidMount() {
  this.setState({
      showMessage: false
    });
}

_showMessage = (bool) => {
      this.setState({
        showMessage: bool
    });
  }

  render() {

    return (


      <div className="container">
      

        <h2 className="ui top attached header">SEARCH MOVIES</h2>
  
                    <div className="searchContainer">        
                      
                      <input className="searchBox" type="search" id="typeahead" tabIndex="0"  maxLength={30}
                       value={this.state.searchText} autoComplete="off" onChange={this._handleSearchInput} />
                      
                      &nbsp;&nbsp;<button className="searchButton" disabled={!this.state.searchText} 
                              onClick={this._display}>Get Details</button>

                       &nbsp;&nbsp;<button className="searchButton" disabled={!this.state.searchText} 
                              onClick={this._reset}>Reset</button>
                    </div>
                
                    <div id="typeahead-results" className="typeaheadResults" 
                    style={{ overflow: 'auto', overflowX: 'hidden', overflowY: 'hidden' }} tabIndex="1"  >          
                              {this.state.typeaheadResults.map(result => 
                                  {                
                                    console.log(result)
                                    return this._renderTypeaheadResults(result);
                                  }
                                )
                              }
                    </div>

                    <div id="add-results" className="typeaheadResults" >
                            {this.state.addResultsResponse}
                    </div>

                    { this.state.showMessage && <Details details={this.state.selectedItem}/> }

          </div>

          

         


    );
  }


  _renderTypeaheadResults = result => {
    return (
        
        <div key={result.id}  className="typeaheadItem" onChange={this._updateSearchInput} onMouseEnter={()=>this.onHover(result)}>
             <span tabIndex="2" >{result.title} </span>
        </div>
        
    );
  };
  
  onHover=e=> {   
  console.log('SELECTED ITEM', e) 
    this.setState({searchText: e.title, selectedItem: e});

  }

  _display=e=>{
    this.setState({typeaheadResults:[] , showMessage:true});

  }
  _reset =e=>{
        this.setState({searchText: '', selectedItem: '',typeaheadResults:[] , showMessage:false});


  }
  _handleSearchInput = e => {
    
     if(e.target.value.length<1 || e.target.value.length==0) 
     {
      this.setState({ searchText:'', typeaheadResults:[],addResultsResponse:'', showMessage:false }); 
      return;
    }
    else
    {
      this.setState({searchText: e.target.value});
      
      shared.searchTag(e.target.value)
            .then((response)=>{
              this.setState({ typeaheadResults:response, addResultsResponse:'' })
            })
            .catch(err=>console.error(err))
    }
  }

  _updateSearchInput = e => {  
  console.log('onMouseEnter',e)  
    this.setState({searchText: e.target.value});    
  };

  _getDetails=event => {   
  console.log('onMouseEnter', event) 
    this.setState({searchText: event.title});
  }

  _addEvent = event => {      
    shared.addTag(this.state.searchText)
    .then((response)=>{
      this.setState({typeaheadResults:[],searchText:'', addResultsResponse: response})
    })
    .catch(err=>console.error(err))
  };
}







export default Typeahead;
