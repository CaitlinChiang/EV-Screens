import React, { Component } from 'react'
import '../styles/Camera.css'

class FrontCamera extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videoUrl: null
    }
  }

  componentDidMount() {
    fetch('http://10.15.127.246:5000/video')
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob)
        this.setState({ videoUrl: url })
      })
  }

  render() {
    const { videoUrl } = this.state

    return (
      <div id="front-camera">
        {videoUrl && (
          <video controls>
            <source src={videoUrl} type="application/x-mpegURL" />
          </video>
        )}
      </div> 
    )
  }
}

export default FrontCamera
