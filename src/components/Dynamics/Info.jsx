import React, { useEffect, useState } from "react";
import styles from "./Info.module.scss";
import { useDropzone } from "react-dropzone";
import { postImage } from "redux/dynamics/dynamicsOperations";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { selectorStatePlan } from "redux/plan/planSelectors";
import { 
    selectDynamics,
    selectStatByYear, 
    selectAccumToOneMoreMeters,
    selectAccumulatedProc,
    selectAccumulatedUah,
    selectFlatImage, 
    selectMonth,
    selectSquareMeters,
    selectYear, 
 } from "redux/dynamics/dynamicsVariables";
 import { OutsideClicker } from "./OutsideKlicker";

const baseStyle = {
    width: '100%',
    height: '100%',
    // flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
    // const dynamics = useSelector(selectDynamics);
    // const accumToOneMoreMeters  = useSelector(selectAccumToOneMoreMeters);
    const accumulatedProc = useSelector(selectAccumulatedProc);
    const accumulatedUah = useSelector(selectAccumulatedUah);
    // const flatImage = useSelector(selectFlatImage);
    const month = useSelector(selectMonth);
    const squareMeters = useSelector(selectSquareMeters);
    const year = useSelector(selectYear);
    const plan = useSelector(selectorStatePlan);
    const {
        acceptedFiles,
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
    let [trigger, setTrigger] = useState(true);
    const dispatch = useDispatch();
    const file = acceptedFiles;

    useEffect(()=>{
    // console.log('dynamics', dynamics);

        // console.log('useEffect acceptedFile', acceptedFiles)
        if(file.length > 0) {
            console.log('useEffect', acceptedFiles);
            // postImage()
            // console.log('useEffect acceptedFile', acceptedFiles)
            const formData = new FormData();
            formData.append('image', acceptedFiles[0]);

            console.log('form data',formData);
            dispatch(postImage(formData));
        }
    },[acceptedFiles, file.length, dispatch, trigger]);  

    const style = useMemo(() => ({
        ...baseStyle,
    //   ...(isFocused ? focusedStyle : {}),
    //   ...(isDragAccept ? acceptStyle : {}),
    //   ...(isDragReject ? rejectStyle : {})
    }),[]);
    //  [
    //   isFocused,
    //   isDragAccept,
    //   isDragReject
    // ]);

    function percentage(){
        return `${(squareMeters / plan.footage * 100)}%`;
    }

    return (
        <>
        <div className={styles.infoContainer}>
            <div className={styles.accumulated}>
                <p className={styles.title}>After {year} years {month} month</p>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <p className={styles.text}>Accumulated, %:</p>
                        <p className={styles.num}>{accumulatedProc}</p>
                    </li>
                    <li className={styles.item}>
                        <p className={styles.text}>Accumulated, UAH:</p>
                        <p className={styles.num}>{accumulatedUah} &#8372;</p>
                    </li>
                    <li className={styles.item}>
                        <p className={styles.text}>And This:</p>
                        <p className={styles.num}>{squareMeters} sq.m</p>
                    </li>
                </ul>

                <p className={styles.barTitle}>{squareMeters} out of {plan.footage} sq.m accumulated</p>
                <div className={styles.bar}>
                    <div className={styles.barFill} style={{width: percentage()}}></div>
                </div>
            </div>
            <OutsideClicker trigger={trigger} setTrigger={setTrigger}>
                {trigger ? (
                    <div className={styles.imageContainer} onClick={()=> setTrigger(false)}>
                        <p>Photo</p>
                    </div>
                ) : (
                    <div className={styles.imageContainer}>
                        <div {...getRootProps({style})}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                            <em>(Only *.jpeg and *.png images will be accepted)</em>
                        </div>
                    </div>
                )}
            </OutsideClicker>
            {/* <div className={styles.imageContainer}>
                <div {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    <em>(Only *.jpeg and *.png images will be accepted)</em>
                </div>
            </div> */}

        </div>
        <div className={styles.accRemain}>
            <div className={styles.accTitleContainer}>
                <p className={styles.accTitle}>To add more <span className={styles.accSpan}>1 sq.m</span> for planning, it remains to accumulate</p>
                <p className={styles.accNum}>14 000 &#8372;</p>
            </div>
            <div className={styles.svgContainer}>
                {/* <svg className={style.svg} >
                    <use xlinkHref={`${icon}`}/>
                </svg> */}
            </div>
        </div>
    </>
    )
}  