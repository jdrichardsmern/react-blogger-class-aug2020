import React from 'react';
import BlogItem from './BlogItem';
import searchIt from '../services/searchIt';

const Blogs = (props) => {
  return (
    <div style={{ marginLeft: '100px', width: '100%' }}>
      <h2>Blogs</h2>

      {props.blogs.filter(searchIt(props.searchTerm)).map((blog) => {
        return (
          <BlogItem
            key={blog.objectId}
            blog={blog}
            onDelete={props.onDelete}
            onUpdate={props.onUpdate}
          />
        );
      })}
    </div>
  );
};
export default Blogs;
