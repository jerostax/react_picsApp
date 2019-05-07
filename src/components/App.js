import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  async onSearchSubmit(term) {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 3678a4c4dfd11bd29d20c2d0aa2db5210bd140c2a8e7f7a6149c427266750539'
      }
    });
    console.log(response.data.results);
  }

  render() { 
    return (
      <div className="ui container" style={{marginTop: '50px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
