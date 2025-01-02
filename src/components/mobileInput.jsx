import { useEffect, useState } from "react";

import InputWithIcon from "./inputWithIcons";
import { countriesWithCodeNumber } from "../data/data";
// import { Helper } from "../../functionality/helper";
// import { apiRoutes } from "../../functionality/apiRoutes";
function MobileInput({register,value,returnedCountry,country_id,isOpenMenu=true}) {
    const [ countries, setCountries] = useState(countriesWithCodeNumber)
    const [ selectedCountry, setSelectedCountry,] = useState({})
    const [number ,setNumber ] = useState()
    const [isOpen ,setIsOpen ] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setSelectedCountry(countriesWithCodeNumber.find(e => e.code == "AE"))
        // const controller = new AbortController()
        // const signal = controller.signal
        // getCountry(signal)
        // return () => controller.abort()
    },[])
    useEffect(()=>{
        setNumber(value)
    },[value])
    // const getCountry = async (signal)=>{
    //     setLoading(true)
    //     const { response , message } = await Helper({
    //         url : apiRoutes.country.all,
    //         method : "GET",
    //         signal
    //     })
    //     if(response){
            
    //         if(country_id){
    //             response.data.forEach((ele)=>{
    //                 if(ele.id == country_id){
    //                     setSelectedCountry(ele)
    //                 }
    //             })
    //         }else{
    //             setCountries(response.data)
    //             setSelectedCountry(response.data[0])
    //             returnedCountry(response.data[0])
    //         }
           
    //         setLoading(false)
    //     }
    // }
    const handleSearch = (e) => {
        if(e.target.value.length >2 ){
            const searchQuery = e.target.value.toLowerCase();
            const filtered = countries.filter((country) =>
                country.country_name.toLowerCase().includes(searchQuery)
            );
            setCountries(filtered);
        }else{
            setCountries(countriesWithCodeNumber)
        }
       
    };
    return ( <div className="mobile-input items-center">
        <div className={`flex items-center min-w-8 sm:min-w-12 ${isOpenMenu && "cursor-pointer"}`} onClick={()=>{
            if(isOpenMenu)
                setIsOpen(!isOpen)
            
        }}>
            {/* {loading ? <div className="loader-dark0"></div> : */}
            <img className="w-5  rounded" alt={ "country_name" in selectedCountry && selectedCountry.country_name} src={"code" in selectedCountry ?`https://flagcdn.com/w320/${selectedCountry.code.toLowerCase()}.png` :""} />
            {/* } */}
            {isOpenMenu && <div className="flex cursor-pointer items-center">
                {isOpen ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clipPath="url(#clip0_17_4651)">
                    <path d="M12 8L6 14L7.41 15.41L12 10.83L16.59 15.41L18 14L12 8Z" fill="#323232"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_17_4651">
                    <rect width="24" height="24" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clipPath="url(#clip0_17_4652)">
                        <path d="M16.59 8.58997L12 13.17L7.41 8.58997L6 9.99997L12 16L18 9.99997L16.59 8.58997Z" fill="#323232"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_17_4652">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>}
                
            </div>}
            
        </div>
        <div className="w-fit whitespace-nowrap">
            ( { "dial_code" in selectedCountry && selectedCountry.dial_code} )
        </div>
        <div className="w-full">
            <input  disabled={!isOpenMenu} placeholder="XX XX XX" {...register} value={number} onChange={(e)=>{
                // register.onChange(e)
                setNumber(e.target.value)
                }} type="number" />
        </div>
        <ul className={`${isOpen?"block":"hidden"} menu-countries`}>
            <li className="py-2">
                <InputWithIcon onChange={handleSearch} placeholder={"Search"} isDark={true}/>
            </li>
            {countries.length>0 ? countries.map((ele)=>{
                const code = ele.code.toLowerCase()
                return <li onClick={()=>{setSelectedCountry(ele)
                    // returnedCountry(ele)
                    setIsOpen(false)
                }} className="flex mb-2 gap-2 cursor-pointer hover:text-stone-700 details-country" key={`Countries_${ele.name}`}>
                <img className="w-5 h-4  rounded" alt={ele.name} src={`https://flagcdn.com/w320/${code}.png`} />
                <div >
                    {ele.name}
                </div>
                <div>{`(${ele.dial_code})`}</div>
            </li>
            }):<div className="flex justify-center py-4">
                <p>No Country founded</p>
                </div>}
        </ul>
    </div> );
}

export default MobileInput;