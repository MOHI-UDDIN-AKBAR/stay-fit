import React from "react";
import { useAllAboutGymExercise } from "../../contexts/Context";
import "./ExerciseFromYoutube.css";
import Loader from "../../components/Loader/Loader";
const ExerciseFromYoutube = ({ currentExerciseName }) => {
  const { exerciseFromYoutube } = useAllAboutGymExercise();
  console.log(exerciseFromYoutube);
  if (!ExerciseFromYoutube.length) {
    return <Loader />;
  }
  return (
    <div className="exerciseFromYoutube">
      <div className="heading">
        <h1>
          Watch <span>{currentExerciseName}</span> exercise video
        </h1>
      </div>
      <div className="allExerciseFromYoutube">
        {exerciseFromYoutube.contents?.slice(0, 4).map((eachVideo, index) => {
          return (
            <a
              href={`https://www.youtube.com/watch?v=${eachVideo.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              key={index}
            >
              <div className="image">
                <img
                  src={eachVideo.video.thumbnails[0].url}
                  alt={eachVideo.video.title}
                  loading="lazy"
                />
              </div>
              <div className="titleAndChannelName">
                <span>{eachVideo.video.title}</span>
                <small>{eachVideo.video.channelName}</small>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ExerciseFromYoutube;
