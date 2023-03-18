import React, { useState } from 'react';
import styles from './OurWork.module.scss';
import Title from '../Title/Title';
import ModalGrats from '../Modal/ModalGrats';
import ModalInputs from '../Modal/ModalInputs';
import { blue } from '../Title/Title';
import gv from '../../assets/images/gv.png';
import gv2 from '../../assets/images/gv2.png';
import Button, { medium, our_gar, our_prom } from '../Button/Button';

export default function OurWork() {
    document.body.style.overflow = '';
    const [modalActive, setModalActive] = useState(false);
    const [modalSecond, setModalSecond] = useState(false);

    const [promBlock, setPromBlock] = useState(false);
    const handleChance = () => {

    }





    const handleSubmit = (event) => {
        setModalSecond(false);
        event.preventDefault();
        setModalActive(true);
    }
    const handleClick = (event) => {
        event.preventDefault();
        setModalSecond(true);
    }
    return (
        <div>
            <Title styles={blue} title="НАШИ РАБОТЫ" />
            <div className={styles.container}>
                <div className={styles.container__btns}>
                    <Button styles={our_gar} name='ГАРАЖНЫЕ' />
                    <Button styles={our_prom} onClick={handleChance} name='ПРОМЫШЛЕННЫЕ' />
                </div>
                <div className={styles.main}>
                    <div className={styles.pict}>
                        <img src={gv} alt="гаражные секционные ворота" />
                    </div>
                    <div className={styles.container__text}>
                        <div className={styles.text}>
                            <p className={styles.p__title}>Гаражные секционные ворота </p>
                            <p className={styles.p}><span>Размер проема:</span> ш. 3000 мм, в. 2400 мм</p>
                            <p className={styles.p}><span>Тип панели:</span>М-гофр широкая полоса</p>
                            <p className={styles.p}><span>Цвет:</span>Wood Blue (RAL9016)</p>
                            <p className={styles.p}><span>Адрес объекта:</span> Павловская Слобода</p>
                            <p className={styles.p}><span>Способ управления:</span>автоматические</p>
                        </div>
                        <Button name="РАССЧИТАТЬ ВОРОТА" onClick={handleClick} styles={medium} />
                    </div>
                </div>
            </div>
            {modalActive&&
<ModalGrats active={modalActive} setActive={setModalActive}/> 
}
{
modalSecond&&
<ModalInputs active={modalSecond} setActive={setModalSecond} handleSubmit={handleSubmit}/>
  }
            {

                <div className={styles.container}>
                    <div className={styles.container__btns}>
                        <Button styles={our_gar} name='ГАРАЖНЫЕ' />
                        <Button styles={our_prom} onClick={handleChance} name='ПРОМЫШЛЕННЫЕ' />
                    </div>
                    <div className={styles.main}>
                        <div className={styles.pict}>
                            <img src={gv2} alt="гаражные секционные ворота" />
                        </div>
                        <div className={styles.container__text}>
                            <div className={styles.text}>
                                <p className={styles.p__title}>Промышленные секционные ворота </p>
                                <p className={styles.p}><span>Размер проема:</span> ш. 13000 мм, в. 11500 мм</p>
                                <p className={styles.p}><span>Тип панели:</span> М-гофр широкая полоса</p>
                                <p className={styles.p}><span>Цвет:</span> Wood Blue (RAL9016)</p>
                                <p className={styles.p}><span>Способ управления:</span>автоматические</p>
                            </div>
                            <Button name="РАССЧИТАТЬ ВОРОТА" onClick={handleClick} styles={medium} />
                        </div>
                    </div>
                </div>


            }

        </div>
    )

}