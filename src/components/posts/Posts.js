import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Pinwheel from '../pinwheel/Pinwheel';
import PostsItem from './PostsItem';
import PostForm from './PostForm';

const Posts = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return loading ? (
    <Pinwheel />
  ) : (
    <Fragment>
      <h1 className='large text-primary'>Community Vents</h1>
      <p>
        <i className='fas fa-users' /> Welcome to the community vents! Please be
        kind...
      </p>
      <br />
      <PostForm />
      <div className='posts'>
        {posts.map(post => (
          <PostsItem key={post._id} post={post} />
        ))}
      </div>
    </Fragment>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
