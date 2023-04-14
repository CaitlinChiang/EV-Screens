const video = this.videoRef.current;
    const streamUrl = 'http://<YOUR_RPI_SERVER_IP_ADDRESS>:5000/video_feed';

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          video.srcObject = stream;
          video.play();
        })
        .catch((error) => {
          console.error('Error accessing media devices.', error);
        });
    } else {
      video.src = streamUrl;
      video.play();
    }