import React, { useEffect, useState, useRef } from "react";
import {Heading, Text} from "@/atoms/index";

const WebcamStatus = ({ isRunning, webcamRef }) => {
  const [settings, setSettings] = useState({
    frameRate: 30,
    aspectRatio: 1.7777777777777777,
    resolution: "1280 x 720",
    brightness: 0,
    saturation: 64
  });

  useEffect(() => {
    const captureSettings = () => {
      const videoTrack = webcamRef.current?.stream?.getVideoTracks()[0];
      const currentSettings = videoTrack?.getSettings();
      if (currentSettings) {
        setSettings({
          frameRate: currentSettings.frameRate,
          aspectRatio: currentSettings.aspectRatio,
          resolution: `${currentSettings.width} x ${currentSettings.height}`,
          brightness: currentSettings.brightness,
          saturation: currentSettings.saturation
        });
      }
    };

    const timerId = setInterval(() => {
      captureSettings();
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, [webcamRef]);

  return (
    <div className=" rounded-lg p-4 bg-gray-300 md:h-[500px] md:w-[300px] border-2 m-10 md:m-0"
    style={{ backgroundColor: 'rgba(196, 118, 241, 0.06)', borderColor: '#C476F1'}}
    >
      <Heading type='h2' className='mb-3 mt-4 text-[#C476F1]' >{'Webcam Status'}</Heading>

      <div className="mt-3">
       
        <Text type='bodyStyleDefault'>
             Webcam is {isRunning ? "running" : "not running"}

        </Text>

        {isRunning && (
          <div>
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <div className="w-1/3">
                  <Text type='bodyStyleDefault'>Frame Rate:</Text>
                </div>
                <div className="w-2/3">
                  <Text type='bodyStyleDefault'>{settings.frameRate} fps</Text>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-1/3">
                  <Text type='bodyStyleDefault'>Webcam Resolution:</Text>
                </div>
                <div className="w-2/3">
                  <Text type='bodyStyleDefault'>{settings.resolution}</Text>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-1/3">
                  <Text type='bodyStyleDefault'>Aspect Ratio:</Text>
                </div>
                <div className="w-2/3">
                  <Text type='bodyStyleDefault'>{settings.aspectRatio}</Text>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-1/3">
                  <Text type='bodyStyleDefault'>Brightness:</Text>
                </div>
                <div className="w-2/3">
                  <Text type='bodyStyleDefault'>{settings.brightness}</Text>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <div className="w-1/3">
                  <Text type='bodyStyleDefault'>Saturation:</Text>
                </div>
                <div className="w-2/3">
                  <Text type='bodyStyleDefault'>{settings.saturation}</Text>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WebcamStatus;
