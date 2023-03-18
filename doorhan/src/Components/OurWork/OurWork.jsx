import React, { useState } from 'react';
import styles from './OurWork.module.scss';
import Modal from '../Modal/Modal';
import Title from '../Title/Title';
import popup from '../../assets/images/popup1.jpg'
import { blue } from '../Title/Title';
import gv from '../../assets/images/gv.png';
import gv2 from '../../assets/images/gv2.png';
import Button, { medium, popupStyle, our_gar, our_prom } from '../Button/Button';

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


            {
                modalActive && <Modal active={modalActive} setActive={setModalActive}>
                    <div className={styles.popupContainer}>
                        <div className={styles.imgContainer}>
                            <img src={popup} alt="девушка" />
                        </div>
                        <div className={styles.popupTxt}><div className={styles.popupTitle}>СПАСИБО ЗА ВАШЕ ОБРАЩЕНИЕ, НАШ МЕНЕДЖЕР СКОРО С ВАМИ СВЯЖЕТСЯ!
                        </div></div>
                    </div>    </Modal>
            }
            {
                modalSecond &&
                <Modal active={modalSecond} setActive={setModalSecond}>
                    <div className={styles.popupContainerNext}>
                        <div className={styles.popupTitleNext}>РАСЧЕТ СТОИМОСТИ УСЛУГИ</div>
                        <form className={styles.formNext}>
                            <input type="text" className={styles.inputNext} placeholder='Ваше имя' />
                            <input type="text" className={styles.inputNext} placeholder='Телефон' />
                            <Button name="РАССЧИТАТЬ ВОРОТА" onClick={handleSubmit} styles={popupStyle} />
                        </form>
                    </div>
                </Modal>
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