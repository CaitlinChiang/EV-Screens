import React, { Component } from 'react'
import '../styles/Camera.css'
import io from 'socket.io-client'

class FrontCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      streamUrl: '',
    };
  }

  componentDidMount() {
    const socket = io.connect('http://10.15.127.246:5000')

    this.setState({ socket })

    socket.on('video_feed', (url) => {
      this.setState({ streamUrl: url })
    })
  }

  componentWillUnmount() {
    const { socket } = this.state

    socket.disconnect()
  }

  render() {
    const { streamUrl } = this.state

    return (
      <div id="front-camera">
        {streamUrl ? (
          <img src={streamUrl} alt="Video Stream" />
        ) : (
          <p>Waiting for video stream...</p>
        )}
      </div> 
    )
  }
}

export default FrontCamera
