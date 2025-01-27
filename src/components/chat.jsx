import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeChat } from "../redux/actions/chat";
import { chatData } from "../data/dataChat";
import  MessageInfo  from "./messageInfo"
import { Helper } from "../functionality/helper";
import { apiRoutes } from "../functionality/apiRoutes";


const supportMan = <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 200 200" fill="none">
                        <path d="M78.7689 95.5281C88.1999 104.16 102.016 105.868 113.241 100.767C114.886 98.6821 117.239 97.1831 119.935 96.6341C120.557 96.1301 121.162 95.5991 121.75 95.0411C125.723 91.2601 128.602 87.0311 130.46 82.1731V66.9721C130.46 64.8121 131.087 62.7361 132.197 60.9671C130.183 51.8861 124.878 43.9061 115.445 38.5441C101.098 30.3901 83.8609 34.7181 74.2539 47.4971C71.0959 51.6961 68.9809 56.3261 67.8779 61.0911C68.9419 62.8331 69.5389 64.8631 69.5389 66.9731V82.3041C71.5099 87.1801 74.5989 91.7111 78.7689 95.5281Z" fill="#27CBBE"/>
                        <path d="M168.729 125.982C168.084 121.643 164.557 119.16 160.206 117.908C151.342 115.354 142.257 113.388 133.451 110.07C132.444 115.164 128.043 119.055 122.711 119.277C121.848 132.676 116.63 145.087 110.163 157.477C110.065 157.644 109.772 157.623 109.742 157.429C108.355 149.904 105.307 137.033 104.378 133.193C104.211 132.5 104.408 131.767 104.907 131.248L108.463 127.525C109.138 126.813 109.127 125.699 108.454 124.994L101.602 117.938C100.89 117.196 99.698 117.196 98.984 117.929L92.123 124.985C91.439 125.699 91.43 126.813 92.114 127.525L95.682 131.248C96.179 131.768 96.375 132.5 96.208 133.193C95.281 137.054 92.212 149.963 90.823 157.381C90.795 157.576 90.53 157.596 90.434 157.429C81.619 140.855 75.334 124.144 78.666 104.756C78.696 104.58 78.501 104.463 78.355 104.559C64.537 112.583 51.646 114.988 41.727 117.567C36.528 118.915 32.893 121.515 31.545 126.646C30.224 131.747 29.179 150.296 28.172 170.261C28.046 172.84 30.099 175.001 32.678 175.001H167.322C169.913 175.001 171.963 172.82 171.828 170.241C170.743 150.696 169.676 132.342 168.729 125.982ZM68.729 150.714C68.729 151.174 68.356 151.545 67.898 151.545H47.082C46.622 151.545 46.251 151.174 46.251 150.714V145.535C46.251 145.075 46.622 144.704 47.082 144.704H67.899C68.357 144.704 68.73 145.075 68.73 145.535V150.714H68.729Z" fill="#27CBBE"/>
                        <path d="M58.2339 90.223C61.6969 90.223 64.5039 87.416 64.5039 83.953V66.971C64.5039 64.463 63.0309 62.3 60.9039 61.297C64.6199 42.997 81.3109 29.102 99.9379 29.123C118.505 29.144 135.219 42.422 139.102 61.294C136.971 62.296 135.495 64.46 135.495 66.971V83.953C135.495 85.242 135.884 86.439 136.551 87.435C136.231 88.228 135.764 88.999 135.389 89.74C133.904 92.672 132.309 95.565 130.116 98.055C129.138 99.166 128.098 100.225 127.046 101.267C126.572 101.736 126.107 102.134 125.588 102.39C124.61 101.786 123.459 101.437 122.225 101.437C118.686 101.437 115.817 104.306 115.817 107.845C115.817 111.384 118.686 114.253 122.225 114.253C125.764 114.253 128.633 111.384 128.633 107.845C128.633 107.062 128.492 106.312 128.235 105.618C133.591 101.498 136.949 95.923 139.838 89.92C140.445 90.116 141.093 90.223 141.765 90.223C145.228 90.223 148.035 87.416 148.035 83.953V66.971C148.035 63.991 145.956 61.499 143.17 60.861C142.594 57.367 141.535 53.987 140.074 50.799C138.83 48.087 137.206 45.488 135.373 43.06C128.194 33.549 118.831 27.472 107.041 25.624C91.6769 23.215 78.4959 27.804 67.7579 39.039C61.8459 45.224 58.1819 52.598 56.5679 60.927C53.9139 61.657 51.9629 64.086 51.9629 66.972V83.954C51.9639 87.416 54.7709 90.223 58.2339 90.223Z" fill="#27CBBE"/>
                    </svg>
const closeIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_17_1174)">
                    <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#27CBBE"/>
                    </g>
                    <defs>  
                    <clipPath id="clip0_17_1174">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>



