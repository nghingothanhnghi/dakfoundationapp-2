import React, { useEffect, useRef } from 'react';
import styles from '../../../styles/how.module.css';

interface CloudDetailHowProps {
    setupAnimation: (element: HTMLElement) => void;
}

const CloudDetailHow: React.FC<CloudDetailHowProps> = ({ setupAnimation }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            setupAnimation(containerRef.current);
        }
    }, [setupAnimation]);


    return (
        <div ref={containerRef} className="flex flex-col items-center justify-center gap-8 z-10">
            <div className={styles.How_7_5282}>
                <div className={styles.Steps_7_5283}>
                    <div className={styles.Frame_77_7_5284}>
                        <div className={styles.Group_75_7_5285}><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_7_5285)">
                                <circle cx="32" cy="32" r="32" fill="#E2E2E2" />
                                <circle cx="32" cy="32" r="32" fill="url(#paint0_radial_7_5285)" fillOpacity="0.7" />
                            </g>
                            <g filter="url(#filter1_d_7_5285)">
                                <rect x="12.0869" y="12.0898" width="39.8222" height="39.8222" rx="19.9111" fill="#2F6EFF" />
                                <rect x="12.0869" y="12.0898" width="39.8222" height="39.8222" rx="19.9111" fill="url(#paint1_radial_7_5285)" fillOpacity="0.7" />
                                <rect x="12.0869" y="12.0898" width="39.8222" height="39.8222" rx="19.9111" fill="url(#paint2_radial_7_5285)" />
                            </g>
                            <path d="M32.9893 27.0174V37.1992H30.8366V29.0607H30.777L28.4453 30.5224V28.6133L30.9659 27.0174H32.9893Z" fill="white" />
                            <defs>
                                <filter id="filter0_d_7_5285" x="-58" y="-24" width="188" height="188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="4" dy="38" />
                                    <feGaussianBlur stdDeviation="31" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.12549 0 0 0 0 0.929412 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_5285" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_5285" result="shape" />
                                </filter>
                                <filter id="filter1_d_7_5285" x="-45.9131" y="-11.9102" width="163.822" height="163.822" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="4" dy="38" />
                                    <feGaussianBlur stdDeviation="31" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7_5285" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7_5285" result="shape" />
                                </filter>
                                <radialGradient id="paint0_radial_7_5285" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.459 12.5902) rotate(55.9679) scale(48.7417 48.7417)">
                                    <stop stopColor="white" />
                                    <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="paint1_radial_7_5285" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.5955 20.3861) rotate(51.0441) scale(33.4286 33.4286)">
                                    <stop stopColor="white" stopOpacity="0.59" />
                                    <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="paint2_radial_7_5285" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.454 46.9343) rotate(-93.6705) scale(34.0847 37.9888)">
                                    <stop stopOpacity="0.23" />
                                    <stop offset="0.861815" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        </div><span className={styles.DownloadDakAppOs_7_5289}>Download &#x2028;DAK App/OS</span>
                    </div>
                    <div className={styles.Frame_78_7_5290}>
                        <div className={styles.Group_75_37_2271}><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_37_2271)">
                                <circle cx="32" cy="32" r="32" fill="#E2E2E2" />
                                <circle cx="32" cy="32" r="32" fill="url(#paint0_radial_37_2271)" fillOpacity="0.7" />
                            </g>
                            <g filter="url(#filter1_d_37_2271)">
                                <rect x="12.0869" y="12.0898" width="39.8222" height="39.8222" rx="19.9111" fill="#2F6EFF" />
                                <rect x="12.0869" y="12.0898" width="39.8222" height="39.8222" rx="19.9111" fill="url(#paint1_radial_37_2271)" fillOpacity="0.7" />
                                <rect x="12.0869" y="12.0898" width="39.8222" height="39.8222" rx="19.9111" fill="url(#paint2_radial_37_2271)" />
                            </g>
                            <path d="M28.5597 37.1992V35.6481L32.1839 32.2923C32.4922 31.994 32.7507 31.7255 32.9595 31.4869C33.1716 31.2482 33.3324 31.0146 33.4418 30.7859C33.5511 30.5539 33.6058 30.3036 33.6058 30.0352C33.6058 29.7369 33.5379 29.48 33.402 29.2646C33.2661 29.0458 33.0805 28.8784 32.8452 28.7624C32.6098 28.6431 32.343 28.5835 32.0447 28.5835C31.7332 28.5835 31.4614 28.6464 31.2294 28.7724C30.9974 28.8983 30.8184 29.079 30.6925 29.3143C30.5665 29.5496 30.5036 29.8297 30.5036 30.1545H28.4602C28.4602 29.4883 28.611 28.9099 28.9126 28.4194C29.2143 27.9289 29.6368 27.5494 30.1804 27.2809C30.724 27.0124 31.3504 26.8782 32.0597 26.8782C32.7888 26.8782 33.4235 27.0075 33.9638 27.266C34.5073 27.5212 34.9299 27.8758 35.2315 28.3299C35.5331 28.784 35.6839 29.3043 35.6839 29.891C35.6839 30.2754 35.6077 30.6549 35.4553 31.0295C35.3061 31.404 35.0393 31.82 34.6548 32.2773C34.2704 32.7314 33.7285 33.2766 33.0291 33.913L31.5426 35.3697V35.4393H35.8182V37.1992H28.5597Z" fill="white" />
                            <defs>
                                <filter id="filter0_d_37_2271" x="-58" y="-24" width="188" height="188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="4" dy="38" />
                                    <feGaussianBlur stdDeviation="31" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.12549 0 0 0 0 0.929412 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_2271" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_2271" result="shape" />
                                </filter>
                                <filter id="filter1_d_37_2271" x="-45.9131" y="-11.9102" width="163.822" height="163.822" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="4" dy="38" />
                                    <feGaussianBlur stdDeviation="31" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_2271" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_2271" result="shape" />
                                </filter>
                                <radialGradient id="paint0_radial_37_2271" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.459 12.5902) rotate(55.9679) scale(48.7417 48.7417)">
                                    <stop stopColor="white" />
                                    <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="paint1_radial_37_2271" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.5955 20.3861) rotate(51.0441) scale(33.4286 33.4286)">
                                    <stop stopColor="white" stopOpacity="0.59" />
                                    <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="paint2_radial_37_2271" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.454 46.9343) rotate(-93.6705) scale(34.0847 37.9888)">
                                    <stop stopOpacity="0.23" />
                                    <stop offset="0.861815" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        </div><span className={styles.ChooseWhatToShareComputeStorage_7_5295}>Choose what to share (Compute/Storage)</span>
                    </div>
                    <div className={styles.Frame_79_7_5296}>
                        <div className={styles.Group_75_37_2276}><svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_37_2276)">
                                <circle cx="32" cy="32" r="32" fill="#E2E2E2" />
                                <circle cx="32" cy="32" r="32" fill="url(#paint0_radial_37_2276)" fillOpacity="0.7" />
                            </g>
                            <g filter="url(#filter1_d_37_2276)">
                                <rect x="12.0869" y="12.0898" width="39.8222" height="39.8222" rx="19.9111" fill="#2F6EFF" />
                                <rect x="12.0869" y="12.0898" width="39.8222" height="39.8222" rx="19.9111" fill="url(#paint1_radial_37_2276)" fillOpacity="0.7" />
                                <rect x="12.0869" y="12.0898" width="39.8222" height="39.8222" rx="19.9111" fill="url(#paint2_radial_37_2276)" />
                            </g>
                            <path d="M32.3232 37.3384C31.5807 37.3384 30.9195 37.2108 30.3395 36.9556C29.7628 36.6971 29.3071 36.3424 28.9723 35.8917C28.6409 35.4376 28.4702 34.9139 28.4602 34.3207H30.6278C30.6411 34.5692 30.7223 34.788 30.8714 34.9769C31.0239 35.1625 31.2261 35.3067 31.478 35.4094C31.7299 35.5122 32.0133 35.5636 32.3281 35.5636C32.6562 35.5636 32.9463 35.5056 33.1982 35.3896C33.45 35.2736 33.6473 35.1128 33.7898 34.9073C33.9323 34.7018 34.0036 34.4648 34.0036 34.1964C34.0036 33.9246 33.9273 33.6843 33.7749 33.4755C33.6257 33.2634 33.4103 33.0977 33.1286 32.9783C32.8501 32.859 32.5187 32.7994 32.1342 32.7994H31.1847V31.2184H32.1342C32.459 31.2184 32.7457 31.162 32.9943 31.0494C33.2462 30.9367 33.4418 30.7809 33.581 30.582C33.7202 30.3799 33.7898 30.1445 33.7898 29.8761C33.7898 29.6209 33.7285 29.3971 33.6058 29.2049C33.4865 29.0094 33.3175 28.8569 33.0987 28.7475C32.8833 28.6381 32.6314 28.5835 32.343 28.5835C32.0514 28.5835 31.7846 28.6365 31.5426 28.7425C31.3007 28.8453 31.1068 28.9928 30.9609 29.185C30.8151 29.3772 30.7372 29.6026 30.7273 29.8612H28.6641C28.674 29.2745 28.8414 28.7575 29.1662 28.31C29.491 27.8626 29.9285 27.5129 30.4787 27.261C31.0322 27.0058 31.657 26.8782 32.353 26.8782C33.0556 26.8782 33.6705 27.0058 34.1974 27.261C34.7244 27.5162 35.1338 27.8609 35.4254 28.2951C35.7204 28.726 35.8662 29.2099 35.8629 29.7468C35.8662 30.3169 35.6889 30.7925 35.331 31.1737C34.9763 31.5548 34.514 31.7968 33.9439 31.8995V31.979C34.6929 32.0752 35.263 32.3353 35.6541 32.7596C36.0485 33.1805 36.2441 33.7075 36.2408 34.3406C36.2441 34.9206 36.0767 35.436 35.7386 35.8867C35.4039 36.3375 34.9415 36.6921 34.3516 36.9506C33.7616 37.2092 33.0855 37.3384 32.3232 37.3384Z" fill="white" />
                            <defs>
                                <filter id="filter0_d_37_2276" x="-58" y="-24" width="188" height="188" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="4" dy="38" />
                                    <feGaussianBlur stdDeviation="31" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.12549 0 0 0 0 0.929412 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_2276" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_2276" result="shape" />
                                </filter>
                                <filter id="filter1_d_37_2276" x="-45.9131" y="-11.9102" width="163.822" height="163.822" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="4" dy="38" />
                                    <feGaussianBlur stdDeviation="31" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_2276" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_2276" result="shape" />
                                </filter>
                                <radialGradient id="paint0_radial_37_2276" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.459 12.5902) rotate(55.9679) scale(48.7417 48.7417)">
                                    <stop stopColor="white" />
                                    <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="paint1_radial_37_2276" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(22.5955 20.3861) rotate(51.0441) scale(33.4286 33.4286)">
                                    <stop stopColor="white" stopOpacity="0.59" />
                                    <stop offset="0.697917" stopColor="white" stopOpacity="0" />
                                    <stop offset="1" stopColor="white" stopOpacity="0" />
                                </radialGradient>
                                <radialGradient id="paint2_radial_37_2276" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(46.454 46.9343) rotate(-93.6705) scale(34.0847 37.9888)">
                                    <stop stopOpacity="0.23" />
                                    <stop offset="0.861815" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                        </svg>
                        </div><span className={styles.EarnDakTokens_7_5301}>Earn DAK Tokens </span>
                    </div>
                </div>
                <div className={styles.ButtonLg_154_3666}>
                    <div className={styles.Rectangle_48_154_3663}></div>
                    <div className={styles.PrimaryButton_154_3664}><span className={styles.ReadMore_154_3665}>Join the Grid</span></div>
                </div>
            </div>
        </div>
    );
};

export default CloudDetailHow;
