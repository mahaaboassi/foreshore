import { useEffect, useState , useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeNotification } from "../redux/actions/notification";
function Notification() {
    const dispatch = useDispatch()
    const dataRedux = useSelector(state => state.notification )
    const [ data , setData ] = useState({
        isOpen : false,
        message : "",
        bgColor : ""
    })
    const noteRef = useRef(null); // Create a ref for the dropdown
     // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
        if (noteRef.current && !noteRef.current.contains(event.target)) {
            dispatch(changeNotification({
                isOpen : false,
                message : "",
                bgColor : ""
          }))
        }
    };

    useEffect(() => {
        // Add event listener for clicks
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener on component unmount
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    useEffect(()=>{
        setData(dataRedux)
    },[dataRedux]) 
    return ( data.isOpen ? <div ref={noteRef} className={`fixed bottom-4 right-0 md:right-4 ${data.bgColor} max-w-42 md:max-w-96  text-white px-4 py-2 rounded-lg shadow-lg animate-slide-in`}>
        <div onClick={()=>dispatch(changeNotification({
              isOpen : false,
              message : "",
              bgColor : ""
        }))} className="flex justify-end cursor-pointer py-1">
            x
        </div>
        <h5>{data.message}</h5>
      </div> : "");
}

export default Notification;