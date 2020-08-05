import React from 'react';
import Button from './Button';

const BlogItem = (props) => {
  const { title, author, subject, article, objectId } = props.blog;
  return (
    <div className='ui card' style={{ width: '75%', padding: '20px' }}>
      <div className='content'>
        <div className='header'>{title}</div>
        <br />
        <div className='meta'>Author: {author}</div>
        <br />
        <div className='meta'>Subject: {subject}</div>
        <hr />
        <div className='description'>{article}</div>
      </div>
      <div>
        <Button
          className='ui primary button'
          onClick={() => {
            props.onDelete(objectId);
          }}
          value='Delete'
        />
        <Button
          className='ui green button'
          onClick={() => {
            props.onUpdate(objectId);
          }}
          value='Update'
        />
      </div>
    </div>
  );
};
export default BlogItem;
