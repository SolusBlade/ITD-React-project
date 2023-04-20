import React, { useEffect } from "react";
import style from "./Info.module.scss";
import {useDropzone} from "react-dropzone";
import { postImage } from "redux/dynamics/dynamicsOperations";
import { useDispatch } from "react-redux";
import { useMemo } from "react";

const baseStyle = {
    width: '90%',
    height: '90%',
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: 'grey',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
};

export const Info = (props) => {
    const {
        acceptedFiles,
        fileRejections,
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: {
          'image/jpeg': [],
          'image/png': []
        },
        // getFilesFromEvent: event => myCustomFileGetter(event)
        // getFilesFromEvent: event => testFiles(event)
    });
    const dispatch = useDispatch();
    const file = acceptedFiles;

    useEffect(()=>{
        if(file.length > 0) {
            console.log('useEffect', file)
            // postImage()
            dispatch(postImage(file));
        }
    })  
    //   function testFiles (event) {
    //     console.log('testFiles ', event)
    //     // console.log('files',files)
    //   }

    console.log('accepted file ', file)
      const acceptedFileItems = acceptedFiles.map(file => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
        </li>
      ));
    
      const fileRejectionItems = fileRejections.map(({ file, errors }) => (
        <li key={file.path}>
          {file.path} - {file.size} bytes
          <ul>
            {errors.map(e => (
              <li key={e.code}>{e.message}</li>
            ))}
          </ul>
        </li>
      ));


    const dropzoneStyle = useMemo(() => ({
      ...baseStyle,
    //   ...(isFocused ? focusedStyle : {}),
    //   ...(isDragAccept ? acceptStyle : {}),
    //   ...(isDragReject ? rejectStyle : {})
    }),[])
    //  [
    //   isFocused,
    //   isDragAccept,
    //   isDragReject
    // ]);

    return <div className={style.infoContainer}>
        <div className={style.accumulated}>
            <p className={style.title}>After 4 years 1 month</p>
            <ul className={style.list}>
                <li className={style.item}>
                    <p className={style.text}>Accumulated, %:</p>
                    <p className={style.num}>28%</p>
                </li>
                <li className={style.item}>
                    <p className={style.text}>Accumulated, UAH:</p>
                    <p className={style.num}>60 000 &#8372;</p>
                </li>
                <li className={style.item}>
                    <p className={style.text}>Add This:</p>
                    <p className={style.num}>22 sq.m</p>
                </li>
            </ul>

            <p className={style.barTitle}>22 out of 60 sq.m accumulated</p>
            <div className={style.bar}>
                <div className={style.barFill}></div>
            </div>
        </div>

        <div className={style.image}>
            <div {...getRootProps(dropzoneStyle)}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
        </div>
        
        <aside>
            <h4>Accepted files</h4>
            <ul>{acceptedFileItems}</ul>
            <h4>Rejected files</h4>
            <ul>{fileRejectionItems}</ul>
        </aside>

        <div className={style.accRemain}>
            <p className={style.accTitle}>To add more <span className={style.accSpan}>1 sq.m</span> for planning, it remains to accumulate</p>
            <p className={style.accNum}>14 000 &#8372;</p>

            <div className={style.svgContainer}>
                <p>svg</p>
            </div>
        </div>

    </div>
}