import React from 'react';

import './typeahead.css';

class Hello extends React.Component {

	//const _tableColumnHeaders=["Title","Original Language", "Popularity", "Release Date", "Video", "Vote Average", "Vote Count"];

	

    render() {
    return (
      <div>

        <h2 className="ui top attached header">SELECTED MOVIE DETAILS</h2>
        
        <table className='details'>
               
                 
                 <tbody>
                 <tr className='header'>
                  
                  		   <td>	TITLE</td>
                           <td>	ORIGINAL LANGUAGE	</td>
                           <td>	POPULARITY	</td>
                           <td>	RELEASE DATE	</td>
                           <td>	VOTE AVERAGE	</td>
                           <td>	VOTE COUNT	</td>

                 
                  </tr>
                  <tr>
                  		   <td>	{this.props.details['title']}	</td>
                           <td>	{this.props.details['original_language']}	</td>
                           <td>	{this.props.details['popularity']}	</td>
                           <td>	{this.props.details['release_date']}	</td>
                           <td>	{this.props.details['vote_average']}	</td>
                           <td>	{this.props.details['vote_count']}	</td>

                  </tr>
                 
               </tbody>
            </table>
  
      </div>
    )
  }
}

export default Hello;