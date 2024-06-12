import { useState } from 'react';
import styles from "./menu.module.css";
import Image from "next/image";
export default function Menu() {
    const [isModalVisible, setModalVisible] = useState(false);
    const handleClickBuy = () => {
        setModalVisible(true);
    }
    const handleClickCloseButton = () => {
        setModalVisible(false);
    }
  return (
    <div>
        <div className={styles.buyBtn} onClick={() => handleClickBuy()}>Buy ++</div>
        {isModalVisible && 
        
            <div className={styles.container}>
                <div className={styles.closeIcon} onClick={() => handleClickCloseButton()}></div>
            <div className={styles.row}> 
                <div className={styles.inner1}>
                    <div className={styles.leftContent}>
                        <div className={styles.icon}>
                        <Image
                            priority
                            src="/images/chimpanzee2.jpeg"
                            height={30}
                            width={30}
                            alt=""
                        />
                        </div>
                        <div className={styles.text}>Button Text</div>
                    </div>
                    
                    <div className={styles.price}>200000</div>
                </div>
                <div className={styles.inner2}>
                    <div className={styles.icon}></div>
                </div>
                <div className={styles.inner3}>
                    <div className={styles.tag}></div>
                </div>
            </div>

            <div className={styles.row}> 
                <div className={styles.inner1}>
                <div className={styles.leftContent}>
                        <div className={styles.icon}>
                        <Image
                            priority
                            src="/images/chimpanzee2.jpeg"
                            height={30}
                            width={30}
                            alt=""
                        />
                        </div>
                        <div className={styles.text}>Button Text</div>
                    </div>
                    <div className={styles.price}>30000</div>
                </div>
                <div className={styles.inner2}>
                    <div className={styles.description}>An addtional description</div>
                </div>
                <div className={styles.inner3}>
                    <div className={styles.tag}>Optional Tags</div>
                </div>
            </div>

            <div className={styles.row}> 
                <div className={styles.inner1}>
                <div className={styles.leftContent}>
                        <div className={styles.icon}>
                        <Image
                            priority
                            src="/images/chimpanzee2.jpeg"
                            height={30}
                            width={30}
                            alt=""
                        />
                        </div>
                        <div className={styles.text}>Button Text</div>
                    </div>
                    <div className={styles.price}>50000</div>
                </div>
                <div className={styles.inner2}>
                    <div className={styles.description}>An addtional description</div>
                </div>
                <div className={styles.inner3}>
                    <div className={styles.tag}>Optional Tags</div>
                </div>
            </div>

            <div className={styles.row}> 
                <div className={styles.inner1}>
                <div className={styles.leftContent}>
                        <div className={styles.icon}>
                        <Image
                            priority
                            src="/images/chimpanzee2.jpeg"
                            height={30}
                            width={30}
                            alt=""
                        />
                        </div>
                        <div className={styles.text}>Button Text</div>
                    </div>
                    <div className={styles.price}>15000</div>
                </div>
                <div className={styles.inner2}>
                    <div className={styles.description}>addtional description</div>
                </div>
                <div className={styles.inner3}>
                    <div className={styles.tag}>please add more tags</div>
                </div>
            </div>
            
        </div> 
        }
        
    </div>
    
  );
}