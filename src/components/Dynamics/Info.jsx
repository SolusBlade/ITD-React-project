import React, { useEffect, useState } from "react";
import styles from "./Info.module.scss";
import { useDropzone } from "react-dropzone";
import { postImage } from "redux/dynamics/dynamicsOperations";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { selectorIsPlanFootage, selectorStatePlan } from "redux/plan/planSelectors";
import { 
    selectAccumulatedProc,
    selectAccumulatedUah,
    selectFlatImage, 
    selectMonth,
    selectSquareMeters,
    selectYear,
    selectorOneMoreMeterCost, 
 } from "redux/dynamics/dynamicsVariables";
 import { OutsideClicker } from "./OutsideKlicker";
import Icon from "components/Icon/Icon";
import ModalHooray from 'components/ModalHooray/ModalHooray';
import { selectorIsLoggedIn } from 'redux/auth/authSelectors';

const baseStyle = {
  width: '87%',
  height: '87%',
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
  transition: 'border .24s ease-in-out',
};

export const Info = props => {
  const accumulatedProc = useSelector(selectAccumulatedProc);
  const isLoggedIn = useSelector(selectorIsLoggedIn);
  const accumulatedUah = useSelector(selectAccumulatedUah);
  const flatImage = useSelector(selectFlatImage);
  const month = useSelector(selectMonth);
  const squareMeters = useSelector(selectSquareMeters);
  const year = useSelector(selectYear);
  const plan = useSelector(selectorStatePlan);
  const isPlan = useSelector(selectorIsPlanFootage);
  const oneMoreMeterCost = useSelector(selectorOneMoreMeterCost);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/jpeg': [],
      'image/png': [],
    },
  });
  let [trigger, setTrigger] = useState(true);
  const dispatch = useDispatch();
  const file = acceptedFiles;

  useEffect(() => {
    if (file.length > 0) {
      const formData = new FormData();
      formData.append('image', acceptedFiles[0]);
      dispatch(postImage(formData));
    }
  }, [acceptedFiles, file.length, dispatch, trigger]);

  useEffect(() => {
    if (isPlan && isLoggedIn && Number(squareMeters) >= plan.footage) {
      setIsModalOpen(true);
    }
  }, [plan.footage, squareMeters, isLoggedIn, isPlan]);

  const style = useMemo(
    () => ({
      ...baseStyle,
    }),
    []
  );

  function percentage() {
    const percentageCounted = (squareMeters / plan.footage) * 100;
    return percentageCounted >= 100 ? `${100}%` : `${percentageCounted}%`;
  }

  function imageHandler() {
    if (!flatImage) setTrigger(false);
    return;
  }

  function compareNumbers(a, b) {
    return a > b ? b : a;
  }

  const closeModal = () => {
    setIsModalOpen(false);
  };

  function hideImgButton () {
    return trigger ? 'visible' : 'hidden';
  }

  return (
    <>
      {isModalOpen && <ModalHooray closeModal={closeModal} />}
      <div className={styles.infoContainer}>
        <div className={styles.accumulated}>
          <p className={styles.title}>
            {/* After {year ? 0 : year} years {month ? 0 : month} month */}
            After {(accumulatedUah >= plan.cost) ? 0 : year} {`${' '}`}
             years {(accumulatedUah >= plan.cost) ? 0 : month} month
          </p>
          <ul className={styles.list}>
            <li className={styles.item}>
              <p className={styles.text}>Accumulated, %:</p>
              <p className={styles.num}>
                {compareNumbers(accumulatedProc, 100)}%
              </p>
            </li>
            <li className={styles.item}>
              <p className={styles.text}>Accumulated, UAH:</p>
              <p className={styles.num}>
                {compareNumbers(accumulatedUah, plan.cost)} &#8372;
              </p>
            </li>
            <li className={styles.item}>
              <p className={styles.text}>And This:</p>
              <p className={styles.num}>
                {squareMeters >= plan.footage ? plan.footage : squareMeters}{' '}
                sq.m
              </p>
            </li>
          </ul>

          <p className={styles.barTitle}>
            {compareNumbers(squareMeters, plan.footage)} out of {plan.footage}{' '}
            sq.m accumulated
          </p>
          <div className={styles.bar}>
            <div
              className={styles.barFill}
              style={{ width: percentage() }}
            ></div>
          </div>
        </div>

        <div className={styles.imageElement}>
            <OutsideClicker trigger={trigger} setTrigger={setTrigger}>
            {trigger ? (
                <div className={styles.imageContainer} onClick={imageHandler}>
                    {flatImage ? (
                        <>
                        <img
                            className={styles.image}
                            src={flatImage}
                            alt="flat plan"
                        ></img>
                        {/* <p
                            className={styles.imageBtn}
                            onClick={() => setTrigger(false)}
                        >
                            Change image
                        </p> */}
                        {/* <p className={styles.imageBtn}>Change image</p> */}
                        </>
                    ) : (
                        <Icon name={'icon-photo-camera'} width={100} height={100} />
                    )}
                </div>
            ) : (
                <div className={styles.imageContainer}>
                <div {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some files here, or click to select files</p>
                    <em>(Only *.jpeg and *.png images will be accepted)</em>
                </div>
                </div>
            )}
            </OutsideClicker>
            <p className={styles.imageBtn} style={{visibility: hideImgButton()}} onClick={()=> setTrigger(false)}>Change image</p>
        </div>

      </div>
      <div className={styles.accRemain}>
        <div className={styles.accTitleContainer}>
          <p className={styles.accTitle}>
            To add more <span className={styles.accSpan}>1 sq.m</span> for
            planning, it remains to accumulate
          </p>
          <p className={styles.accNum}>
            {squareMeters >= plan.footage ? 0 : Math.round(oneMoreMeterCost)}{' '}
            &#8372;
          </p>
        </div>
        <div className={styles.svgContainer}></div>
      </div>
    </>
  );
};  