function ChatComonent() {
    const openChatRedux = useSelector( state => state.chat)
    const dispatch = useDispatch()
    const [ open, setOpen ] = useState(false)
    const [ closeChat, setCloseChat ] = useState(false)
    const [ loading, setLoading ] = useState(false)
    const chatEndRef = useRef(null);
    useEffect(()=>{setOpen(openChatRedux.isOpen)},[openChatRedux])
    const [conversation , setConversation] = useState([])

    useEffect(()=>{
        const dataForChat = [{
            sender : "support",
            key : "hospitality",
            id : 1,
            content : <div>Welcome to our website! 😊</div>,
            answer : <></>
        },...chatData]
        setConversation(dataForChat)
    },[])
    const connectWithSupport = ()=>{
        setConversation(prev=>[...prev,{
            sender : "support",
            key : "connect with support",
            id :100,
            content :<MessageInfo  returnedData={(data)=>{sendData(data)}} />,
            answer : ""
        }])
    }
    const reSelect =()=>{
        // if(!closeChat)
            setConversation(prev=>[...prev,... chatData])
    }
    useEffect(() => {
        // Auto-scroll to the bottom whenever conversation updates
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [conversation,loading]);
    const closeConversation = () => {
        // if(!closeChat){
            setCloseChat(true)
            setConversation(prev=>[...prev,{
                sender : "support",
                key : "finish",
                id :100,
                content :<>Thank you for your interest! We appreciate it.😊</>,
                answer : ""
            }])
        // }
        
    }
    const sendData = async(data)=>{
        setLoading(true)
        const { response , message } = await Helper({
            url : apiRoutes.contact.contactUs,
            method : "POST",
            body : {
                email : data.email,
                name : data.name,
                phone_number :  data.phone_number,
                country_dial : data.country_dial,
                message : data.message || ""
            }
        })
        if(response){
            setConversation(prev=>[...prev,{
                sender : "support",
                key : "finish",
                id :100,
                content :<>Thanks for connecting with us! We'll get back to you soon.😊</>,
                answer : ""
            }])
            setLoading(false)

        }else{
            setConversation(prev=>[...prev,{
                sender : "support",
                key : "error",
                id :100,
                content :<><div className="p-2 bg-error text-white rounded">Something Error ! Can you resend your request please. 😞 </div>
                <div><MessageInfo returnedData={(data)=>{sendData(data)}} /></div></>,
                answer : ""
            }])
            setLoading(false)
        }
       
    }
    return ( <div className="container-chat">
        
         <div onClick={()=>dispatch(ChangeChat({isOpen:true}))} className="chat-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 32 32" fill="none">
                    <path d="M16 2C9.4 2 4 7.3 4 13.9V17.4C4 17.5 4 17.5 4 17.6C4 17.7 4 17.9 4 18C4 20.8 6.2 23 9 23C9.6 23 10 22.6 10 22V14C10 13.4 9.6 13 9 13C7.9 13 6.8 13.4 6 14V13.8C6 8.4 10.5 4 16 4C21.5 4 26 8.4 26 13.9V14C25.2 13.4 24.1 13 23 13C22.4 13 22 13.4 22 14V22C22 22.6 22.4 23 23 23C23.7 23 24.4 22.8 25 22.6C24 24.7 22.2 26.3 20 27.2C20 27.1 20 27.1 20 27C20 26.4 19.6 26 19 26H16C15.4 26 15 26.4 15 27V29C15 29.6 15.4 30 16 30C22.6 30 28 24.8 28 18.4V17.4V15V13.9C28 7.3 22.6 2 16 2Z" fill="#27CBBE"/>
                </svg>
            </div>
            {open && <div className="container-conversation" style={{height : window.innerHeight - 300}}>
                <div className="chat-open">
                    <div className="row-support">
                    <div className="flex justify-between items-center p-2">
                        <div className="flex items-center gap-2 ">
                            <div className="avatar-chat">
                                {supportMan}
                            </div>
                            <h5>Support</h5>
                        </div>
                        <div className="cursor-pointer" onClick={()=>dispatch(ChangeChat({isOpen:false}))}>
                            {closeIcon}
                        </div>

                    </div>
                
                    

                    </div>
                    <div style={{overflowY: "scroll",height : window.innerWidth < 500? window.innerHeight - 350: window.innerHeight - 370}} className="p-2 div-scroll flex flex-col gap-2">
                            {conversation.map((e,i)=>(<div key={`Conversation_${i}_${e.key}_${e.id}`} onClick={()=>{
                                // if(!closeChat){
                                    if(e.key == "question" ){
                                        setConversation(prev=>([...prev,{
                                            sender : "support",
                                            key : "answer",
                                            id :100,
                                            content : <div>
                                                <div className="text-main">{e.content}</div>
                                                <div>{e.answer}</div>
                                                <div >
                                                    Would you like to <span className="cursor-pointer weight-medium hover:text-stone-600" onClick={reSelect}>Reselect</span>,{" "}
                                                    <span className="cursor-pointer weight-medium hover:text-stone-600" onClick={closeConversation}>close conversation</span>,{" "}
                                                    or <span className="cursor-pointer weight-medium hover:text-stone-600" onClick={connectWithSupport}> Connect With Support</span>? 
                                                </div>
                                            </div>,
                                            answer : ""
                                        },]))
                                    }else if(e.key == "no-option"){
                                        setConversation(prev=>([...prev,{
                                            sender : "support",
                                            key : "no-potion-selected",
                                            id :100,
                                            content :<><div> Do you want connect with support <span onClick={connectWithSupport} className="cursor-pointer weight-medium hover:text-stone-600" >Yes</span>, {"  "}
                                            <span className="cursor-pointer weight-medium hover:text-stone-600" onClick={closeConversation}>Close Conversation</span> </div></>,
                                            answer : ""
                                        },]))
    
                                    }
                                // }
                                
                            }} className={`${(e.key =="question" || e.key =="answer" || e.key =="no-option")?"support-line":(e.key == "finish"?"message-close":"")} ${(e.key=="question" || e.key =="no-option") && "cursor-pointer"}`}>
                                {e.content}
                                </div>))}
                                <div ref={chatEndRef} />
                                {loading  && <div className="loading">
                                                <div className="bounce"></div>
                                                <div className="bounce"></div>
                                                <div className="bounce"></div>
                                            </div>}
                    </div>
                    
                
                </div>
            
                
            </div>}
    </div> );
}

export default ChatComonent;