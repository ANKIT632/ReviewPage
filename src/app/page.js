'use client'
import styles from "./page.module.css";
import StarRating from "./component/Star";
import { useState } from 'react'
import ThumbReview from "./component/thumbReview";
export default function Home() {

  const [mark1, setMark1] = useState(0);
  const [mark2, setMark2] = useState(0);

  const [fair, setFair] = useState(true);
  const [good, setGood] = useState(false);
  const [veryGood, setVeryGood] = useState(false);

  const handlePrase = (arg) => {
    console.log(arg)
    switch (arg) {
      case 'fair': {
        setFair(!fair);
        setGood(false);
        setVeryGood(false);

      }
        break;
      case 'good': {
        setGood(!good);
        setFair(false);
        setVeryGood(false);
      }
        break;
      case 'veryGood':
        {
          setVeryGood(!veryGood);
          setFair(false);
          setGood(false);

        }
        break;
    }

  }



  return (
    <main className={styles.main}>
      <h1>Leave a review</h1>

      <h2>Safety</h2>
      <p>We adhere to all safety regulations.</p>
      <StarRating setMarkState={setMark1} number={mark1} />

      <h2>Communication</h2>
      <p>We believe in open and clear communication.</p>

      <StarRating setMarkState={setMark2} number={mark2} />


      <h2>Would you recommend Trusting?</h2>
      <p>rate for the trust.</p>

      <ThumbReview />

      <h2>Praise</h2>
      <p>Please tag your experience with us</p>

      <div>
        <button className={!fair ? styles.btn : styles.activeBtn} onClick={() => handlePrase('fair')} >Fair</button>
        <button className={!good ? styles.btn : styles.activeBtn} onClick={() => handlePrase('good')}>good</button>
        <button className={!veryGood ? styles.btn : styles.activeBtn} onClick={() => handlePrase('veryGood')}>very good</button>
      </div>



    </main>
  );
}
