import React, { useState, useRef } from 'react';
import Cropper from "react-cropper";
import clsx from 'clsx';


import FileUploader from '../components/FileUploader'
import "cropperjs/dist/cropper.css";
import "../styles/pages/_uploader.scss"
import DefaultTokePFP from '../../static/assets/images/Ghost_SCR_Head1.png'


const Uploader = () => {
  const [readerData, setReaderData] = useState(null)
  const [cropData, setCropData] = useState("#")
  const [cropper, setCropper] = useState()
  const cropperRef = useRef(null);

  const onCrop = () => {
    // const imageElement = cropperRef?.current;
    // const cropper = imageElement?.cropper;
    // console.log(cropper.getCroppedCanvas().toDataURL());
  };

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return <div className={"uploadPageContainer"}>
    <div className="leftColumn">
      <span>Image Loading Bay</span>
    <div className={clsx(readerData ? "cropperContainer" : "defaultCropperContainer")}>
    {readerData && <Cropper
      src={readerData}
      // Cropper.js options
      initialAspectRatio={16 / 9}
      preview=".img-preview"
        guides={false}
        viewMode={1}
      crop={onCrop}
      ref={cropperRef}
      background={true}
      minCropBoxHeight={100}
      minCropBoxWidth={100}
      onInitialized={(instance) => {
        setCropper(instance);
      }}
          zoomable={false}
          className={"cropper"}
      />}

    </div>
    <div className={"bottomPreviewContainer"}>
      <div className={"imageContainer"}>
        <span>Preview</span>
        {readerData ? <div className="img-preview" /> : <div className={"placeHolderBox"} />}
      </div>
      <div className={"imageContainer"}>
        <span>Crop</span>
        <div className={"cropImageContainer"}>
           <img alt="PreviewPFP" src={cropData !== "#" ? cropData : DefaultTokePFP} className={"cropDataContainer"} />
        </div>
      </div>
    </div>
    <div>
      </div>
    </div>
    <div className={"rightColumn"}>
      <div className={"controlPanelContainer"}>
        <FileUploader setReaderData={setReaderData} />
        {readerData && <button className={clsx("cropButton", "button")} onClick={getCropData}>Crop Image</button>}
        <button className={clsx("nextButton", "button")}>Finalize Pilot License</button>
      </div>
    </div>
  </div>

 }

 export default Uploader
