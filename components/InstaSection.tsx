import React, { Component } from 'react'
import { InstaPost, getInstaPosts } from '../services/instagram'
// import { MoonLoader } from 'react-spinners'
import styles from './InstaSection.module.scss'

interface InstaSectionState {
  posts: InstaPost[]
}

export default class InstaSection extends Component<{}, InstaSectionState> {
  state = { posts: [] }

  async componentDidMount() {
    let posts = await getInstaPosts()
    this.setState({ posts })
  }

  render() {
    let elements: JSX.Element[] = []
    const { posts } = this.state
    if (posts.length === 0) {
      for (var i = 0; i < 10; i++) {
        elements.push(<InstaImageLoader key={i} />)
      }
    } else {
      elements = posts.map((post: InstaPost) => <InstaImage key={post.media_url} {...post} />)
    }
    return <div className={styles.wrapper}> {elements} </div>
  }
}

const InstaImage = ({ caption, media_url, permalink }: InstaPost) => (
  <div className={styles.instaImageContainer} onClick={() => window.open(permalink)}>
    <img className={styles.image} src={media_url} />
    <div className={styles.imageInfo}>
      <p>{caption}</p>
    </div>
  </div>
)

const InstaImageLoader = () => (
  <div className={styles.instaImageLoaderContainer}>
    <div className={styles.spinnerContainer}>
      {/* <MoonLoader sizeUnit={'px'} size={50} color={'#123abc'} loading={true} /> */}
    </div>
  </div>
)
