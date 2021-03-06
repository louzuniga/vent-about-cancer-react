import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { addLove, unLove, deletePost } from '../../actions/post';

const PostsItem = ({
  addLove,
  unLove,
  deletePost,
  auth,
  post: { _id, text, name, love, user, comments, date },
  showActions
}) => (
  <div className='post bg-white p-1 my-1'>
    <div>
      <Link to={`/profile/${user}`}>
        <h4>{name}</h4>
      </Link>
    </div>
    <div>
      <p className='my-1'>{text}</p>
      <p className='post-date'>
        Posted on <Moment format='MM/DD/YYYY'>{date}</Moment>
      </p>

      {showActions && (
        <Fragment>
          <button
            onClick={e => addLove(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='fas fa-heart' />{' '}
            <span>{love.length > 0 && <span>{love.length}</span>}</span>
          </button>

          <button
            onClick={e => unLove(_id)}
            type='button'
            className='btn btn-light'
          >
            <i className='far fa-heart' />
          </button>

          {!auth.loading && user === auth.user._id && (
            <button
              onClick={e => deletePost(_id)}
              type='button'
              className='btn btn-danger'
            >
              <i className='fas fa-times' />
            </button>
          )}
        </Fragment>
      )}
    </div>
  </div>
);

PostsItem.defaultProps = {
  showActions: true
};

PostsItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLove: PropTypes.func.isRequired,
  unLove: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { addLove, unLove, deletePost }
)(PostsItem);
