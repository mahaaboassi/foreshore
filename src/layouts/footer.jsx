import React from 'react';
import { useTranslation } from 'react-i18next';
// Images
import img from "../images/logo_light.png"
import img_2 from "../images/logo_dark.png"
import { Link } from 'react-router-dom';

function Footer() {
    const {t , i18n} = useTranslation()
    const data = [{
        name : "home",
        link :"/"
    },{
        name : "explore-destination",
        link :"/destinations"
    },{
        name : "about-us",
        link :"/aboutUs"
    },{
        name : "list-your-property",
        link :"/listYourProperty"
    },{
        name : "contact-us",
        link :"/contactUs"
    },{
        name : "faq",
        link :"/FAQs"
    }]

    
    return ( <footer className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className={`${i18n.language == "en"?"footer-en":"footer-ar"} footer-right`}>
                <div className="flex justify-center py-2 sm:py-5">
                    <div className="photo-container">
                        <div className="flip-box">
                            <div className="flip-box-inner">
                            <div className="flip-box-front">
                                <img src={img_2} alt="Front Photo"/>
                            </div>
                            <div className="flip-box-back">
                                <img src={img} alt="Back Photo"/>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="max-w-98">
                {t("footer-desc")}
                </p>

            </div>
            <div className={`px-5 ${i18n.language == "en"?"footer-container-en":"footer-container-ar"}`}>
                <div>
                    <h5 className="weight-regular mt-10 md:mt-0 text-center sm:text-start">{t("footer-subscribe")}</h5>
                    <div className="flex pt-4 pb-1 justify-center sm:justify-start ">
                        <input placeholder={t("email")} /><button className="btn-footer p-3 capitalize">{t("subscribe")}</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                    <div className="pages">
                        <h4 className="uppercase weight-semiBold text-center sm:text-start py-3">{t("pages")}</h4>
                        <ul className="flex flex-col gap-1">
                            {data.map((e)=>(<li key={`Footer_Pages_${e.name}`} className="capitalize text-center sm:text-start cursor-pointer">
                                <Link to={e.link}>{t(e.name)}</Link>
                            </li>))}
                        </ul>
                    </div>
                    <div className="contact">
                        <h4 className="uppercase  weight-semiBold py-3">{t("contact-us")}</h4>
                        <ul className="flex flex-col gap-1">
                        <li className="capitalize cursor-pointer flex">
                            <a target="_blank" href="tel:+971042281609" className="flex items-center space-x-2">
                                <div className="min-w-8">
                                    <svg width="25" height="25" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PhoneIcon" style={{ color: "white" }}>
                                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                                    </svg>
                                </div>
                                <div>+971 04-2281609</div>
                            </a>
                        </li>
                        <li className="capitalize cursor-pointer flex">
                            <a target="_blank" href="mailto:info@foreshore.ae" className="flex items-center space-x-2">
                                <div className="min-w-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="21" viewBox="0 0 25 24" fill="none">
                                        <path d="M12.5 11.1075L22.085 4.95C21.6996 4.66096 21.2317 4.50323 20.75 4.5H4.24998C3.76828 4.50323 3.30033 4.66096 2.91498 4.95L12.5 11.1075Z" fill="black"/>
                                        <path d="M12.905 12.6303L12.7775 12.6903H12.7175C12.6484 12.7212 12.5751 12.7414 12.5 12.7503C12.4377 12.7582 12.3748 12.7582 12.3125 12.7503H12.2525L12.125 12.6903L2.075 6.19531C2.02698 6.37647 2.00179 6.56291 2 6.75031V17.2503C2 17.847 2.23705 18.4193 2.65901 18.8413C3.08097 19.2633 3.65326 19.5003 4.25 19.5003H20.75C21.3467 19.5003 21.919 19.2633 22.341 18.8413C22.7629 18.4193 23 17.847 23 17.2503V6.75031C22.9982 6.56291 22.973 6.37647 22.925 6.19531L12.905 12.6303Z" fill="black"/>
                                    </svg>
                                </div>
                                <div>info@foreshore.ae</div>
                            </a>
                        </li>
                        <li className="capitalize cursor-pointer flex">
                            <a target="_blank" href="https://maps.app.goo.gl/uMgb61PbfuKiYHxq8"  rel="noopener noreferrer" className="flex items-center space-x-2">
                                <div className="min-w-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 15 15" fill="none">
                                        <g clipPath="url(#clip0_203_2297)">
                                            <path d="M7.5 7.5C6.8125 7.5 6.25 6.9375 6.25 6.25C6.25 5.5625 6.8125 5 7.5 5C8.1875 5 8.75 5.5625 8.75 6.25C8.75 6.9375 8.1875 7.5 7.5 7.5ZM11.25 6.375C11.25 4.10625 9.59375 2.5 7.5 2.5C5.40625 2.5 3.75 4.10625 3.75 6.375C3.75 7.8375 4.96875 9.775 7.5 12.0875C10.0312 9.775 11.25 7.8375 11.25 6.375ZM7.5 1.25C10.125 1.25 12.5 3.2625 12.5 6.375C12.5 8.45 10.8313 10.9062 7.5 13.75C4.16875 10.9062 2.5 8.45 2.5 6.375C2.5 3.2625 4.875 1.25 7.5 1.25Z" fill="#202020"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_203_2297">
                                                <rect width="15" height="15" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>{t("address")}</div>
                            </a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="final-footer py-2 px-3">
            <div className="md:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 flex-col-reverse flex">
                <div className="flex justify-center md:justify-start">
                    <p> {t("final-hint")}</p>
                </div>
                <div className="flex gap-2 justify-center">
                    <div>
                        <a target="_blank" href="tel:+971042281609" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 36 36" fill="none">
                                <g clipPath="url(#clip0_187_942)">
                                <path d="M22.5 18H25.5C25.5 13.86 22.14 10.5 18 10.5V13.5C20.49 13.5 22.5 15.51 22.5 18ZM28.5 18H31.5C31.5 10.545 25.455 4.5 18 4.5V7.5C23.805 7.5 28.5 12.195 28.5 18ZM30 23.25C28.125 23.25 26.325 22.95 24.645 22.395C24.495 22.35 24.33 22.32 24.18 22.32C23.79 22.32 23.415 22.47 23.115 22.755L19.815 26.055C15.57 23.895 12.09 20.43 9.93 16.17L13.23 12.855C13.65 12.465 13.77 11.88 13.605 11.355C13.05 9.675 12.75 7.875 12.75 6C12.75 5.175 12.075 4.5 11.25 4.5H6C5.175 4.5 4.5 5.175 4.5 6C4.5 20.085 15.915 31.5 30 31.5C30.825 31.5 31.5 30.825 31.5 30V24.75C31.5 23.925 30.825 23.25 30 23.25ZM7.545 7.5H9.795C9.9 8.82 10.125 10.125 10.47 11.37L8.67 13.185C8.07 11.37 7.68 9.48 7.545 7.5ZM28.5 28.455C26.52 28.32 24.6 27.93 22.8 27.315L24.6 25.515C25.875 25.875 27.18 26.1 28.5 26.19V28.455Z" fill="#FFFDFD"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_187_942">
                                <rect width="36" height="36" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="#" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 30 30" fill="none">
                                <g clipPath="url(#clip0_187_939)">
                                <path d="M15 2.70117C19.0078 2.70117 19.4824 2.71875 21.0586 2.78906C22.5234 2.85352 23.3145 3.09961 23.8418 3.30469C24.5391 3.57422 25.043 3.90234 25.5645 4.42383C26.0918 4.95117 26.4141 5.44922 26.6836 6.14648C26.8887 6.67383 27.1348 7.4707 27.1992 8.92969C27.2695 10.5117 27.2871 10.9863 27.2871 14.9883C27.2871 18.9961 27.2695 19.4707 27.1992 21.0469C27.1348 22.5117 26.8887 23.3027 26.6836 23.8301C26.4141 24.5273 26.0859 25.0313 25.5645 25.5527C25.0371 26.0801 24.5391 26.4023 23.8418 26.6719C23.3145 26.877 22.5176 27.123 21.0586 27.1875C19.4766 27.2578 19.002 27.2754 15 27.2754C10.9922 27.2754 10.5176 27.2578 8.94141 27.1875C7.47656 27.123 6.68555 26.877 6.1582 26.6719C5.46094 26.4023 4.95703 26.0742 4.43555 25.5527C3.9082 25.0254 3.58594 24.5273 3.31641 23.8301C3.11133 23.3027 2.86523 22.5059 2.80078 21.0469C2.73047 19.4648 2.71289 18.9902 2.71289 14.9883C2.71289 10.9805 2.73047 10.5059 2.80078 8.92969C2.86523 7.46484 3.11133 6.67383 3.31641 6.14648C3.58594 5.44922 3.91406 4.94531 4.43555 4.42383C4.96289 3.89648 5.46094 3.57422 6.1582 3.30469C6.68555 3.09961 7.48242 2.85352 8.94141 2.78906C10.5176 2.71875 10.9922 2.70117 15 2.70117ZM15 0C10.9277 0 10.418 0.0175781 8.81836 0.0878906C7.22461 0.158203 6.12891 0.416016 5.17969 0.785156C4.18945 1.17187 3.35156 1.68164 2.51953 2.51953C1.68164 3.35156 1.17188 4.18945 0.785156 5.17383C0.416016 6.12891 0.158203 7.21875 0.0878906 8.8125C0.0175781 10.418 0 10.9277 0 15C0 19.0723 0.0175781 19.582 0.0878906 21.1816C0.158203 22.7754 0.416016 23.8711 0.785156 24.8203C1.17188 25.8105 1.68164 26.6484 2.51953 27.4805C3.35156 28.3125 4.18945 28.8281 5.17383 29.209C6.12891 29.5781 7.21875 29.8359 8.8125 29.9062C10.4121 29.9766 10.9219 29.9941 14.9941 29.9941C19.0664 29.9941 19.5762 29.9766 21.1758 29.9062C22.7695 29.8359 23.8652 29.5781 24.8145 29.209C25.7988 28.8281 26.6367 28.3125 27.4688 27.4805C28.3008 26.6484 28.8164 25.8105 29.1973 24.8262C29.5664 23.8711 29.8242 22.7813 29.8945 21.1875C29.9648 19.5879 29.9824 19.0781 29.9824 15.0059C29.9824 10.9336 29.9648 10.4238 29.8945 8.82422C29.8242 7.23047 29.5664 6.13477 29.1973 5.18555C28.8281 4.18945 28.3184 3.35156 27.4805 2.51953C26.6484 1.6875 25.8105 1.17188 24.8262 0.791016C23.8711 0.421875 22.7813 0.164062 21.1875 0.09375C19.582 0.0175781 19.0723 0 15 0Z" fill="white"/>
                                <path d="M15 7.29492C10.7461 7.29492 7.29492 10.7461 7.29492 15C7.29492 19.2539 10.7461 22.7051 15 22.7051C19.2539 22.7051 22.7051 19.2539 22.7051 15C22.7051 10.7461 19.2539 7.29492 15 7.29492ZM15 19.998C12.2402 19.998 10.002 17.7598 10.002 15C10.002 12.2402 12.2402 10.002 15 10.002C17.7598 10.002 19.998 12.2402 19.998 15C19.998 17.7598 17.7598 19.998 15 19.998Z" fill="white"/>
                                <path d="M24.8086 6.99024C24.8086 7.98633 24 8.78907 23.0098 8.78907C22.0137 8.78907 21.2109 7.98047 21.2109 6.99024C21.2109 5.99414 22.0195 5.19141 23.0098 5.19141C24 5.19141 24.8086 6 24.8086 6.99024Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_187_939">
                                <rect width="30" height="30" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="#" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 30 30" fill="none">
                                <g clipPath="url(#clip0_187_940)">
                                <path d="M15 0C6.7158 0 0 6.7158 0 15C0 22.0344 4.8432 27.9372 11.3766 29.5584V19.584H8.2836V15H11.3766V13.0248C11.3766 7.9194 13.6872 5.553 18.6996 5.553C19.65 5.553 21.2898 5.7396 21.9606 5.9256V10.0806C21.6066 10.0434 20.9916 10.0248 20.2278 10.0248C17.7684 10.0248 16.818 10.9566 16.818 13.3788V15H21.7176L20.8758 19.584H16.818V29.8902C24.2454 28.9932 30.0006 22.6692 30.0006 15C30 6.7158 23.2842 0 15 0Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_187_940">
                                <rect width="30" height="30" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <a target="_blank" href="https://www.linkedin.com/company/foreshoreuae/posts/?feedView=all" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 30 30" fill="none">
                                <g clipPath="url(#clip0_187_941)">
                                <path d="M27.7793 0H2.21484C0.990234 0 0 0.966797 0 2.16211V27.832C0 29.0273 0.990234 30 2.21484 30H27.7793C29.0039 30 30 29.0273 30 27.8379V2.16211C30 0.966797 29.0039 0 27.7793 0ZM8.90039 25.5645H4.44727V11.2441H8.90039V25.5645ZM6.67383 9.29297C5.24414 9.29297 4.08984 8.13867 4.08984 6.71484C4.08984 5.29102 5.24414 4.13672 6.67383 4.13672C8.09766 4.13672 9.25195 5.29102 9.25195 6.71484C9.25195 8.13281 8.09766 9.29297 6.67383 9.29297ZM25.5645 25.5645H21.1172V18.6035C21.1172 16.9453 21.0879 14.8066 18.8027 14.8066C16.4883 14.8066 16.1367 16.6172 16.1367 18.4863V25.5645H11.6953V11.2441H15.9609V13.2012H16.0195C16.6113 12.0762 18.0645 10.8867 20.2266 10.8867C24.7324 10.8867 25.5645 13.8516 25.5645 17.707V25.5645Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_187_941">
                                <rect width="30" height="30" fill="white"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </div>

                </div>
                <div className="flex justify-center md:justify-end">
                    <ul className="flex gap-4">
                        <li className="capitalize">
                            <Link  to="/terms&conditions">
                                {t("terms-and-conditions")}
                            </Link>

                        </li>
                        <li className="capitalize">
                            <Link  to="/privacyPolicy">
                                {t("privacy-policy")}
                            </Link>

                        </li>
                    </ul>
                    
                    
                </div>

            </div>
         
        </div>
    </footer> );
}

export default Footer;