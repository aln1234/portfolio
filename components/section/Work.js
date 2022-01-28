import React from "react";
import Button from "../Button";
import Card from "../Card";


const Work = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 md:gap-10">
        <Card
          src="https://lh3.googleusercontent.com/orCUpU5GVQw0v0Wpep8sBGxYheDnyvZb0IgSkYAmINY5vdlgRWeLW7mKiMeKbrIt2wOwj_I7sLR-Qat8Esk4Er_1RYFFqvefzcsKsUmQU3St7lpBgulAG-UwRRtJHvjaAEH3QMbKGJaT9VRdZPpN3ZKqmw6bzZSR59_UgqjQK6G6vywJLaJxoE_kTWQgkM-_u4ofIUSis2r0j349YyS1-gQo3NzXTyyxOu9m8UJYcA9f7qNfwUeG4EyLp4nZNsRZomSIBBxf9qSoYMlM0SEXQAyxmlFkBhbFyZGleWbUAIC-JzYfCXEZsv1rOBPAAGJkGwSyqOXBr3IiB5zK1Vx1bYCAgIkUe2ltfTffPW6PXxSF0nnAPoni5LSVM8NINOYh6G0XQpSqxV-5GcDPzJtOS9EDAYpGtpf4fsbwQts_mXFKqRx2KROiRh0KisT7jg2MQIV47DjPgx27ph6bZdOWIKKlmBAk1I_WuEryrrXWTmQraVq1e3YsiU2PPelFHGfI-7ZZxeobbEdhgv-y7TC8sqacIHh-HwP-OxLEwmT8I4D24YotwduPA2VTlj59_-9Vli3I2w6pJCUf2OxxP5XC08EBxBA5qYSpW4Hb4633VSBp5kGNmZfuiHZwKNZ22QjZvKUJ1Ey-f9DJ6ykIKCO8TtVNLmVMbOb8-NaE9Qeu29fKph6M5eFpUqCRhVUoi3BjVpAiCn7FU1NdGD8RubBzJhFZ=w987-h830-no?authuser=0"
          alt="Old portfolio image"
          link="https://everestsalescompany.com/"
          title="Company Profile Site"
          date="Feb 18"
          description="This is my first freelance project displaying information related to a company."
        />
        <Card
          src="https://lh3.googleusercontent.com/zKIr0LfQQinEJBD20eCAUOttTAeYIbypJJiZyRN_KkEhPUrOoVRoI3K8xRcPDdJrdWc7OoEpcI08jZm-l0eyqgBmfy4379FWm5YlX1sehgiUEVbEz_wCr4PUTe297dRXuedWBUGZ-Z5Mwy3Yyy0A4kf8TM4YcUo-a6he97HcC3YqW8E3GEIzJL7XzDJtfAy-kyW-BK_Nd0zfLPZuatp26j9Wg1yoq0vtrS1Wc1Gzhzn8MXhCWRzFAl_j7gQoYHbVmAzIh_ytdTzmHctovxmE7g3TFAyQ14QiKfakr6829bCwnRxocAlx6wMbPeNsQlo_iBhEyy-N9-uSVXQrK0tngu87hUAt8SW1aaTYuqHvGSQcZonVW7oQ0RiQcj-Hv923XyhvD-WuiNFg4pc7YY2tNMmFJa_ZqU6tnNTZg5UEhMTwk5niuxOCLajcDueozT4NMfo3TYxTyKh_9YcWZkNeT3p0YgOk--4OzqqI0FzjyY3z57I_YZqTzABwUjaPVJfhYVKBVquLXH0crwy0U9MLc32hIOFczbL-JGDgLj3PYVDnq8EmZpVEfDslGYev67QASebK6yFBnA8icg0l0yZYS1m1o70o4krBI3QP07O7TqGdYIMHuupA7oFg3Zz5AM6VlTq6RpHmiPRqThNzSIL4KgHttfiN9Hl4hQ7IRrkKY29-HJdQYAcwJuJbvNcmw9Ws0OLTOH4Dhv7Qkg0Ge4TOC3KK=w1920-h830-no?authuser=0"
          alt="Webscraping image"
          link="https://thekruathai.com/menu/"
          title="Kruthai Restaurant"
          date="June 20"
          description="A free-lancing project for a Thai Restaurant"
        />
        <Card
          src="https://lh3.googleusercontent.com/0wWHkwyUKrKNvoX0esedn4phRBLgEVJec4Vv077IRLMpjUUYN_m_1AKRx60e3vy5L5i2MiZzZdIdGlUqIZqzkW25JlNiCtZKGbFgeMSmHD7MtUzX7ZVBSlLt78BVmYSL654lq3dINwJKpDJsAlaqbzCutJQ8m5HLJkg2mNY9iueA9l9ymT603B1h4e92r7AkpLY4cz4WzZUlnRizUNYRpulwEIeCy9vd_U3z9Q7llD9tCOb8WUQlNrIyC39vmTSYxa_bxc0MNMEzcZ6cQtpVgleeulJ3lqLINmZCq9e8naVs8rEdPWZj2XgkhMgpp4MtKOeCQUIU3SXWEZHKBLA2-11YqzR9yUoYEEDl0VV04B0YQRnNFl5DlOpX-1BzKSIIh16D1Q6PwkNOHM9ZR7NLSlDxT_9lUSDi_FOfD4I0yxNREOIkNWTVoN-UPtGEsqfOLT5UdYa1_Qz3QE11aDyseoXls1pNfI8Ft1tp1tOF9KOXUySgbhkSKsLhwZSdoR58_IQabWt1EM06vgiz9bmIYu91dp0bs0YMgoD26EMZJ5q0kpOW4CZ_zvSe8_--DKTBqRe0V38UHNTQE4q8DokZbN_9jaFPiSIfzC8Khgfy-4qTw-S7OfQWwdfmC7xcgD6gxwukFVN0W4U9m4MuS_pZLIDA0mGSb6Ylz4uLBdT1i_1VMqn4-2SYj71jXsN82fDnmzktMz1-qtgjcSr4kagXS08Q=w1920-h795-no?authuser=0"
          alt="A ecoomerce site"
          link="https://hajurbuwa.com/"
          title="Ecommerce Website"
          date="Oct 19"
          description="A ecommerce site that let you buy and sell goods"
        />
        <Card
          src="https://lh3.googleusercontent.com/hIDkw-L-t1lG5nxZGbYiBqvLUvJAIf7s_XgP12rRwTN7NYqeHHueNO00VwOURes6PMP8D5XfcAdkkaqypIpVWS_MZgj3AFe_UEibRLfmAh3B0pQCPN6pkcHQaTLlIr5yDgvxPsu5TPNkzNJKZmrMoFI40PWyYS2CEWF_jx78w9G1j8ERk3N8csTPPDhubAfssGWu8vptlOSpMy_2q4Xe5wvb0SOjjB7IFfh8mntQLvn_iPYRELV3zsqwEZoc-lqMd5v9PIBuYDgh64mT-LXowe5bPorYtoS9RFm79wk3ntSEKMRDwJgxQOXxOXoa9RV8-g0-23se0203Je036yXUnPwT0TizMSJuxHlipOayH4cm1RMkgbUPKkljye8F_8vJI7Q59oX_xMbVZXXBXQBR0weX9psSm2kDkjA1XxmLA6c3ChIeCwKpiEFrk7l6bYhFnDPxsKw_YK8QRuRQKAOfgXpipkh_awOSX46CHPq3hZrdJGbdqmiBrFiV0DhD8FOUwgIj2HCNKr8_GyvdWUczEUwtBnEzIKPyNjr1HAguapAQ_w3ps1AtIWUelfQx6YwGAsGn7sAikEwHZvE0GKqXLSM3EGyi3yOmHBLt2siNE6njxPR852BUMZw3tqNvGyimSbviwgicSuWo9AMIl3eENgLuMgCrg5FBDbrFu7ZZe7bOe-XKznAVJenvbQYn-o6yH3RB2x5YaSLu41E-bi0OpmQz=w1917-h830-no?authuser=0"
          alt="Personal Project"
          link="https://disney-clone-odu3ui157-albinlamichhane9-gmailcom.vercel.app/"
          title="Github.io Portfolio"
          date="Des 18"
          description="Clone  of Disney web application"
        />
      </div>
      <div className="md:pt-16 mx-auto text-center">
        <Button>View More</Button>
      </div>
    </>
  );
};

export default Work;
