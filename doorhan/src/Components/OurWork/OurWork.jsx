import React, { useState } from 'react';
import styles from './OurWork.module.scss';
import Title from '../Title/Title';
import ModalGrats from '../Modal/ModalGrats';
import ModalInputs from '../Modal/ModalInputs';
import { blue } from '../Title/Title';
import gv from '../../assets/images/gv.png';
import gv2 from '../../assets/images/gv2.png';
import Button, { medium3, our_gar, our_prom, our_gar_mini, our_prom_mini,} from '../Button/Button';

export default function OurWork() {
    document.body.style.overflow = '';
    const [modalActive, setModalActive] = useState(false);
    const [modalSecond, setModalSecond] = useState(false);
    const [promBlock, setPromBlock] = useState(false);
    const handleOn = (e) => {
        setPromBlock(true)
    }
    const handleOff = (e) => {
        setPromBlock(false)
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
                    <Button styles={promBlock ? our_gar : our_prom} onClick={(e) => handleOff(e)} name='ГАРАЖНЫЕ' />
                    <Button styles={promBlock ? our_prom : our_gar} onClick={(e) => handleOn(e)} name='ПРОМЫШЛЕННЫЕ' />
                </div>
                <div className={styles.container__btns_mini}>
                    <Button styles={promBlock ? our_gar_mini : our_prom_mini} onClick={(e) => handleOff(e)} name='ГАРАЖНЫЕ' />
                    <Button styles={promBlock ? our_prom_mini : our_gar_mini} onClick={(e) => handleOn(e)} name='ПРОМЫШЛЕННЫЕ' />
                </div>
                <div className={styles.main}>
                    <div className={styles.pict}>
                        <img src={promBlock ? gv2 : gv} alt="гаражные секционные ворота" />
                    </div>
                    <div className={styles.container__text}>
                        {promBlock
                            ? <div className={styles.text}>
                                <p className={styles.p__title}>Промышленные секционные ворота </p>
                                <p className={styles.p}><span>Размер проема: </span>ш. 13000 мм, в. 11500 мм</p>
                                <p className={styles.p}><span>Тип панели: </span>М-гофр широкая полоса</p>
                                <p className={styles.p}><span>Цвет: </span>Wood Blue (RAL9016)</p>
                                <p className={styles.p}><span>Способ управления: </span>автоматические</p>
                            </div>
                            : <div className={styles.text}>
                                <p className={styles.p__title}>Гаражные секционные ворота </p>
                                <p className={styles.p}><span>Размер проема: </span>ш. 3000 мм, в. 2400 мм</p>
                                <p className={styles.p}><span>Тип панели: </span>М-гофр широкая полоса</p>
                                <p className={styles.p}><span>Цвет: </span>Wood Blue (RAL9016)</p>
                                <p className={styles.p}><span>Адрес объекта: </span>Павловская Слобода</p>
                                <p className={styles.p}><span>Способ управления: </span>автоматические</p>
                            </div>}
                        <Button name="РАССЧИТАТЬ ВОРОТА" onClick={handleClick} styles={medium3} />
                    </div>
                </div>

            </div>

            {modalActive &&
                <ModalGrats active={modalActive} setActive={setModalActive} />
            }
            {
                modalSecond &&
                <ModalInputs active={modalSecond} setActive={setModalSecond} handleSubmit={handleSubmit} />
            }
        </div>
    )

}