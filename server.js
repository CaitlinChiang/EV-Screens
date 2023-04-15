const app = require("express")();
const http = require("http").Server(app);
const Camera = require("raspberry-pi-camera-stream");

const camera = new Camera({
  width: 800,
  height: 480,
  fps: 10,
  encoding: "JPEG",
  quality: 70,
});

app.get("/video_feed", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "multipart/x-mixed-replace; boundary=--myboundary",
    Connection: "keep-alive",
    Expires: "-1",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
  });

  camera.pipe(res);
});

http.listen(5000, () => {
  console.log("Server running on port 5000");
});