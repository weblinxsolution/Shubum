import React, { useState } from 'react'

const Button = (props) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };
    var style1 = {
        borderRadius: '62px',
        border: '1px solid var(--primary)',
        background: isHover ? 'var(--white)' : 'var(--primary2)',
        color: isHover ? 'var(--primary2)' : 'var(--white)',
        transition: ".4s ease",
        fontWeight: '500',
        width: props.responsive100 == true && window.innerWidth < 720 ? '90%' : 'auto',
        padding: '10px 25px'
    }
    var style0 = {
        borderRadius: '62px',
        border: '1px solid var(--primary)',
        background: isHover ? 'var(--white)' : 'linear-gradient(180deg, #2399D4 -26.06%, #4077DA 100%)',
        color: isHover ? 'var(--primary2)' : 'var(--white)',
        transition: ".4s ease",
        fontWeight: '500',
        width: props.responsive100 == true && window.innerWidth < 720 ? '90%' : 'auto',
        margin: props.responsive100 == true && window.innerWidth < 720 ? 'auto' : 'initial',
        padding: '10px 35px'
    }
    var registerbtn = {
        borderRadius: '6px',
        border: '1px solid var(--primary)',
        background: isHover ? 'var(--white)' : 'linear-gradient(180deg, #2399D4 -26.06%, #4077DA 100%)',
        color: isHover ? 'var(--primary2)' : 'var(--white)',
        transition: ".4s ease",
        fontWeight: '700',
        width: props.responsive100 == true && window.innerWidth < 720 ? '100%' : '250px',
        padding: '10px 35px'
    }
    var style5 = {
        borderRadius: '9px',
        border: '1px solid var(--primary)',
        background: isHover ? 'var(--white)' : 'linear-gradient(180deg, #2399D4 -26.06%, #4077DA 100%)',
        color: isHover ? 'var(--primary2)' : 'var(--white)',
        transition: ".4s ease",
        fontWeight: '500',
        width: props.responsive100 == true && window.innerWidth < 720 ? '90%' : 'auto',
        padding: '10px 15px'
    }
    var style2 = {
        borderRadius: '62px',
        border: '1px solid var(--black)',
        background: isHover ? 'var(--white)' : 'var(--black)',
        color: isHover ? 'var(--black)' : 'var(--white)',
        transition: ".4s ease",
        fontWeight: '500',
        width: props.responsive100 == true && window.innerWidth < 720 ? '90%' : 'auto',
        padding: '15px 30px'
    }
    var style3 = {
        borderRadius: '62px',
        border: isHover ? '1px solid var(--primary)' : '1px solid var(--white2)',
        background: isHover ? 'var(--primary)' : 'var(--white)',
        color: isHover ? 'var(--white)' : 'var(--black)',
        transition: ".4s ease",
        fontWeight: '500',
        width: props.responsive100 == true && window.innerWidth < 720 ? '90%' : 'auto',
        padding: '10px 25px'
    }
    var style6 = {
        borderRadius: '62px',
        border: isHover ? '1px solid var(--primary)' : '1px solid var(--white2)',
        background: isHover ? 'var(--primary)' : 'var(--white)',
        color: isHover ? 'var(--white)' : 'var(--black)',
        transition: ".4s ease",
        fontWeight: '500',
        width: props.responsive100 == true && window.innerWidth < 720 ? '90%' : 'auto',
        padding: '14px 45px'
    }
    var style4 = {
        borderRadius: '62px',
        border: '1px solid var(--white2)',
        background: 'var(--white)',
        color: 'var(--black)',
        transform: isHover ? "translateY(-4px)" : "translateY(0px)",
        transition: ".4s ease",
        fontWeight: '500',
        width: props.responsive100 == true && window.innerWidth < 720 ? '90%' : 'auto',
        padding: '10px 25px'
    }




    return (
        <>
            <button style={props.style1 == 1 ? style1 : props.style2 == 1 ? style2 : props.style3 == 1 ? style3 : props.style4 == 1 ? style4 : props.style0 == 1 ? style0 : props.style6 == 1 ? style6 : props.style5 == 1 ? style5 :  props.registerbtn == 1 ? registerbtn : style1} onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}  >{props.content}</button>
        </>
    )
}

export default Button