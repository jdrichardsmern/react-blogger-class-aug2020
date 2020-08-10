import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import Search from './Search';
import CreateBlog from './CreateBlog';
import UpdateBlog from './UpdateBlog';
import Blogs from './Blogs';

class App extends Component {
  state = { blogs: [], searchTerm: '', toggle: true, blog: {} };

  onDelete = (id) => {
    // const updatedBlog = this.state.blogs.filter((item) => item.objectId !== id);

    axios.delete(`/remove/${id}`).then(() => {
      this.loadBlogs();
    });
    this.setState({
      toggle: true
    });
  };

  onUpdate = (id) => {
    this.loadSingleBlog(id);
    // console.log(`Update ${id}`);
  };

  loadSingleBlog = (id) => {
    axios.get(`http://localhost:8080/single/${id}`).then((dbBlog) => {
      this.setState({
        toggle: false,
        blog: dbBlog.data
      });
    });
  };

  loadBlogs = () => {
    axios.get('/all').then((dbBlogs) => {
      this.setState({
        blogs: dbBlogs.data
      });
    });
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
    const axiosConfig = {
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*'
      }
    };

    axios.post('/create', blog, axiosConfig).then(() => {
      this.loadBlogs();
    });
  };

  componentDidMount() {
    // axios.get('/all').then((dbBlogs) => {
    //   this.setState({
    //     blogs: dbBlogs.data
    //   });
    // });
    this.loadBlogs();
  }

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
            {this.state.toggle ? (
              <CreateBlog handleBlogSubmit={this.handleBlogSubmit} />
            ) : (
              <UpdateBlog blog={this.state.blog} />
            )}
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
