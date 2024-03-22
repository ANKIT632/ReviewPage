
import React from 'react'
import { thumbUpIcon, thumbDownIcon, thumbUpcIcon, thumbDowncIcon } from '../icons'
import styles from "../page.module.css";
import Image from 'next/image'
import { useState } from 'react'


function ThumbReview() {

    const [thumbUp, setThumbUp] = useState('gray');
    const [thumbDown, setThumbDown] = useState('gray');



    const handleThumbUp = () => {
        (thumbUp === 'gray') ? (setThumbUp('green'), setThumbDown('gray'))
            : setThumbUp('gray');

    }

    const handleThumbDown = () => {
        (thumbDown === 'gray') ? (setThumbUp('gray'), setThumbDown('green')) :
            setThumbDown('gray');

    }

    return (
        <div className={styles.thumbStyle}>
            {(thumbDown === 'gray') ? <Image src={thumbDownIcon} alt='icon' width={40} onClick={handleThumbDown} /> : <Image src={thumbDowncIcon} alt='icon' width={40} />}<p style={{ color: thumbDown }}>No</p>


            {(thumbUp === 'gray') ? <Image src={thumbUpIcon} alt='icon' width={40} onClick={handleThumbUp} /> : <Image src={thumbUpcIcon} alt='icon' width={40} />}
            <p style={{ color: thumbUp }}>Yes</p>
        </div>
    )
}

export default ThumbReview