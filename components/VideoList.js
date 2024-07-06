import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/video');
        setVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };
    fetchVideos();
  }, []);

  return (
    <div>
      {/* <h2>Uploaded Videos</h2> */}
      <ul>
        {videos.map((video) => (
          <li key={video._id}>
            {/* <div>{video.description}</div> */}
            <video controls width="100%" height="500">
              <source src={`http://localhost:8080/${video.filename}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default VideoList;
