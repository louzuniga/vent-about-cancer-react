import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Pinwheel from '../pinwheel/Pinwheel';
import PostsItem from '../posts/PostsItem';
import { getPost } from '../../actions/post';

const Post = ({ getPost, post: { post, loading }, match }) => {
  useEffect(() => {
    getPost(match.params.id);
  });

  return loading || post === null ? (
    <Pinwheel />
  ) : (
    <Fragment>
      <PostsItem post={post} showActions={false} />
    </Fragment>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPost }
)(Post);
