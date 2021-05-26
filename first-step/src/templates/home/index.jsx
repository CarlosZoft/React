import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/loadPosts'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/textInput/textInput';

export class Home extends Component {
  state = {
    posts: [],
    allposts: [],
    page: 0,
    postsPerPage: 2,
    searchValue: ""
  };

  async componentDidMount() {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allposts: postsAndPhotos
    })
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allposts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allposts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage })
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })
  }

  render() {
    const { posts, page, postsPerPage, allposts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allposts.lenght;

    const filteredPosts = !!searchValue ?
      posts.filter(post => {
        return post.title.toLowerCase()
          .includes(searchValue.toLowerCase());
      })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && (
            <h1>Search Value : {searchValue}</h1>
          )}

          <TextInput
            searchValue={searchValue}
            handleChange={this.handleChange}
          />
        </div>
        {filteredPosts.length > 0 && (
          <Posts posts={filteredPosts} />
        )}
        {!filteredPosts.length && (
          <p>Não existem posts :*(</p>
        )}
        <div className="button-container">
          {!searchValue && (
            <Button
              text="Load More Posts"
              action={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </div>

      </section>
    )
  }

}
