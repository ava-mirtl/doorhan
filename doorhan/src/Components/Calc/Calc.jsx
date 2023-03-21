import React, { useState } from 'react';
import styles from './Calc.module.scss';
import popup from '../../assets/images/popup1.jpg';
import ModalGrats from '../Modal/ModalGrats';
import ModalInputs from '../Modal/ModalInputs';
import Title from '../Title/Title';
import Modal from '../Modal/Modal';
import pic1 from '../../assets/images/online1.png';
import pic2 from '../../assets/images/online2.png';
import pic3 from '../../assets/images/online3.png';
import pic4 from '../../assets/images/online4.png';
import check from '../../assets/icons/check.png';
import der1 from '../../assets/images/derevo1.png';
import der2 from '../../assets/images/derevo2.png';
import der3 from '../../assets/images/derevo3.png';
import str from '../../assets/icons/str.png'
import Button, { medium, popupStyle } from '../Button/Button';
import Tabs from '../Tablist/Tablist';
import { blue } from '../Title/Title';
import { set } from 'immutable';


export default function Calc() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  document.body.style.overflow = '';
  const [modalActive, setModalActive] = useState(false);
  const [modalSecond, setModalSecond] = useState(false);
  const handleSubmit = (event) => {
    setModalSecond(false);
    event.preventDefault();
    setModalActive(true);
  }
  const handleClick = (event) => {
    event.preventDefault();
    setModalSecond(true);
  }


  //счетчики длина и высота
  const onNextClick = (a, set) => {
    set(a + 1);
  }

  const onPrevClick = (a, set) => {
    if (a > 0) {
      set(a - 1);
    }
    else {
      set(a)
    }
  }


  const handleChoice = (e) => {
    console.log(e.target);
  }


  return (
    <div>
      <div className={styles.wraper}>
        <Title styles={blue} title="ОНЛАЙН КАЛЬКУЛЯТОР" />
        <form className={styles.container}>
          <div className={styles.container__left}>
            <div className={styles.container__left_top} onClick={(e) => { handleChoice(e) }}>
              <div className={styles.choice}>
                <label htmlFor="choice1">
                  <div className={styles.img}>
                    <img src={pic1} alt="ДОСКА" />
                  </div>
                  <input type="radio" id="choice1" name="one" value="доска" />
                  <div className={styles.checked}>
                      <img src={check} alt="доска" />
                    </div>
                    <p>ДОСКА</p>
                  </label>
              </div>
              <div className={styles.choice}>
                <label htmlFor="choice2">
                  <div className={styles.img}>
                    <img src={pic2} alt="ШИРОКАЯ ЦЕНТРАЛЬНАЯ ПОЛОСА" />
                  </div>
                  <input type="radio" id="choice2" name="one" value="широкая центральная полоса" />
                  <div className={styles.checked}>
                      <img src={check} alt="полоса" />
                    </div>
                    <p>ШИРОКАЯ ЦЕНТРАЛЬНАЯ <br /> ПОЛОСА</p>
                  </label>
              </div>
              <div className={styles.choice}>
                <label htmlFor="choice3">
                  <div className={styles.img}>
                    <img src={pic3} alt="ФИЛЕНКА" />
                  </div>
                  <input className={styles.checkedInput} type="radio" id="choice3" name="one" value="филенка" />
                  <div className={styles.checked}>
                    <img src={check} alt="филенка" />
                  </div>
                  <p>ФИЛЕНКА</p>
                </label>
              </div>
              <div className={styles.choice}>
                <label htmlFor="choice4">
                  <div className={styles.img}>
                    <img src={pic4} alt="ВОЛНА" />
                  </div>
                  <input type="radio" id="choice4" name="one" value="волна" />
                  <div className={styles.checked}>
                    <img src={check} alt="волна" />
                  </div>
                  <p>ВОЛНА</p>
                </label>
              </div>
            </div>
            <div className={styles.container__left_bottom}>
              <div className={styles.container_controls}>
                <div className={styles.control_1}>
                  <p className={styles.tabs__p}>ИСПОЛНЕНИЕ</p>
                  <form className={styles.tabs__isp}>
                    <input className={styles.isp1} type="radio" id="isp1" name="tabs" />
                    <label className={styles.tab__isp1} htmlFor="isp1">ГОРИЗОНТАЛЬНОЕ</label>
                    <input className={styles.isp2} type="radio" id="isp2" name="tabs" />
                    <label className={styles.tab__isp2} htmlFor="isp2">ВЕРТИКАЛЬНОЕ</label>
                    <span className={styles.glider__isp}></span>
                  </form>
                </div>
                <div className={styles.control_2}>
                  <p className={styles.tabs__p}>АВТОМАТИКА</p>
                  <div className={styles.tabs__avtom}>
                    <input className={styles.avtom1} type="radio" id="avtom1" name="tabs" />
                    <label className={styles.tab__avtom1} htmlFor="avtom1">ВСТРОЕННАЯ</label>
                    <input className={styles.avtom2} type="radio" id="avtom2" name="tabs" />
                    <label className={styles.tab__avtom2} htmlFor="avtom2">ОТДЕЛЬНАЯ</label>
                    <span className={styles.glider__avtom}></span>
                  </div>
                </div>
                <div className={styles.control_3}>
                  <p>РАЗМЕРЫ</p>
                  <div className={styles.sizes}>
                    <div className={styles.sizes__title}>
                      ДЛИНА
                    </div>
                    <div className={styles.sizes__count}>
                      <button className={styles.bt_left} 
                        type="button" 
                        onClick={()=>onPrevClick(count, setCount)}
                        >
                          <img src={str} alt="left"/>
                      </button>
                      <input type="text" value={count} />
                      <button className={styles.bt_right} 
                        type="button" 
                        onClick={()=>onNextClick(count, setCount)}
                        >
                            <img src={str} alt="right"/>
                      </button>
                    </div>
                  </div>
                  <div className={styles.sizes}>
                    <div className={styles.sizes__title}>
                      ВЫСОТА
                    </div>
                    <div className={styles.sizes__count}>
                      <button className={styles.bt_left} 
                        type="button" 
                        onClick={()=>onPrevClick(count2, setCount2)}
                        >
                            <img src={str} alt="left"/>
                      </button>
                      <input type="text" value={count2} />
                      <button className={styles.bt_right} 
                        type="button" 
                        onClick={()=>onNextClick(count2, setCount2)}
                        >
                            <img src={str} alt="right"/>
                      </button>
                    </div>
                  </div>
                </div>
                <div className={styles.control_4}>
                  <p>ВЫБЕРИТЕ <br />ЦВЕТ ВОРОТ</p>
                  <div className={styles.colors}>
                    <div><input type="radio" name='color' id='color1' value="белый"/><label className={styles.round} htmlFor="color1"><div className={styles.btn1}></div></label></div>
                    <div><input type="radio" name='color' id='color2' value="серый"/><label className={styles.round} htmlFor="color2"><div className={styles.btn2}></div></label></div>
                    <div><input type="radio" name='color' id='color3' value="бежевый"/><label className={styles.round} htmlFor="color3"><div className={styles.btn3}></div></label></div>
                    <div><input type="radio" name='color' id='color4' value="черный"/><label className={styles.round} htmlFor="color4"><div className={styles.btn4}></div></label></div>
                    <div><input type="radio" name='color' id='color5' value="синий"/><label className={styles.round} htmlFor="color5"><div className={styles.btn5}></div></label></div>
                    <div><input type="radio" name='color' id='color6' value="красный"/><label className={styles.round} htmlFor="color6"><div className={styles.btn6}></div></label></div>
                    <div><input type="radio" name='color' id='color7' value="коричневый"/><label className={styles.round} htmlFor="color7"><div className={styles.btn7}></div></label></div>
                    <div><input type="radio" name='color' id='color8' value="черный"/><label className={styles.round} htmlFor="color8"><div className={styles.btn8}></div></label></div>
                  </div>
                </div>
              </div>
              <div className={styles.container_texture}>
                <p>ТИП ПОВЕРХНОСТИ</p>
                <div className={styles.texture__cards}>
                  <div className={styles.texture1}>
                    <div className={styles.first}>
                      <div className={styles.img}>
                        <img src={der1} alt="текстура" />
                      </div>
                      <form className={styles.checked_texture}>
                        <input type="radio" id="texture1" name="texture" value="check" />
                        <label htmlFor="texture1"><img src={check} alt="волна" /></label>
                      </form>
                    </div>
                    <div className={styles.second}>
                      <div className={styles.img}>
                        <img src={der2} alt="текстура" />
                      </div>
                      <form className={styles.checked_texture}>
                        <input type="radio" id="texture2" name="texture" value="check" />
                        <label htmlFor="texture2"><img src={check} alt="волна" /></label>
                      </form>
                    </div>
                  </div>
                  <div className={styles.texture2}>
                    <div className={styles.third}>
                      <div className={styles.img}>
                        <img src={der3} alt="текстура" />
                      </div>
                      <form className={styles.checked_texture}>
                        <input type="radio" id="texture3" name="texture" value="check" />
                        <label htmlFor="texture3"><img src={check} alt="волна" /></label>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container__right}>
            <div className={styles.container__right_top}>
              <Tabs />
            </div>
            <div className={styles.container__right_bottom}>
              <form className={styles.container__form}>
                <input type="text" className={styles.input} placeholder='Телефон' />
                <Button type='submit' onClick={(e) => handleSubmit(e)} styles={medium} name="УТОЧНИТЬ СТОИМОСТЬ" />
              </form>
            </div>
          </div>
        </form>
      </div >
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
    </div >
  )
}





