import React, { Component } from 'react'
import '../styles/Camera.css'
import ReactPlayer from "react-player"

class FrontCamera extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     socket: null,
  //     streamUrl: '',
  //   };
  // }

  // componentDidMount() {
  //   this.interval = setInterval(() => {
  //     fetch('http://10.15.127.246:5000/video_feed')
  //       .then(response => {
  //         if (!response.ok) {
  //           throw new Error('Network response was not ok')
  //         }
  //         return response.blob()
  //       })
  //       .then(blob => {
  //         this.setState({ imageSrc: URL.createObjectURL(blob) })
  //       })
  //       .catch(error => {
  //         console.error('Error fetching video feed:', error)
  //       })
  //   }, 100)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.interval)
  // }

  render() {
    return (
      <div id="front-camera">
        <ReactPlayer
          url="http://localhost:5000/video_feed"
          playing={true}
          loop={true}
          width="100%"
          height="auto"
        />
      </div> 
    )
  }
}

export default FrontCamera
