// Add the CSS styles dynamically
const style = document.createElement("style");
style.textContent = `
  .language-title-border {
    margin-bottom: 60px;
    color: #2c3e50;
    text-align: center;
    padding: 40px 0;
    padding-top: 70px;
    font-weight: 600;
    position: relative;
    background-color: #f9f9f9; /* Light background for contrast */
    border: 4px solid #3498db; /* Solid border */
    border-radius: 10px; /* Rounded corners */
    box-shadow: 0 0 20px rgb(139, 189, 240); /* Subtle shadow */
    font-family: 'Lato', sans-serif; /* Modern font */
  }

  /* Icons representing the five senses */
  .language-title-border .sensor-icon {
    position: absolute;
    font-size: 24px; /* Icon size */
    color: #5c81a5; /* Icon color */
    opacity: 0.8; /* Slightly transparent */
    animation: floatIcons 5s infinite ease-in-out;
    background-color: #f9f9f9; /* Match the background */
    padding: 5px; /* Add padding to blend with the border */
    border-radius: 50%; /* Circular shape */
    border: 2px solid #57a3f09c; /* Match the border */
  }

  /* Position each icon on the border */
  .language-title-border .sensor-icon.ear {
    top: -15px; /* Adjust to stick to the top border */
    left: 20%;
  }

  .language-title-border .sensor-icon.eye {
    top: -15px; /* Adjust to stick to the top border */
    right: 20%;
  }

  .language-title-border .sensor-icon.hand {
    bottom: -15px; /* Adjust to stick to the bottom border */
    left: 20%;
  }

  .language-title-border .sensor-icon.mind {
    bottom: -15px; /* Adjust to stick to the bottom border */
    right: 20%;
  }

  .language-title-border .sensor-icon.heart {
    top: 20%;
    left: 47%;
    transform: translate(-50%, -50%);
  }

  /* Animation for floating icons */
  @keyframes floatIcons {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
`;
document.head.appendChild(style);

const urlParams = new URLSearchParams(window.location.search);
const language = urlParams.get("language");
const level = urlParams.get("level");

