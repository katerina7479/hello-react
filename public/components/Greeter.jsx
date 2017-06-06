var React = require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');

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

module.exports = Greeter
