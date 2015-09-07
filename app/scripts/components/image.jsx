var React = require('react');
var Col = require('react-bootstrap').Col;
var Tag = require('./tag');

var Image = React.createClass({
  render: function() {
    var image = this.props.image;
    var tags = image.tags.split(' ').map(function (tag) {
      return (
        <Tag name={tag}>
        </Tag>
      );
    });
    return (<Col xs={6} sm={4} lg={3} md={3}>
      <a href={ image.link }>
        <img className="img-responsive flickr-thumbnail" src={ image.media.m }></img>
      </a>
      <p>{ image.title }</p>
      <p className="tag-wrap">
        { tags }
      </p>
    </Col>);
  }
});

module.exports = Image;
