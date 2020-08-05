import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import CreateBlog from './CreateBlog';
import Blogs from './Blogs';
import blogs from '../data/data';

class App extends Component {
  state = { blogs, searchTerm: '' };

  onDelete = (id) => {
    const updatedBlog = this.state.blogs.filter((item) => item.objectId !== id);

    this.setState({
      blogs: updatedBlog
    });
    console.log(`Delete ${id}`);
  };

  onUpdate = (id) => {
    console.log(`Update ${id}`);
  };

  handleChange = (event) => {
    this.setState(
      {
        searchTerm: event.target.value
      },
      () => {
        console.log(this.state.searchTerm);
      }
    );
  };

  handleBlogSubmit = (event, blog) => {
    event.preventDefault();
    let updatedBlogs = [blog, ...this.state.blogs];

    this.setState(
      {
        blogs: updatedBlogs
      },
      () => {
        console.log(this.state.blogs);
      }
    );
  };

  render() {
    return (
      <>
        <Header />
        <div
          style={{
            marginTop: '100px',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row'
          }}
        >
          <div style={{ width: '50%' }}>
            <Search
              searchTerm={this.state.searchTerm}
              handleChange={this.handleChange}
            />
            <hr
              style={{
                width: '50%',
                color: 'black',
                margin: '50px auto 20px auto'
              }}
            />
            <CreateBlog handleBlogSubmit={this.handleBlogSubmit} />
          </div>
          <div style={{ width: '50%' }}>
            <Blogs
              searchTerm={this.state.searchTerm}
              blogs={this.state.blogs}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