const chapters = {
  /* Java videos */
  java: {
    /* Java Beginner */
    beginner: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/U8wrZRYAnmI?si=vPYeXA6HKw548CD1",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/4ekASokneGU?si=QRdVEb2vFTZqvxlb",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/qgMH6jOOFOE?si=0NiFimhVmywnJfkU",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/ss7BtLrbxp4?si=R_o6D45af6X9_VGF",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/f5YdkIzNmfM?si=wt62Tk8SZvEsfr8z",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/WZXq5_9_JDs?si=uSe76xto_0Dj_a3N",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/HBnB69yFf_4?si=8TLE3US81eziNaI_",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/L5_7XQR0r0w?si=Sw8bVqRt7nw_7fTc",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/apW3UWr_dhA?si=HQtmKDxDxvjA3bWS",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/xwvdENKCkLg?si=keNvlpjClgIlIPOZ",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/_NfwcH5zKpA?si=7nbGu2mGsxhYDs_x",
      },
      { title: "Quiz", url: "quiz.html?language=java&level=beginner" },
    ],
    /* Java Intermediate */
    intermediate: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/vW53w7me4AE?si=4EGhMhtF-Yhg4K08",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/Qi09pWsc7nA?si=fRa6-5jYB-LKSBpr",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/fpuWkZs51aM?si=F_Zef7GSmU9bvnQI",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/jU5ACV5MucM?si=UXzomEj2n-t-PyRR",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/uoLgfgcB3XQ?si=JPrC7hgjC1WKSz17",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/BRcY2vIr-EQ?si=RAhL9afWqz2hvtN3",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/rW2OppsgJjQ?si=GQykw2L9YFiAp17o",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/Sj2kCLjZZgk?si=kMG4wEaeYn_svteu",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/1QhS0aTiFhQ?si=RW3zuC2c25Clfe83",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/CfJCamxV3NQ?si=U4nZGqgCHoUuzY47",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/C_etrOreNQM?si=F_-3LShRpnc4FQaI",
      },
      { title: "Quiz", url: "quiz.html?language=java&level=intermediate" },
    ],
    /* Java Advanced */

    advanced: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/dFuVh_Bzy9c?si=n09h69P1s8ARh69m",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/W91VFTTAM3s?si=jvz6WYU3jp9bE8mD",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/NTN8lO6yeqw?si=DZSAd24IHgWWWPI4",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/u2oT-qogaFI?si=yfpA9zWp9t12S1Al",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/CLzgS08equQ?si=RhPfstq_6SDLVLpm",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/Bua6LQO2vQ8?si=rZVfzGPqSw_mXjGg",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/mlVYooy93sE?si=tovuTeFhT1oJSpJG",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/6U-0aUBiO5A?si=9BZpGXRmidNO1GR_",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/8C_YRYXCuwc?si=sF8iS9HZlzq2nlQc",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/OBYeDzgsOxc?si=otg09czui8m56NNm",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/dCt9sfZV8Sg?si=jscPt0e7RTIcQjHp",
      },
      { title: "Quiz", url: "quiz.html?language=java&level=advanced" },
    ],
  },

  /* Dart videos */
  dart: {
    /* Dart Beginner */
    beginner: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/1ukSR1GRtMU?si=2f0tr_60AJ0d4St4",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/bKueYVtV0eA?si=jQrQwB6EJUGw9YJ9",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/LtlsX_lCfK4?si=NUwL9zNqa0uz0dnt",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/FLQ-Vhw1NYQ?si=_tDnbqwuALh2X61a",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/TSIhiZ5jRB0?si=OOhQj-sG6WHaB4iT",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/C5lpPjoivaw?si=3aevTx3Z0nVM_QHn",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/km2P_KQJyO0?si=u5Oa3Wsmej2SrCF5",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/zwPBMg3SHVU?si=rEnc5JZrvrntDMC0",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/Hxh6nNHSUjo?si=zELEXdHs6Y9i4Jzo",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/ABmqtI7ec7E?si=5JyzsWDvV7HtqVig",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/H0cJ0gUlgE8?si=BRAl_zcnuyXTaAhr",
      },
      {
        title: "Chapter 12",
        url: "https://www.youtube.com/embed/a6oKFvGuTH4?si=GHTTepte7zN5NIO_",
      },
      { title: "Quiz", url: "quiz.html?language=dart&level=beginner" },
    ],
    /* Dart Intermediate */
    intermediate: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/siFU8c_Heu0?si=c3JA3GBb-4p819Wt",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/RdPkFd6_fTA?si=_UwYSwkf3XzCdkek",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/zNZvuP8h1vs?si=GZ5yWEKaG7wuaLHg",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/c063ddhWafo?si=Ck7Sel75JW9i1nOL",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/p5dkB3Mrxdo?si=5KlV0yjPjFknfMwj",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/_AC90CiDoKA?si=8QNIADnB4mFpsRee",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/QgQJJ0y0A6w?si=-7xjhlxApC6RQfsp",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/XIxahpXU_QE?si=vvnrrzlqylf-1fFm",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/jAxNZYX7mHM?si=nfvwpj2Doyvkpg8N",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/aqePcMyeoIY?si=pfcWetL6BUTmbfiz",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/WghpP9W2vXo?si=MjXCHk74tXRYCT8c",
      },
      {
        title: "Chapter 12",
        url: "https://www.youtube.com/embed/WG5tJIAq5b0?si=rkUcMHltqqrjc1TY",
      },
      { title: "Quiz", url: "quiz.html?language=dart&level=intermediate" },
    ],
    /* Dart Advanced */
    advanced: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/pDzQGolJayE?si=hrHtO0R_s_xwJ45n",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/nHsxIQ9KMn0?si=7EHdB1xsRnFC9KEZ",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/WdXcJdhWcEY?si=qQbqb_A2fw6wGP7U",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/AqsmaT1U6sQ?si=FBmfRdTdw-PVXwFX",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/9lCQhwo8WT4?si=wGvQV6Udglub_PWB",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/HemchBJQdgM?si=7i5YbflTjbwaubxE",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/KIAwGfnoteE?si=bymcbTWPyf4k2lgV",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/c7Ap0iLwv6k?si=qhJTc1f5wPhmhITL",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/nLlVANBmFJM?si=wj093uscWx2ksF-l",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/NDulhXVcLuI?si=91FEAN24GDTJoA9S",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/TdWhYERuv7g?si=UYIBJs1e-yZJoT86",
      },
      {
        title: "Chapter 12",
        url: "https://www.youtube.com/embed/j6c_vHdbUfg?si=KIM_TDGhp7k3xHVb",
      },

      { title: "Quiz", url: "quiz.html?language=dart&level=advanced" },
    ],
  },

  /* Python videos */
  python: {
    /* Python Beginner */
    beginner: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/EU8eayHWoZg?si=es1zMJ3DUP1dLXSv",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/wWwr0tDSqnE?si=LMS7qcP40vDZIP4l",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/kEuVvUc1Zec?si=gu-iuP-eO-V70FS3",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/fbek7n6ecWM?si=k48ADwJqVsWfQOPK",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/zv3cVJHCqXA?si=9Zdd87plOL9MhGob",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/bQQqxysLIGE?si=uPac1Fdz1t7pCUan",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/E850-MF22P0?si=9foRKpu35TqL1DCI",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/5yhn0MFLcu8?si=5yWXKkri0_JT74qA",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/T1j2tfZK7OI?si=ocdF95NrQGoBIixn",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/T1j2tfZK7OI?si=KYqJby0isiFct-5R",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/o1dlxoHxdHU?si=6GvXDReSjAJ-QKI2",
      },
      {
        title: "Chapter 12",
        url: "https://www.youtube.com/embed/Zs9u8TAv4_k?si=Fyr4_L8G18MHfBjU",
      },
      { title: "Quiz", url: "quiz.html?language=python&level=beginner" },
    ],
    /* Python Intermediate */
    intermediate: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/HQqqNBZosn8?si=DNKeraCtI-gtW4A8",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/LrRh-V-hYEc?si=QBgdPNPwEsI05CY8",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/5pPKYWqkoek?si=hn7Xu7b2iN4Jf2Ob",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/zqVmqtTLmgw?si=e3UjauFIoCbokkqK",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/oYaGJBMoXok?si=c3mlS4UsNXHmW-ZC",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/J9luo4cODzM?si=gnnjs-7pN-amzPmK",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/IBOHc87yFYw?si=JnwcGPEQr5CIwCK7",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/Iui6K2STtbA?si=gvn9k7QYlHGuQ3vo",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/beA8IsY3mQs?si=fUZLrXKvbpUH5I6Z",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/4PaSlXNjawM?si=8Oyh5EnPqTlrbb69",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/LrOAl8vUFHY?si=5z27ZlLBosjlvzaT",
      },
      {
        title: "Chapter 12",
        url: "https://www.youtube.com/embed/rAvD-6MpTw4?si=LY07d78SdGK0F6X-",
      },
      { title: "Quiz", url: "quiz.html?language=python&level=intermediate" },
    ],
    /* Python Advanced */
    advanced: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/nrCAxXfRU28?si=E5bFdbMGte2XkhD9",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/C9ZEGqGHXms?si=4Z3O5uA-YNuLyIoj",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/sKW-zdYZNX4?si=K5y4PZFIYUIL9WNI",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/LtKAXFRtxhQ?si=9Id0et-ZAWwZCfU7",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/Uei2ILcxuPs?si=dwLQD1Iu_rTAgH-3",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/_eczHOiFMZA?si=oL5ccEBSVJoBEU_1",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/mzpQgMNdR0g?si=Fx-PapzzJbHqS7Ek",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/BM4S0lNUytA?si=aTxPUsvwTViQQdhT",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/vkglhX-aoDI?si=4m398jRnhKgmkPrE",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/KnAyziNnuI0?si=YdS2UOVw9Mjm_9u0",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/1ty7D--lbXU?si=teBT8w_wiYAQZ3Pp",
      },
      {
        title: "Chapter 12",
        url: "https://www.youtube.com/embed/MW3eV2J65hM?si=Cp52qPSbJb3qigfl",
      },
      { title: "Quiz", url: "quiz.html?language=python&level=advanced" },
    ],
  },

  /* React videos */
  react: {
    /* React beginner */
    beginner: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/ur6I5m2nTvk?si=7KI5eakBSBGMk_9P",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/pflXnUNMsNk?si=kkOidgoWlgV5l-m3",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/_YydVvnjNFE?si=2EZIO8T0SnCCzBAZ",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/1FiIYaRr148?si=PFrDmN--Zx58wr-r",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/c9Sg9jDitm8?si=rF2N_lcutWEvErSM",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/W-pg1r6-T0g?si=20oGcMkwmAP3AzDr",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/iMCM1NceGJY?si=NyqTOOa4Xt2n3tIS",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/QhX25YGf8qg?si=-FlFmfNh0GAju4Gx",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/uLHFPt9B2Os?si=tuvkxdlwRxX6Mx0c",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/SGEitne8N-Q?si=FB7vu69U2pTqc0-T",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/LH_SoXiu_Hk?si=K9JmG9L53eLkkCy3",
      },
      {
        title: "Chapter 12",
        url: "https://www.youtube.com/embed/oVA9JgTTiT0?si=sygtzo0mEhBAInJp",
      },
      { title: "Quiz", url: "quiz.html?language=react&level=beginner" },
    ],
    /* React intermediate */
    intermediate: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/IW-SEiRjUsI?si=YfFghlfxMT1EZZ-b",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/R2eqAgR_KlU?si=u1RdbmqX6sQ5RmVr",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/C4ikFaP0a5o?si=9Kjh92LV3LGgVo90",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/cFVHTazhb7I?si=DVlQxwGjwN9KzCeW",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/IY5OBeL9LNE?si=Cozz8pobCPsW8Ih3",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/wtvpQ9liu4g?si=k5Vujy3ehLT9e02G",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/OmQCU-3KPms?si=ZZmrdhClh6qauG6r",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/cS4PgI3zBzY?si=aHzI9LsXLttCMmg0",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/PMX6GP1TXGo?si=gAFwzaDTwDyCj3sv",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/-40TBdSRk6E?si=aZSQXYnoHRjz5GEz",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/llPRMRl_ZTM?si=tbyBp9L54qA3dOI4",
      },
      {
        title: "Chapter 12",
        url: "https://www.youtube.com/embed/EaNCi8o8H0A?si=5PPf5pbivrmga0Dl",
      },
      { title: "Quiz", url: "quiz.html?language=react&level=intermediate" },
    ],
    /* React advanced */
    advanced: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/C3oDJdlrEKE?si=O1ndDHCe5RxuiV5M",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/5NewXsBnoKw?si=ywR50vjaKcZJ4aPI",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/2s5KNg_5_LA?si=8bJ8dYfYVEUxsFLv",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/RULLuEC5C7Y?si=30vSO2LP9tF7FJz-",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/pYh3Z-iBc4E?si=hRQQSQgM89eWpsFv",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/t4Q1s8WntlA?si=aAqn90maxngAqPCg",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/urzVC5Zr-JM?si=Zb6XWntfcy39oLGM",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/ftLy78R8xrg?si=GQTqAUg2QookwgSz",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/o_ErcEKV23I?si=n33cOyqf__0UMyjV",
      },
      {
        title: "Chapter 10",
        url: "https://www.youtube.com/embed/LEa48P-KtCw?si=hZGsC61tQSZiLT5a",
      },
      {
        title: "Chapter 11",
        url: "https://www.youtube.com/embed/BTnp1TiiSMg?si=Ktq9HE8Th1NsUZsL",
      },
      { title: "Quiz", url: "quiz.html?language=react&level=advanced" },
    ],
  },

  /* JavaS videos */
  javas: {
    /* JavaS beginner */
    beginner: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/_jlPywA4dKs?si=aJMrRWAeHAJHp0WU",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/a1HuOeMto2c?si=1oVc937W7lCrJnk1",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/nt9ZrbJsLB0?si=VO_HQfYb50WC22R7",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/CRRcYpxb_bY?si=jSfhuMurWkmv33N1",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/mbkKbhSbWKA?si=gxVctl2NWPCRDQ1V",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/YptrAq5O-jQ?si=Li6ecjZI4JniV-LU",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/3JJyYmkXMSA?si=CaNzk4eEtTrC-P_3",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/1qm_SSLunkw?si=tvMXXQ_QikINnaVs",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/15oNAHVuwIE?si=lzGe8U5GgiASHJ8L",
      },
      { title: "Quiz", url: "quiz.html?language=javas&level=beginner" },
    ],
    /* JavaS intermediate */
    intermediate: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/opz_-qeDi2E?si=5TxJ3XRCafMCqPMg",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/JQ-wmaarWTQ?si=obJML5HXGG2QlSEQ",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/MMC8FUggB7s?si=rDSrYBGL8_mx9NTw",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/pxBT4QgNhh4?si=Sz0gD9gLedNeyR4L",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/jrI0WFCCLWY?si=6Z5L6DfYqAfpeGpK",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/ZOOrhOJQ4q0?si=2K3KsEa5uM0UtYGH",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/Pi7sqKg11O0?si=DLAJbL-omJDk8MV1",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/C3LkAdsQKz0?si=-2XcMjt-bXTadrqx",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/in_At_MyLiA?si=wtGWmVUwZ-8mqPog",
      },
      { title: "Quiz", url: "quiz.html?language=javas&level=intermediate" },
    ],
    /* JavaS advanced */
    advanced: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/EBjQytpLt0o?si=uHLOA10PntZac9Nl",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/u4b0sL8jRbU?si=puPiKX49xOLxSIeC",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/6fDBz8u1MkE?si=7kyn-xpvBIfynckO",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/w6nQmCetNuQ?si=zy87V3Ot-OnRQ1nS",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/4H5363dWbK0?si=NYgh1EbDnbchuRV0",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/LQGTb112N_c?si=BjdSIXLhwvOS3WbQ",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/6m6QWuhLGZc?si=ZbiW2taM_BesPWoS",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/Au7JCqkVq9M?si=wegH1H03eXQJ6Q5k",
      },
      {
        title: "Chapter 9",
        url: "https://www.youtube.com/embed/TxR0I9HHwag?si=xKiS27ryMw8jhF2A",
      },
      {
        title: "Chapter10",
        url: "https://www.youtube.com/embed/CflECDZSyd8?si=hIYD3xcXpT-IFPsM",
      },
      { title: "Quiz", url: "quiz.html?language=javas&level=advanced" },
    ],
  },

  /* Swift videos */
  swift: {
    /* Swift beginner */
    beginner: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/bjPENR6sHRU?si=2qqqSA0yNfOO5Drj",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/xKf6iNilRYI?si=Z9zjPkieNqWFgKst",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/48v8FH46mQs?si=xUKsyTMq3bpCZQBk",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/fffG55Ei1Qc?si=B5DQXIFSJOmHoCFl",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/ys3dPSKssgk?si=OELjmf0n-ElsjAqo",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/8Z0mImrIITA?si=6wuSWEFBrF2_BPvK",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/9K89xEuSiYA?si=0VdQ4wLImSp5I4oR",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/rBotA3jwWkY?si=jsXAAMW4HRRKG-xO",
      },
      { title: "Quiz", url: "quiz.html?language=swift&level=beginner" },
    ],
    /* Swift intermediate */
    intermediate: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/DTd7HHSAw-4?si=5e4VsY4XwSGRQrnp",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/_qxm-MvRw_Y?si=3aG9Dg5ezm3RrKJl",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/ELRH8vkOlNs?si=gUyPCfab6nXr5qeI",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/I2mu9gMUbF0?si=suMnR-m_qmC4CX-U",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/8TpLDqOO6VE?si=OozFcAZRC35OgJdk",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/TqN9Asm0Zvo?si=-66K9sCKyhQDpRII",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/-uwSmesQKHE?si=AoPJ8BGLolz7bZNK",
      },
      {
        title: "Chapter 8",
        url: "https://www.youtube.com/embed/x2K2z1jSkpo?si=fMngK15dRB5oQHxd",
      },
      { title: "Quiz", url: "quiz.html?language=swift&level=intermediate" },
    ],
    /* Swift advanced */
    advanced: [
      {
        title: "Chapter 1",
        url: "https://www.youtube.com/embed/3dlUT9Mgl-4?si=cXtTok135b0ErjI0",
      },
      {
        title: "Chapter 2",
        url: "https://www.youtube.com/embed/GztWJaGwMyA?si=wN-z3rZ8M-O-xwzZ",
      },
      {
        title: "Chapter 3",
        url: "https://www.youtube.com/embed/XCrESmTB2U0?si=jeICq4VyUvuCbcdH",
      },
      {
        title: "Chapter 4",
        url: "https://www.youtube.com/embed/LoEbMVozM58?si=_UGV81_RaOxgq64z",
      },
      {
        title: "Chapter 5",
        url: "https://www.youtube.com/embed/NZNGH88-jI0?si=Y2X09JA2-zbvwWQp",
      },
      {
        title: "Chapter 6",
        url: "https://www.youtube.com/embed/WvLdCPaHptQ?si=MGAuUtRM-hrS2xdu",
      },
      {
        title: "Chapter 7",
        url: "https://www.youtube.com/embed/7E3rSnafSy0?si=JmbfyhqJqqhymx6s",
      },
      { title: "Quiz", url: "quiz.html?language=swift&level=advanced" },
    ],
  },
};

