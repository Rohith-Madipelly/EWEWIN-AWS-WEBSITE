import React, { useState, useEffect } from 'react'
import arrowImg from '../../assets/arrow.png'
function ArrowBackToTopButton() {
    const [backTopButton, setBackTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setBackTopButton(true)
            }
            else {
                setBackTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            // left:0,
            behavior: "smooth"
        })
    }
    const arrowStyle = {
        width: '0',
        height: '0',
        borderLeft: '10px solid transparent',
        borderRight: '10px solid transparent',
        borderBottom: '15px solid #000',
        position: 'absolute',
        top: '10px',
        left: '10px',
      };
    return (
        <div>
            {backTopButton && (<img src={arrowImg} alt="" style={{
                    position: "fixed",
                    bottom: "35px",
                    right: "20px",

                    height: "50px",
                    // width: "40px",
                    // border: "1px solid #000",
                    // borderRadius: "50%",
                    background: 'transparent',
                    fontSize: "50px",
                }} onClick={scrollUp} />)}
        </div>
    )
}

export default ArrowBackToTopButton





// import React, { useState, useEffect } from 'react'
// import arrowImg from '../../assets/arrow.png'
// function ArrowBackToTopButton() {
//     const [backTopButton, setBackTopButton] = useState(false)

//     useEffect(() => {
//         window.addEventListener("scroll", () => {
//             if (window.scrollY > 100) {
//                 setBackTopButton(true)
//             }
//             else {
//                 setBackTopButton(false)
//             }
//         })
//     }, [])

//     const scrollUp = () => {
//         window.scrollTo({
//             top: 0,
//             // left:0,
//             behavior: "smooth"
//         })
//     }
//     const arrowStyle = {
//         width: '0',
//         height: '0',
//         borderLeft: '10px solid transparent',
//         borderRight: '10px solid transparent',
//         borderBottom: '15px solid #000',
//         position: 'absolute',
//         top: '10px',
//         left: '10px',
//       };
//     return (
//         <div>
//             {backTopButton && (
         


//                 <button style={{
//                     position: "fixed",
//                     bottom: "35px",
//                     right: "20px",

//                     height: "40px",
//                     width: "40px",
//                     border: "1px solid #000",
//                     borderRadius: "50%",
//                     background: 'transparent',
//                     fontSize: "50px",
//                 }} onClick={scrollUp}>
//                      {/* <div style={arrowStyle}>
                        
//                         </div> */}
//                         <img src={arrowImg} alt="" />
//                         </button>

          
//             )}
//         </div>
//     )
// }

// export default ArrowBackToTopButton