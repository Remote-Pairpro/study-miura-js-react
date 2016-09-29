var Comment = React.createClass({
  render: function() {
    // マークダウンをHTML化
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    console.log(rawMarkup);
    
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});
