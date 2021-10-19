import React, { useCallback } from 'react';
import {useDropzone} from 'react-dropzone'

const FileUploader = ({setReaderData}) => {

  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        setReaderData(reader.result)
      }
    }
    reader.readAsDataURL(acceptedFiles[0])
  }, [setReaderData])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
  return <div {...getRootProps()}>
  <input {...getInputProps()} />
  {
    isDragActive ?
      <p>Lower your PFP into the loading bay.</p> :
      <p>Drop your PFP here or click to upload.</p>
  }
  </div>
}

export default FileUploader
