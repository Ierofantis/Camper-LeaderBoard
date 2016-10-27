var Box = React.createClass({
  render: function() {
    var Entries = this.props.entries;

    function createTasks(item) {      
      return <div className="wrap">
    <div className="s1_3">
      <div className="in"><li key={item.key} ><h1>{item.text}</h1><p>{item.texts} </p></li>
    </div>
        </div>
           </div>
    }

    var listItems = Entries.map(createTasks);

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
});

var List = React.createClass({
  getInitialState: function() {
    return {
      items: [],
      recipe: []
    };
  },
  addItem: function(e) {
    var itemArray = this.state.items;
    itemArray.push({
      text: this._inputElement.value, 
      texts: this._inputElement2.value,
      key: Date.now(),
    });

    this.setState({
      items: itemArray
    });

    this._inputElement.value = "";
    this._inputElement2.value = "";   
    e.preventDefault();
  },
  render: function() {
    return (
      <div className="List">
          <div className="header">
             <form onSubmit={this.addItem}>
             <input ref={(a) => this._inputElement = a}
                        placeholder="Add food">
              </input>               
               <input ref={(b) => this._inputElement2 = b}
                        placeholder="sugar,salt,chocolate etc">
              </input>              
              <button type="submit">add</button>
            </form>            
          </div>
  
          <Box className="items" entries={this.state.items}/>

        </div>
    );
  }
});

ReactDOM.render(
  <List />,
  document.getElementById('container')
);