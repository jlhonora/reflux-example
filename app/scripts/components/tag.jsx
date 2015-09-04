var React = require('react');
var ImageActions = require('../actions/imageactions');

var Tag = React.createClass({
  render: function() {
    return (
        <a className="tag" onClick={this.handleClick} href="#">
          {this.props.name}
        </a>
        );
  },
  handleClick: function() {
    ImageActions.selectTag(this.props.name);
  }
});

module.exports = Tag;
