import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import Button from "@/atoms/Button";
import WebcamStatus from "@/components/WebCame/WebcamStatus";

const WeCamePage = () => {
  const webcamRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [hasPermission, setHasPermission] = useState(true);

  const handleStop = () => {
    setIsRunning(false);
    setErrorMsg('')
    closeWebcam()
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleForceRestart = () => {
    handleStop()
    setTimeout(() => {
      setIsRunning(true);
    }, 100);
  };

  const videoConstraints = {
    facingMode: "user",
    width: 1280,
    height: 720
  };

  const handleError = (error) => {
    setErrorMsg(`Error: ${error.message}`);
    setIsRunning(false);
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(() => {
        setHasPermission(true);
      })
      .catch(() => {
        setHasPermission(false);
      });
  }, []);
  const closeWebcam = () => {
    if (webcamRef.current) {
      const videoTrack = webcamRef.current.stream.getVideoTracks()[0];
      if (videoTrack) {
        videoTrack.stop();
      }
    }
  };
  useEffect(() => {
    window.addEventListener("beforeunload", closeWebcam);
    return () => {
      window.removeEventListener("beforeunload", closeWebcam);
    };
  }, []);
  
 
  
  return (
    <div className="flex flex-col justify-center items-center bg-red-100 bg-opacity-[0.2] h-screen m-2 md:m-0 h-full pb-10 pt-10">
      {!hasPermission && (
        <p className="text-lg text-[#4FD785] mb-5">
          Please allow camera access to test web cam.
        </p>
      )}
      <div className="flex flex-col md:flex-row  w-full"  >
        <div className="flex justify-center items-center md:w-4/6  ">
          <div className="flex justify-center items-center bg-black w-full md:w-2/3 border-4 border-[#4FBFD7]  h-[500px]">
    
                {isRunning ? (
                  <Webcam
                    className="p-10  "
                    audio={false}
                    mirrored={true}
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    ref={webcamRef}
                    onUserMediaError={handleError}
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-400 border-2  border-gray-100 " />
                )}
          </div>
        </div>
        <WebcamStatus webcamRef={webcamRef}  isRunning={isRunning}/>

      </div>
      
      {errorMsg && (
        <p className="text-red-500 text-sm mt-3">{errorMsg}</p>
      )}
        <div className="flex flex-rows mt-4">
          <Button
            type="largeAlternate"
            className="text-white w-20 bg-primary-main mr-3"
            onClick={isRunning ? handleStop : handleStart}
          >
            {isRunning ? "Stop" : "Start"}
          </Button>
          <Button
            type="largeAlternate"
            className="text-white w-20 bg-red-500 "
            onClick={handleForceRestart}
          >
            Restart
          </Button>
        </div>
    </div>
  );
};

export default WeCamePage;
