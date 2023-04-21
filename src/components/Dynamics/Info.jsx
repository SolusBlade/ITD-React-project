import React, { useEffect } from "react";
import styles from "./Info.module.scss";
import {useDropzone} from "react-dropzone";
import { postImage } from "redux/dynamics/dynamicsOperations";
import { useDispatch } from "react-redux";
import { useMemo } from "react";
import icon from "../../assets/icons/icons.svg";
import favicon from "../../assets/icons/favicon.svg";
// $dark-blue: #191D28;
// $blue: #3A6AF5;
// $purple: #6359E9;
// $white: #F3F3F3;
// $transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
// $dark-gray: #242424;
// $light-gray: rgba(255, 255, 255, 0.2);

const baseStyle = {
    width: '90%',
    height: '90%',
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // justifycontent: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 10,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderStyle: 'dashed',
    backgroundColor: 'rgba(110, 110, 110, 0.2)',
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
            console.log('useEffect', acceptedFiles)
            // postImage()
            const formData = new FormData();
            formData.append('image', acceptedFiles[0]);
            console.log(formData);
            dispatch(postImage(formData));
        }
    })  
    //   function testFiles (event) {
    //     console.log('testFiles ', event)
    //     // console.log('files',files)
    //   }

    // console.log('accepted file ', file)
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


    const style = useMemo(() => ({
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

    return <div className={styles.infoContainer}>
        <div className={styles.accumulated}>
            <p className={styles.title}>After 4 years 1 month</p>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <p className={styles.text}>Accumulated, %:</p>
                    <p className={styles.num}>28%</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.text}>Accumulated, UAH:</p>
                    <p className={styles.num}>60 000 &#8372;</p>
                </li>
                <li className={styles.item}>
                    <p className={styles.text}>Add This:</p>
                    <p className={styles.num}>22 sq.m</p>
                </li>
            </ul>

            <p className={styles.barTitle}>22 out of 60 sq.m accumulated</p>
            <div className={styles.bar}>
                <div className={styles.barFill}></div>
            </div>
        </div>

        <div className={styles.imageContainer}>
            <div {...getRootProps({style})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
                <em>(Only *.jpeg and *.png images will be accepted)</em>
            </div>
        </div>

        <div className={styles.accRemain}>
            <p className={styles.accTitle}>To add more <span className={styles.accSpan}>1 sq.m</span> for planning, it remains to accumulate</p>
            <p className={styles.accNum}>14 000 &#8372;</p>

            <div className={styles.svgContainer}>
                {/* <svg className={style.svg} >
                    <use xlinkHref={`${icon}`}/>
                </svg> */}
            </div>
        </div>

    </div>
}