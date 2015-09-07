var React = require('react');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var ImageStore = require('../stores/imagestore');
var Image = require('./image');

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],

  render: function() {
    if (!this.state.imagestore) {
      return (<Row></Row>);
    }
    return (
      <Row>
        {this.state.imagestore.map(function (image) {
          return <Image image={image}></Image>
        })}
      </Row>
    );
  }
});

module.exports = ImageGrid;
