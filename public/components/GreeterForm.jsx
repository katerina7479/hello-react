var React = require('react');
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

module.exports = GreeterForm;
