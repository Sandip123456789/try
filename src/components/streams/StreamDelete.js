import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    console.log(this.props);
  }

  // onSubmit = () => {
  //   this.props.deleteStream(this.props.match.params.id);
  // };

  //** helper function for actions button */
  renderActions() {
    const { id } = this.props.match.params;
    // const id = this.props.match.params.id
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(id)}
          className="ui green ok inverted button"
        >
          <i className="checkmark icon" />
          Delete
        </button>
        <Link to="/" className="ui red cancel inverted button">
          <i className="remove icon" />
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  //** helper function to show delete content with title */
  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure want to delete this Stream?';
    }
    return `Are you sure want to delete Stream with title - ${this.props.stream.title}`;
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
