import React, { useEffect, useRef } from "react";

export function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    let {trigger, setTrigger} = props;

    function useOutsideAlerter(ref) {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {

                setTrigger(trigger = false);
            }
          }
          document.addEventListener("mousedown", handleClickOutside);
          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        }, [ref]);
    }

    useOutsideAlerter(wrapperRef);
    
    useEffect(()=>{
        console.log('outsideAlerter', trigger)
    },[trigger]);

    return <div ref={wrapperRef}>{props.children}</div>;
}