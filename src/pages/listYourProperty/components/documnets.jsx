import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDropzone } from 'react-dropzone';
import img_file from "../../../images/File.webp"

function Documents({ nextStep }) {
  const { t } = useTranslation();

  const [files, setFiles] = useState([]); // State to hold the uploaded files

  const onSubmit = (data) => {
    localStorage.setItem('documents', JSON.stringify(files));
    nextStep(4);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles, ...acceptedFiles]); // Add new files to the state
      console.log(acceptedFiles); // Optional: You can log or process the files
    },
    multiple: true,
    accept: '.jpg,.jpeg,.png,.pdf', // Allowed file types
  });
   useEffect(()=>{
          if(localStorage.hasOwnProperty("documents")){
              setFiles(JSON.parse(localStorage.getItem("documents")))
  
          }
      },[])
  return (
    <div className="w-full">
      <div className="">
        <div>
          <div className="pb-2 label-title">
            {t('documents')}
          </div>
          <div
            {...getRootProps()}
            className='text-center dropzone p-10 w-full cursor-pointer'
          >
            <div className='flex justify-center'>
                <img alt='file' src={img_file} />
            </div>
            <input {...getInputProps()} />
            <p>{t("drop-files")}</p>
          </div>
        </div>
      </div>

      {/* Display uploaded files */}
      {files.length > 0 && (
        <div className="py-2">
           <div className="pb-2 label-title">
            {t('files')}
          </div>
          <ul>
            {files.map((file) => (
              <li key={file.name}>
                <strong>{file.name}</strong> ({file.size} bytes)
              </li>
            ))}
          </ul>
        </div>
      )}

       <div className=' py-2 grid grid-cols-1 sm:grid-cols-2 gap-2'>
            <div><button onClick={()=>{
                localStorage.removeItem("documents")
                nextStep(2)}} type="submit" className='btn-grey p-5 !w-full'>{t("back")}</button></div>
            <div><button onClick={onSubmit} className='btn-main p-5 !w-full'>{t("next")}</button></div>
        </div>
    </div>
  );
}
export default Documents