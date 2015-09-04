var React = require('react');
var Button = require('react-bootstrap').Button;
var Well = require('react-bootstrap').Well;
var ImageGrid = require('./imagegrid');
var ImageActions = require('../actions/imageactions');

var Home = React.createClass({

  render: function() {
    return (
      <div className="container">
        <Well>
          <Button bsStyle='primary' onClick={ImageActions.fetchList}>Refresh</Button>
          </Well>
        <Well>
          <ImageGrid></ImageGrid>
        </Well>
      </div>
    );
  }
});

module.exports = Home;
