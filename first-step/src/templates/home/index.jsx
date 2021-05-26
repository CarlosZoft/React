import './styles.css';
import { Component } from 'react';
import { loadPosts } from '../../utils/loadPosts'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';

export class Home extends Component {
  state = {
    posts: [],
    allposts: [],
    page: 0,
    postsPerPage: 2
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
    //console.log("Load More Posts");
    const {
      page,
      postsPerPage,
      allposts,
      posts
    } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allposts.slice(nextPage, nextPage + postsPerPage);

    posts.push(...nextPosts);
    //console.log(posts)
    this.setState({ posts, page: nextPage })
  }
  render() {
    const { posts, page, postsPerPage, allposts } = this.state;
    const noMorePosts = page + postsPerPage >= allposts.lenght;
    return (
      <section className="container">
        <Posts posts={posts} />
        <div className="button-container">
          <Button
            text="Load More Posts"
            action={this.loadMorePosts}
            disabled={noMorePosts}
          />
        </div>

      </section>
    )
  }

}