// Set chapter title with language and level
const languageTitle = document.getElementById("chapter-title");
languageTitle.textContent = `${language.toUpperCase()} - ${
  level.charAt(0).toUpperCase() + level.slice(1)
} Chapters`;

// Add Font Awesome icons for the five senses
const sensorIcons = [
  { className: "ear fas fa-ear-listen", title: "Hearing" }, // Ear icon
  { className: "eye fas fa-eye", title: "Seeing" }, // Eye icon
  { className: "hand fas fa-hand-paper", title: "Touching" }, // Hand icon
  { className: "mind fas fa-brain", title: "Thinking" }, // Mind icon
  { className: "heart fas fa-heart", title: "Feeling" }, // Heart icon
];

sensorIcons.forEach((sensor) => {
  const iconElement = document.createElement("i");
  iconElement.className = `sensor-icon ${sensor.className}`;
  iconElement.setAttribute("title", sensor.title); // Add a tooltip for accessibility
  languageTitle.appendChild(iconElement);
});

// Populate the chapters container with buttons
const chaptersContainer = document.getElementById("chapters-container");
chapters[language][level].forEach((chapter) => {
  const button = document.createElement("button");
  button.textContent = chapter.title;
  button.onclick = () => {
    location.href = `video.html?url=${encodeURIComponent(
      chapter.url
    )}&title=${encodeURIComponent(chapter.title)}`;
  };
  chaptersContainer.appendChild(button);
});

// Add the language title border class to the title element
languageTitle.classList.add("language-title-border");
