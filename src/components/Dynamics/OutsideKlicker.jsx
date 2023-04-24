import React, { useEffect, useRef } from "react";

export function OutsideClicker(props) {
    const wrapperRef = useRef(null);
    let {trigger, setTrigger} = props;

    function useOutsideAlerter(ref) {
        useEffect(() => {
          function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setTrigger(trigger = true);
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
        // console.log('outsideAlerter', trigger)
    },[trigger]);

    return <div ref={wrapperRef}>{props.children}</div>;
}