import { useRef,useEffect } from "react";
export function useOutSideClick(handler) {
    const modalRef = useRef();
    useEffect(()=>{
        function handleOutsideClick(e){
         if(modalRef.current && !modalRef.current.contains(e.target) ){
            handler();
         }
       }
        document.addEventListener('click',handleOutsideClick,true);
        return ()=>{
         document.removeEventListener('click',handleOutsideClick,true);
        }
      },[handler]);
      return modalRef;
}