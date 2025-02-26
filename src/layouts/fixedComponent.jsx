import React from 'react';
import { useTranslation } from 'react-i18next';
import { contactData } from '../data/contactData';

function FixedComponent() {
    const {t , i18n } = useTranslation()
    return ( <div>
        <div className={`social-icons p-2 right-2 `}>
            <div>
                <a href={contactData.linkedin} target="_blank" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_134_2416)">
                        <path d="M27.7793 0H2.21484C0.990234 0 0 0.966797 0 2.16211V27.832C0 29.0273 0.990234 30 2.21484 30H27.7793C29.0039 30 30 29.0273 30 27.8379V2.16211C30 0.966797 29.0039 0 27.7793 0ZM8.90039 25.5645H4.44727V11.2441H8.90039V25.5645ZM6.67383 9.29297C5.24414 9.29297 4.08984 8.13867 4.08984 6.71484C4.08984 5.29102 5.24414 4.13672 6.67383 4.13672C8.09766 4.13672 9.25195 5.29102 9.25195 6.71484C9.25195 8.13281 8.09766 9.29297 6.67383 9.29297ZM25.5645 25.5645H21.1172V18.6035C21.1172 16.9453 21.0879 14.8066 18.8027 14.8066C16.4883 14.8066 16.1367 16.6172 16.1367 18.4863V25.5645H11.6953V11.2441H15.9609V13.2012H16.0195C16.6113 12.0762 18.0645 10.8867 20.2266 10.8867C24.7324 10.8867 25.5645 13.8516 25.5645 17.707V25.5645Z" fill="#27CBBE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_134_2416">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
            <div>
                <a href={contactData.instagram} target="_blank" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_134_2413)">
                        <path d="M15 2.70117C19.0078 2.70117 19.4824 2.71875 21.0586 2.78906C22.5234 2.85352 23.3145 3.09961 23.8418 3.30469C24.5391 3.57422 25.043 3.90234 25.5645 4.42383C26.0918 4.95117 26.4141 5.44922 26.6836 6.14648C26.8887 6.67383 27.1348 7.4707 27.1992 8.92969C27.2695 10.5117 27.2871 10.9863 27.2871 14.9883C27.2871 18.9961 27.2695 19.4707 27.1992 21.0469C27.1348 22.5117 26.8887 23.3027 26.6836 23.8301C26.4141 24.5273 26.0859 25.0313 25.5645 25.5527C25.0371 26.0801 24.5391 26.4023 23.8418 26.6719C23.3145 26.877 22.5176 27.123 21.0586 27.1875C19.4766 27.2578 19.002 27.2754 15 27.2754C10.9922 27.2754 10.5176 27.2578 8.94141 27.1875C7.47656 27.123 6.68555 26.877 6.1582 26.6719C5.46094 26.4023 4.95703 26.0742 4.43555 25.5527C3.9082 25.0254 3.58594 24.5273 3.31641 23.8301C3.11133 23.3027 2.86523 22.5059 2.80078 21.0469C2.73047 19.4648 2.71289 18.9902 2.71289 14.9883C2.71289 10.9805 2.73047 10.5059 2.80078 8.92969C2.86523 7.46484 3.11133 6.67383 3.31641 6.14648C3.58594 5.44922 3.91406 4.94531 4.43555 4.42383C4.96289 3.89648 5.46094 3.57422 6.1582 3.30469C6.68555 3.09961 7.48242 2.85352 8.94141 2.78906C10.5176 2.71875 10.9922 2.70117 15 2.70117ZM15 0C10.9277 0 10.418 0.0175781 8.81836 0.0878906C7.22461 0.158203 6.12891 0.416016 5.17969 0.785156C4.18945 1.17187 3.35156 1.68164 2.51953 2.51953C1.68164 3.35156 1.17188 4.18945 0.785156 5.17383C0.416016 6.12891 0.158203 7.21875 0.0878906 8.8125C0.0175781 10.418 0 10.9277 0 15C0 19.0723 0.0175781 19.582 0.0878906 21.1816C0.158203 22.7754 0.416016 23.8711 0.785156 24.8203C1.17188 25.8105 1.68164 26.6484 2.51953 27.4805C3.35156 28.3125 4.18945 28.8281 5.17383 29.209C6.12891 29.5781 7.21875 29.8359 8.8125 29.9062C10.4121 29.9766 10.9219 29.9941 14.9941 29.9941C19.0664 29.9941 19.5762 29.9766 21.1758 29.9062C22.7695 29.8359 23.8652 29.5781 24.8145 29.209C25.7988 28.8281 26.6367 28.3125 27.4688 27.4805C28.3008 26.6484 28.8164 25.8105 29.1973 24.8262C29.5664 23.8711 29.8242 22.7813 29.8945 21.1875C29.9648 19.5879 29.9824 19.0781 29.9824 15.0059C29.9824 10.9336 29.9648 10.4238 29.8945 8.82422C29.8242 7.23047 29.5664 6.13477 29.1973 5.18555C28.8281 4.18945 28.3184 3.35156 27.4805 2.51953C26.6484 1.6875 25.8105 1.17188 24.8262 0.791016C23.8711 0.421875 22.7813 0.164062 21.1875 0.09375C19.582 0.0175781 19.0723 0 15 0Z" fill="#27CBBE"/>
                        <path d="M15 7.29492C10.7461 7.29492 7.29492 10.7461 7.29492 15C7.29492 19.2539 10.7461 22.7051 15 22.7051C19.2539 22.7051 22.7051 19.2539 22.7051 15C22.7051 10.7461 19.2539 7.29492 15 7.29492ZM15 19.998C12.2402 19.998 10.002 17.7598 10.002 15C10.002 12.2402 12.2402 10.002 15 10.002C17.7598 10.002 19.998 12.2402 19.998 15C19.998 17.7598 17.7598 19.998 15 19.998Z" fill="#27CBBE"/>
                        <path d="M24.8086 6.99024C24.8086 7.98633 24 8.78907 23.0098 8.78907C22.0137 8.78907 21.2109 7.98047 21.2109 6.99024C21.2109 5.99414 22.0195 5.19141 23.0098 5.19141C24 5.19141 24.8086 6 24.8086 6.99024Z" fill="#27CBBE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_134_2413">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
            <div>
                <a href={contactData.facebook} target="_blank" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
                        <g clipPath="url(#clip0_134_2414)">
                        <path d="M15 0C6.7158 0 0 6.7158 0 15C0 22.0344 4.8432 27.9372 11.3766 29.5584V19.584H8.2836V15H11.3766V13.0248C11.3766 7.9194 13.6872 5.553 18.6996 5.553C19.65 5.553 21.2898 5.7396 21.9606 5.9256V10.0806C21.6066 10.0434 20.9916 10.0248 20.2278 10.0248C17.7684 10.0248 16.818 10.9566 16.818 13.3788V15H21.7176L20.8758 19.584H16.818V29.8902C24.2454 28.9932 30.0006 22.6692 30.0006 15C30 6.7158 23.2842 0 15 0Z" fill="#27CBBE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_134_2414">
                        <rect width="30" height="30" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>
            <div>
                <a href={`tel:${contactData.call}`} target="_blank" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 35 35" fill="none">
                        <g clipPath="url(#clip0_149_2894)">
                        <path d="M21.875 17.5H24.7917C24.7917 13.475 21.525 10.2083 17.5 10.2083V13.125C19.9208 13.125 21.875 15.0792 21.875 17.5ZM27.7083 17.5H30.625C30.625 10.2521 24.7479 4.375 17.5 4.375V7.29167C23.1438 7.29167 27.7083 11.8563 27.7083 17.5ZM29.1667 22.6042C27.3438 22.6042 25.5938 22.3125 23.9604 21.7729C23.8146 21.7292 23.6542 21.7 23.5083 21.7C23.1292 21.7 22.7646 21.8458 22.4729 22.1229L19.2646 25.3313C15.1375 23.2313 11.7542 19.8625 9.65417 15.7208L12.8625 12.4979C13.2708 12.1187 13.3875 11.55 13.2271 11.0396C12.6875 9.40625 12.3958 7.65625 12.3958 5.83333C12.3958 5.03125 11.7396 4.375 10.9375 4.375H5.83333C5.03125 4.375 4.375 5.03125 4.375 5.83333C4.375 19.5271 15.4729 30.625 29.1667 30.625C29.9688 30.625 30.625 29.9688 30.625 29.1667V24.0625C30.625 23.2604 29.9688 22.6042 29.1667 22.6042ZM7.33542 7.29167H9.52292C9.625 8.575 9.84375 9.84375 10.1792 11.0542L8.42917 12.8188C7.84583 11.0542 7.46667 9.21667 7.33542 7.29167ZM27.7083 27.6646C25.7833 27.5333 23.9167 27.1542 22.1667 26.5562L23.9167 24.8063C25.1562 25.1562 26.425 25.375 27.7083 25.4625V27.6646Z" fill="#27CBBE"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_149_2894">
                        <rect width="35" height="35" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>
                </a>
            </div>

        </div>
        <div style={{zIndex:"10"}} className={`fixed whatsapp-icon  left-2 bottom-7 cursor-pointer`}>
            <a href={`https://wa.me/${contactData.whatsapp}`} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 138 138" fill="none">
                <g filter="url(#filter0_f_119_429)">
                <g filter="url(#filter1_d_119_429)">
                <path d="M22.393 72.2485C22.39 80.5168 24.5446 88.5878 28.64 95.7022L22 120.011L46.8113 113.488C53.6472 117.226 61.344 119.196 69.1766 119.199H69.1967C94.9912 119.199 115.989 98.1514 116 72.2865C116.004 59.7507 111.14 47.9638 102.304 39.0967C93.4669 30.2298 81.7161 25.3441 69.1967 25.3386C43.398 25.3386 22.4032 46.3828 22.393 72.2485Z" fill="black"/>
                </g>
                <path d="M22.393 72.2485C22.39 80.5168 24.5446 88.5878 28.64 95.7022L22 120.011L46.8113 113.488C53.6472 117.226 61.344 119.196 69.1766 119.199H69.1967C94.9912 119.199 115.989 98.1514 116 72.2865C116.004 59.7507 111.14 47.9638 102.304 39.0967C93.4669 30.2298 81.7161 25.3441 69.1967 25.3386C43.398 25.3386 22.4032 46.3828 22.393 72.2485Z" fill="black" fillOpacity="0.2"/>
                </g>
                <path d="M24.0725 71.7602C24.0702 79.7124 26.1479 87.4772 30.0991 94.3212L23.6945 117.707L47.6257 111.432C54.219 115.025 61.6423 116.921 69.1972 116.924H69.2174C94.0963 116.924 114.349 96.6786 114.359 71.7954C114.364 59.7373 109.672 48.3993 101.149 39.8693C92.6263 31.3394 81.2918 26.6394 69.2157 26.634C44.3338 26.634 24.0826 46.8776 24.0725 71.7602Z" fill="url(#paint0_linear_119_429)"/>
                <path d="M22.4607 71.7443C22.4577 79.9833 24.6104 88.026 28.7022 95.1153L22.0681 119.338L46.8577 112.838C53.6875 116.563 61.3774 118.526 69.2033 118.529H69.2234C94.9952 118.529 115.975 97.5558 115.985 71.7823C115.99 59.2905 111.13 47.5454 102.302 38.7094C93.4724 29.8737 81.7318 25.0056 69.2234 24.9999C43.4474 24.9999 22.471 45.9698 22.4605 71.7443H22.4607ZM37.2231 93.8946L36.2977 92.4249C32.4069 86.2384 30.3528 79.0889 30.3562 71.7475C30.3644 50.3244 47.7992 32.8957 69.2382 32.8957C79.6203 32.8999 89.3776 36.9466 96.7167 44.2906C104.055 51.634 108.093 61.3965 108.09 71.7791C108.081 93.2028 90.6455 110.634 69.2236 110.634H69.2085C62.233 110.63 55.3923 108.758 49.4261 105.217L48.0062 104.376L33.2956 108.232L37.2231 93.8946Z" fill="url(#paint1_linear_119_429)"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M57.536 52.2029C56.6608 50.2573 55.7394 50.2181 54.9067 50.184C54.2257 50.1549 53.4459 50.1568 52.6675 50.1568C51.8886 50.1568 50.6226 50.4494 49.5521 51.6186C48.4809 52.7878 45.4622 55.6141 45.4622 61.3628C45.4622 67.1121 49.6494 72.6667 50.2331 73.4469C50.8173 74.2261 58.3164 86.3997 70.1924 91.0833C80.0626 94.9754 82.071 94.2012 84.2134 94.0065C86.3557 93.8118 91.1263 91.1806 92.0999 88.4523C93.0737 85.7242 93.0738 83.386 92.7817 82.8972C92.4894 82.4102 91.7105 82.1181 90.542 81.5338C89.3733 80.9494 83.629 78.1223 82.5579 77.7329C81.4867 77.3434 80.7076 77.1487 79.9287 78.3184C79.1496 79.4871 76.912 82.1181 76.2299 82.8973C75.5484 83.6781 74.8668 83.7755 73.6981 83.1911C72.5296 82.6051 68.7664 81.3725 64.3022 77.3922C60.8287 74.2954 58.4839 70.4708 57.8019 69.3011C57.1203 68.1325 57.7291 67.4995 58.3151 66.917C58.8398 66.3935 59.4838 65.5533 60.068 64.8709C60.651 64.1887 60.8459 63.7017 61.2353 62.9226C61.6248 62.1424 61.43 61.46 61.138 60.8758C60.8459 60.2914 58.5751 54.513 57.536 52.2029Z"
                className="call-animated" fill="white"/>
                <defs>
                <filter id="filter0_f_119_429" x="18.5863" y="21.9247" width="100.827" height="101.5" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feGaussianBlur stdDeviation="1.70686" result="effect1_foregroundBlur_119_429"/>
                </filter>
                <filter id="filter1_d_119_429" x="0.664278" y="0.588941" width="136.671" height="137.344" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="-3.41372"/>
                <feGaussianBlur stdDeviation="10.6679"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.21 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_119_429"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_119_429" result="shape"/>
                </filter>
                <linearGradient id="paint0_linear_119_429" x1="69.0264" y1="117.707" x2="69.0264" y2="26.6339" gradientUnits="userSpaceOnUse">
                <stop stopColor="#20B038"/>
                <stop offset="1" stopColor="#60D66A"/>
                </linearGradient>
                <linearGradient id="paint1_linear_119_429" x1="69.027" y1="119.339" x2="69.027" y2="24.9999" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F9F9F9"/>
                <stop offset="1" stopColor="white"/>
                </linearGradient>
                </defs>
                </svg>
            </a>
            
        </div>
    </div> );
}

export default FixedComponent;