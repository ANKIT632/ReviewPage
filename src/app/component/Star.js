import React from 'react'
import { EmptyStarIcon, starIcon } from '../icons'
import Image from 'next/image';
import style from "../page.module.css";


function StarRating({ setMarkState, number }) {


  const emptystars = Array(5 - number).fill(0);
  const stars = Array(number).fill(0);
  return (
    <div className={style.starDiv}>


      {stars.map((_, index) => <Image key={index} src={starIcon} alt="icon" className={style.starIcon} width={25} onClick={() => setMarkState(index + 1)} />
      )
      }
      {emptystars.map((_, index) => <Image key={index} src={EmptyStarIcon} alt="icon" className={style.starIcon} width={25} onClick={() => setMarkState(index + number + 1)} />

      )
      }

    </div>
  )
}

export default StarRating