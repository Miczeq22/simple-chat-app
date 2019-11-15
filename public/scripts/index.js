navigator.getUserMedia(
  { video: true, audio: true },
  stream => {
    const localVideo = document.getElementById("local-video");
    if (localVideo) {
      localVideo.srcObject = stream;
    }
  },
  error => {
    console.warn(error.message);
  }
);
