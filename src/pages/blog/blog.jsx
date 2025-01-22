import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
// Images
import img from "../../images/Dubai-Holiday-Home-Vacation.webp"
import profile_img from "../../images/profile.webp"


function BlogDetails() {
    const { t } = useTranslation()
    const data = [{
        name : "Facebook",
        svg : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="19" viewBox="0 0 12 19" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0283 7.30769H7.35223V4.38462C7.35223 3.57785 8.01099 3.65385 8.82267 3.65385H10.2931V0H7.35223C6.18227 0 5.06023 0.461949 4.23294 1.28422C3.40565 2.1065 2.94089 3.22174 2.94089 4.38462V7.30769H0V10.9615H2.94089V19H7.35223V10.9615H9.5579L11.0283 7.30769Z" fill="white"/>
        </svg>,
        link : "#"
    },{
        name : "Instagram",
        svg : <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
        <g clipPath="url(#clip0_115_263)">
        <path d="M8.5 1.53066C10.7711 1.53066 11.04 1.54062 11.9332 1.58047C12.7633 1.61699 13.2115 1.75645 13.5104 1.87266C13.9055 2.02539 14.191 2.21133 14.4865 2.50684C14.7854 2.80566 14.968 3.08789 15.1207 3.48301C15.2369 3.78184 15.3764 4.2334 15.4129 5.06016C15.4527 5.95664 15.4627 6.22559 15.4627 8.49336C15.4627 10.7645 15.4527 11.0334 15.4129 11.9266C15.3764 12.7566 15.2369 13.2049 15.1207 13.5037C14.968 13.8988 14.782 14.1844 14.4865 14.4799C14.1877 14.7787 13.9055 14.9613 13.5104 15.1141C13.2115 15.2303 12.76 15.3697 11.9332 15.4062C11.0367 15.4461 10.7678 15.4561 8.5 15.4561C6.22891 15.4561 5.95996 15.4461 5.0668 15.4062C4.23672 15.3697 3.78848 15.2303 3.48965 15.1141C3.09453 14.9613 2.80898 14.7754 2.51348 14.4799C2.21465 14.1811 2.03203 13.8988 1.8793 13.5037C1.76309 13.2049 1.62363 12.7533 1.58711 11.9266C1.54727 11.0301 1.5373 10.7611 1.5373 8.49336C1.5373 6.22227 1.54727 5.95332 1.58711 5.06016C1.62363 4.23008 1.76309 3.78184 1.8793 3.48301C2.03203 3.08789 2.21797 2.80234 2.51348 2.50684C2.8123 2.20801 3.09453 2.02539 3.48965 1.87266C3.78848 1.75645 4.24004 1.61699 5.0668 1.58047C5.95996 1.54062 6.22891 1.53066 8.5 1.53066ZM8.5 0C6.19238 0 5.90352 0.00996094 4.99707 0.0498047C4.09395 0.0896484 3.47305 0.235742 2.93516 0.444922C2.37402 0.664062 1.89922 0.95293 1.42773 1.42773C0.95293 1.89922 0.664062 2.37402 0.444922 2.93184C0.235742 3.47305 0.0896484 4.09062 0.0498047 4.99375C0.00996094 5.90352 0 6.19238 0 8.5C0 10.8076 0.00996094 11.0965 0.0498047 12.0029C0.0896484 12.9061 0.235742 13.527 0.444922 14.0648C0.664062 14.626 0.95293 15.1008 1.42773 15.5723C1.89922 16.0437 2.37402 16.3359 2.93184 16.5518C3.47305 16.7609 4.09062 16.907 4.99375 16.9469C5.9002 16.9867 6.18906 16.9967 8.49668 16.9967C10.8043 16.9967 11.0932 16.9867 11.9996 16.9469C12.9027 16.907 13.5236 16.7609 14.0615 16.5518C14.6193 16.3359 15.0941 16.0437 15.5656 15.5723C16.0371 15.1008 16.3293 14.626 16.5451 14.0682C16.7543 13.527 16.9004 12.9094 16.9402 12.0063C16.9801 11.0998 16.99 10.8109 16.99 8.50332C16.99 6.1957 16.9801 5.90684 16.9402 5.00039C16.9004 4.09727 16.7543 3.47637 16.5451 2.93848C16.3359 2.37402 16.0471 1.89922 15.5723 1.42773C15.1008 0.95625 14.626 0.664062 14.0682 0.448242C13.527 0.239062 12.9094 0.0929688 12.0063 0.053125C11.0965 0.00996094 10.8076 0 8.5 0Z" fill="white"/>
        <path d="M8.5 4.13379C6.08945 4.13379 4.13379 6.08945 4.13379 8.5C4.13379 10.9105 6.08945 12.8662 8.5 12.8662C10.9105 12.8662 12.8662 10.9105 12.8662 8.5C12.8662 6.08945 10.9105 4.13379 8.5 4.13379ZM8.5 11.3322C6.93613 11.3322 5.66777 10.0639 5.66777 8.5C5.66777 6.93613 6.93613 5.66777 8.5 5.66777C10.0639 5.66777 11.3322 6.93613 11.3322 8.5C11.3322 10.0639 10.0639 11.3322 8.5 11.3322Z" fill="white"/>
        <path d="M14.0582 3.96111C14.0582 4.52556 13.6 4.98045 13.0389 4.98045C12.4744 4.98045 12.0195 4.52224 12.0195 3.96111C12.0195 3.39666 12.4777 2.94177 13.0389 2.94177C13.6 2.94177 14.0582 3.39998 14.0582 3.96111Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_115_263">
        <rect width="17" height="17" fill="white"/>
        </clipPath>
        </defs>
        </svg>,
        link : "#"
    },{
        name : "Linkedin",
        svg : <svg xmlns="http://www.w3.org/2000/svg" width="14" height="16" viewBox="0 0 14 16" fill="none">
        <path d="M0.483805 3.00563C0.161039 2.67072 0 2.25637 0 1.76335C0 1.27033 0.161039 0.837278 0.483805 0.502367C0.806571 0.167456 1.22205 0 1.73164 0C2.24124 0 2.63999 0.167456 2.96206 0.502367C3.28482 0.837278 3.44586 1.25787 3.44586 1.76335C3.44586 2.26883 3.28482 2.67072 2.96206 3.00563C2.63929 3.34054 2.22938 3.50799 1.73164 3.50799C1.2339 3.50799 0.806571 3.34054 0.483805 3.00563ZM3.17399 4.92631V15.1894H0.271878V4.92631H3.17399Z" fill="#FEFFFC"/>
        <path d="M12.8363 5.93964C13.4686 6.70682 13.7851 7.76062 13.7851 9.10182V15.0087H11.028V9.51851C11.028 8.84245 10.8711 8.31672 10.5574 7.94209C10.2437 7.56746 9.82198 7.38053 9.29217 7.38053C8.76236 7.38053 8.3406 7.56824 8.0269 7.94209C7.7132 8.31672 7.55634 8.84245 7.55634 9.51851V15.0087H4.7832V4.8983H7.55634V6.2395C7.83728 5.79243 8.21582 5.43961 8.69195 5.17947C9.16739 4.92011 9.70277 4.79004 10.2974 4.79004C11.357 4.79004 12.2033 5.17401 12.8356 5.94041L12.8363 5.93964Z" fill="#FEFFFC"/>
        </svg>,
        link : "#"
    },{
        name : "Twitter",
        svg : <svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="none">
        <path d="M17.4615 1.5332C17.0516 1.98987 16.4834 2.27213 15.854 2.27213C15.774 2.27213 15.6941 2.26744 15.6167 2.25806C16.2733 1.82389 16.7803 1.14404 17.0329 0.332896C17.0329 0.332896 17.0337 0.332896 17.0337 0.331958C17.0686 0.223181 17.0983 0.113466 17.1222 0C16.6025 0.612341 15.8923 1.02682 15.0953 1.12528C14.9728 1.14122 14.8487 1.14872 14.7228 1.14872C14.6828 1.14872 14.6445 1.14779 14.6063 1.14497C14.3366 0.832708 14.0152 0.574831 13.6588 0.385409C13.2616 0.171605 12.8176 0.045949 12.3489 0.0300075C12.3107 0.0271943 12.2724 0.0262564 12.2324 0.0262564C11.8352 0.0262564 11.4542 0.104088 11.1021 0.247562C11.0119 0.284133 10.9243 0.323519 10.8384 0.369468C9.7225 0.946174 8.95019 2.19617 8.95019 3.64497C8.95019 3.94224 8.98337 4.23106 9.04376 4.50675C8.70185 4.49175 8.36334 4.45518 8.03163 4.40079C7.92531 4.38203 7.81898 4.36234 7.71351 4.33984C6.86723 4.16635 6.06009 3.86815 5.30991 3.46305C4.63884 3.10109 4.01285 2.65473 3.44384 2.13522C2.96499 1.70011 2.52697 1.21437 2.13573 0.683608C2.11872 0.661103 2.10168 0.63766 2.08552 0.615154C2.06255 0.653601 2.04131 0.692048 2.0226 0.732371C1.74873 1.26032 1.59393 1.87078 1.59393 2.52157C1.59393 2.54126 1.59391 2.56283 1.59476 2.58252C1.60156 3.07014 1.69511 3.53432 1.86267 3.9563C1.93411 4.14385 2.02089 4.32108 2.1204 4.48893C2.41384 4.98687 2.81442 5.40135 3.28732 5.6883C3.30858 5.7033 3.33069 5.71549 3.35281 5.72674C3.31879 5.73425 3.28394 5.74081 3.24907 5.74456C3.1521 5.75863 3.05174 5.76613 2.95138 5.76613C2.44786 5.76613 1.97922 5.59265 1.59563 5.29726C1.59308 5.32821 1.59305 5.36009 1.59305 5.39197C1.59305 6.42536 1.986 7.35746 2.6154 8.01482C3.10531 8.53057 3.73898 8.87659 4.44322 8.97787C4.18976 9.08008 3.91586 9.13541 3.63094 9.13541C3.32219 9.13541 3.0262 9.0707 2.75573 8.95161C3.15888 10.3967 4.36073 11.4563 5.79303 11.5032C4.91783 12.5056 3.68877 13.1283 2.32876 13.1283C1.48333 13.1283 0.688935 12.8873 0 12.4653C1.65599 14.0454 3.8155 15 6.17744 15C11.3972 15 15.6278 10.3357 15.6278 4.58083C15.6278 4.26388 15.615 3.95068 15.5895 3.64122C16.4528 3.26519 17.1375 2.49719 17.4615 1.53413V1.5332Z" fill="white"/>
        </svg>,
        link : "#"
    }]
    useEffect(()=>{ window.scrollTo({ top: 0,  behavior: 'smooth' })},[])
    return ( <div className="blog-details px-6 pt-16 md:pt-24 lg:pt-28 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className='blog-details-content py-5'>
                <div className=''>
                    <img src={img} alt="blog"/>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:grid-cols-2  py-4'>
                   <h3 className='capitalize flex items-center '> {t("blog-name")}</h3>
                   <div className='date-blog flex justify-end'>{t("blog-date")}</div>
                </div>
                <p>
                   {t("blog-desc-details")}
                </p>
                <div className=''>
                    <div className='flex justify-center py-4'><div className='blog-share p-2'>{t("share-by")}</div></div>
                    <div className='flex gap-3 items-center justify-center'>
                        {data.map((e)=>(
                            <a target='_blank' href={e.link} >
                                <div key={`Blog_Details_${e.name}`} className='blog-icon'>{e.svg}</div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className='p-5 blog-writer-container'>
                <div className='blog-writer w-80 top-28  flex justify-center flex-col items-center p-4'>
                    <div>
                        <img src={profile_img}  alt="profile" />
                    </div>
                    <h5 className='py-3 capitalize'> {t("blog-name-writer")} </h5>
                    <p>{t("blog-desc-writer")}</p>
                    <div className='py-3 flex gap-3 items-center justify-center'>
                        {data.map((e)=>(<div key={`Blog_Details_${e.name}`} className='blog-icon'>
                            <a target='_blank' href={e.link} >
                                <div key={`Blog_Details_${e.name}`} className='blog-icon'>{e.svg}</div>
                            </a>
                        </div>))}
                    </div>
                </div>
            </div>

        </div>
    </div> );
}

export default BlogDetails;