var React = require('react');
var Reflux = require('reflux');
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var ImageStore = require('../stores/imagestore');
var Tag = require('./tag');

var ImageGrid = React.createClass({
  mixins: [Reflux.connect(ImageStore, 'imagestore')],

  render: function() {
    if (!this.state.imagestore) {
      return (<Row></Row>);
    }
    return (
        <Row>
        {this.state.imagestore.map(function (image) {
            // TODO: Create proper image class
            var tags = image.tags.split(' ').map(function (tag) {
              return (
                  <Tag name={tag}>
                  </Tag>
              );
            });
            return (
              <Col xs={6} sm={4} lg={3} md={3}>
                <a href={ image.link }>
                  <img className="img-responsive flickr-thumbnail" src={ image.media.m }></img>
                </a>
                <p>{ image.title }</p>
                <p className="tag-wrap">
                  { tags }
                </p>
              </Col>);
          })}
        </Row>
      );
  }
});

module.exports = ImageGrid;
