var React = require('react');
var ReactDOM = require('react-dom');

//Presentational
var GreeterMessage = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
        <p>{this.props.message}</p>
      </div>
    )
  }
});

//Input
var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value
    if (name.length > 0){
        updates.name = name;
        this.refs.name.value = null;
    };
    if (message.length > 0){
      updates.message = message;
      this.refs.message.value = null;
    }
    this.props.onNewData(updates);
  },
  render: function(){
    return (
      <form onSubmit={this.onFormSubmit}>
      <div>
        <input type="text" ref="name" placeholder="Enter Name"/>
      </div>
      <div>
        <textarea rows="3" cols="40" ref="message" placeholder="Enter message"></textarea>
      </div>
      <button>Submit</button>
      </form>
    )
  }
});

//Container
var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name: "React",
      message: "This is from a component"
    }
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    }
  },
  handleNewData: function(updates){
    this.setState(updates);
  },
  render: function(){
    return (
      <div>
          <GreeterMessage name={this.state.name} message={this.state.message}/>
          <GreeterForm onNewData={this.handleNewData} />
      </div>
    );
  }
});

// Call it
ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
