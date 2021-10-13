import React, { useState, useRef } from 'react';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import "../styles/pages/_uploader.scss"
import DefaultTokePFP from '../../static/assets/images/panda_space_marine.jpeg'

const Uploader = () => {
  const [readerData, setReaderData] = useState(null)
  const [cropData, setCropData] = useState("#")
  const [cropper, setCropper] = useState()
  const cropperRef = useRef(null);

  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    // console.log(cropper.getCroppedCanvas().toDataURL());
  };

  const imageHandler = (e) => {
    const reader = new FileReader()

    reader.onload = () => {
      if (reader.readyState === 2) {
        setReaderData(reader.result)
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
  };

  return <div className={"uploadPageContainer"}>
    <div className={"cropperContainer"}>
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
    />}
    </div>
    <div className={"controlPanelContainer"}>
      <input type="file" name="image-upload" id="input" accept="image/*" onChange={(e) => {
    imageHandler(e)
      }} />
      {readerData && <button className={"cropButton"} onClick={getCropData}>Crop Image</button>}
    </div>
    <div className={"bottomPreviewContainer"}>
      <div className={"imageContainer"}>
        <span>Preview</span>
        {readerData ? <div className="img-preview" /> : <div className={"placeHolderBox"} />}
      </div>
      <div className={"imageContainer"}>
        <span>Crop</span>
        {cropData !== "#" ? <img alt="PreviewPFP" src={cropData !== "#" ? cropData : DefaultTokePFP} className={"cropDataContainer"} /> : <div className={"placeHolderBox"} />}
      </div>
    </div>
    <div>
      <button>Finalize Pilot License</button>
    </div>
  </div>

 }

 export default Uploader
