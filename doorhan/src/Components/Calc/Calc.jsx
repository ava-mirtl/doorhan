import React, { useState } from 'react';
import styles from './Calc.module.scss';
import Modal from '../Modal/Modal';
import Title from '../Title/Title';
import popup from '../../assets/images/popup1.jpg'
import pict from '../../assets/images/gv.png';
import pic1 from '../../assets/images/online1.png';
import pic2 from '../../assets/images/online2.png';
import pic3 from '../../assets/images/online3.png';
import pic4 from '../../assets/images/online4.png';
import check from '../../assets/icons/check.png';
import der1 from '../../assets/images/derevo1.png';
import der2 from '../../assets/images/derevo2.png';
import der3 from '../../assets/images/derevo3.png';
import vor1 from '../../assets/images/vor1.png';
import Button, {medium, popupStyle} from '../Button/Button';
import { blue } from '../Title/Title';








export default function Calc() {

  document.body.style.overflow = '';
  const [modalActive, setModalActive] = useState(false);
  const [modalSecond, setModalSecond] = useState(false);
  const handleSubmit = (event) => {
    setModalSecond(false);
    event.preventDefault();
    setModalActive(true);
  }
  const handleClick = (event)=>{
  event.preventDefault();
  setModalSecond(true);
  }

  return (
    <div>
      <div className={styles.wraper}>
      <Title styles={blue} title="ОНЛАЙН КАЛЬКУЛЯТОР"/>
        <div className={styles.container1}>
          <div className={styles.container1_left}>
            <div className={styles.container1_left__top}>
              <div className={styles.choice}>
                <div className={styles.img}>
                  <img src={pic1} alt="ДОСКА" />
                </div>
                <div className={styles.checked}>
                  <input type="radio" id="contactChoice1" name="contact" value="email" />
                  <label for="contactChoice1"><img src={check} alt="доска" /></label>
                </div>
                <p>ДОСКА</p>
              </div>
              <div className={styles.choice}>
                <div className={styles.img}>
                  <img src={pic2} alt="ШИРОКАЯ ЦЕНТРАЛЬНАЯ ПОЛОСА" />
                </div>
                <div className={styles.checked}>
                  <input type="radio" id="contactChoice2" name="contact" value="email" />
                  <label for="contactChoice2"><img src={check} alt="полоса" /></label>
                </div>
                <p>ШИРОКАЯ ЦЕНТРАЛЬНАЯ ПОЛОСА</p>
              </div>
              <div className={styles.choice}>
                <div className={styles.img}>
                  <img src={pic3} alt="ФИЛЕНКА" />
                </div>
                <div className={styles.checked}>
                  <input type="radio" id="contactChoice3" name="contact" value="email" />
                  <label for="contactChoice3"><img src={check} alt="филенка" /></label>
                </div>
                <p>ФИЛЕНКА</p>
              </div>
              <div className={styles.choice}>
                <div className={styles.img}>
                  <img src={pic4} alt="ВОЛНА" />
                </div>
                <div className={styles.checked}>
                  <input type="radio" id="contactChoice4" name="contact" value="email" />
                  <label for="contactChoice4"><img src={check} alt="волна" /></label>
                </div>
                <p>ВОЛНА</p>
              </div>
            </div>



            <div className={styles.container1_left__bottom}>
              <div className={styles.left__bottom}>
                <div className={styles.controls}>
                  <p>ИСПОЛНЕНИЕ</p>
                  <div class={styles.tabs__ispolnenie}>
                    <input className={styles.radio4} type="radio" id="radio-4" name="tabs" />
                    <label class={styles.tab__ispolnenie} for="radio-4">ГОРИЗОНТАЛЬНОЕ</label>
                    <input className={styles.radio5} type="radio" id="radio-5" name="tabs" />
                    <label class={styles.tab__ispolnenie} for="radio-5">ВЕРТИКАЛЬНОЕ</label>
                    <span className={styles.glider__ispolnenie}></span>
                  </div>
                </div>

                {/* <div className={styles.controls}>
                  <p>АВТОМАТИКА</p>
                  <div class={styles.tabs}>
                    <input type="radio" id="radio-1" name="tabs" checked />
                    <label class={styles.tab} for="radio-1">ВСТРОЕННАЯ</label>
                    <input type="radio" id="radio-2" name="tabs" />
                    <label class={styles.tab} for="radio-2">ОТДЕЛЬНАЯ</label>
                  </div>
                </div> */}


                {/* <div className={styles.controls}>
                  <p>РАЗМЕРЫ</p>
                  <div class={styles.tabs}>
                    <input type="range" name="number" id="num" min="1" />
                    <input type="range" name="number" id="num" min="1" />
                  </div>
                </div> */}

                <div className={styles.controls}>
                  <p>ВЫБЕРИТЕ ЦВЕТ ВОРОТ</p>
                  <div class={styles.buttons}>
                    <buttons class={styles.btn1}></buttons>
                    <buttons class={styles.btn2}></buttons>
                    <buttons class={styles.btn3}></buttons>
                    <buttons class={styles.btn4}></buttons>
                    <buttons class={styles.btn5}></buttons>
                    <buttons class={styles.btn6}></buttons>
                    <buttons class={styles.btn7}></buttons>
                    <buttons class={styles.btn8}></buttons>
                  </div>
                </div>
              </div>
              <div className={styles.texture}>
                <p>ТИП ПОВЕРХНОСТИ</p>
                <div className={styles.texture__photo}>
                  <div className={styles.texture1}>
                    <div className={styles.first}>
                      <div className={styles.img}>
                        <img src={der1} alt="текстура" />
                      </div>
                      <div className={styles.checked}>
                        <input type="radio" id="contactChoice4" name="contact" value="check" />
                        <label for="contactChoice4"><img src={check} alt="волна" /></label>
                      </div>
                    </div>

                    <div className={styles.second}>
                      <div className={styles.img}>
                        <img src={der2} alt="текстура" />
                      </div>
                      <div className={styles.checked}>
                        <input type="radio" id="contactChoice4" name="contact" value="check" />
                        <label for="contactChoice4"><img src={check} alt="волна" /></label>
                      </div>
                    </div>
                  </div>

                  <div className={styles.texture2}>
                    <div className={styles.third}>
                      <div className={styles.img}>
                        <img src={der3} alt="текстура" />
                      </div>
                      <div className={styles.checked}>
                        <input type="radio" id="contactChoice4" name="contact" value="check" />
                        <label for="contactChoice4"><img src={check} alt="волна" /></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className={styles.container1_right}>
            <div className={styles.container__tabs}>
              <div className={styles.tabs}>
                <input className={styles.radio1} type="radio" id="radio-1" name="tabs" />
                <label className={styles.tab} for="radio-1">ОТКАТНЫЕ</label>
                <input className={styles.radio2} type="radio" id="radio-2" name="tabs" />
                <label className={styles.tab} for="radio-2">РАСПАШНЫЕ</label>
                <input className={styles.radio3} type="radio" id="radio-3" name="tabs" />
                <label className={styles.tab} for="radio-3">ГАРАЖНЫЕ</label>
                <span className={styles.glider}></span>
              </div>
            </div>
            <div className={styles.container__img}>
              <img src={vor1} alt="откатные ворота" />
            </div>
            <form className={styles.container__form}>
              <input type="text" className={styles.input} placeholder='Телефон' />
              <Button type='submit' onClick={(e) => handleSubmit(e)} styles={medium} name="УТОЧНИТЬ СТОИМОСТЬ" />

            </form>
          </div>

        </div>





        <Title styles={blue} title="НАШИ РАБОТЫ"/>
        <div className={styles.container2}>
          <div className={styles.container2__btns}>
            <buttons></buttons>
            <buttons></buttons>
          </div>
          <div className={styles.main2}>
            <div className={styles.pict}>
              <img src={pict} alt="гаражные секционные ворота" />
            </div>
            <div className={styles.container2__text}>
              <div className={styles.text}>
                <p className={styles.p__title}>Гаражные секционные ворота </p>
                <p className={styles.p}><span>Размер проема:</span> ш. 3000 мм, в. 2400 мм</p>
                <p className={styles.p}><span>Тип панели:</span>М-гофр широкая полоса</p>
                <p className={styles.p}><span>Цвет:</span>Wood Blue (RAL9016)</p>
                <p className={styles.p}><span>Адрес объекта:</span> Павловская Слобода</p>
                <p className={styles.p}><span>Способ управления:</span>автоматические</p>
              </div>
              <Button name="РАССЧИТАТЬ ВОРОТА" onClick={handleClick} styles={medium}/>
            </div>
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
<<<<<<< HEAD
      {
modalSecond&&
<Modal active={modalSecond} setActive={setModalSecond}>
  <div className={styles.popupContainerNext}>
    <div className={styles.popupTitleNext}>РАСЧЕТ СТОИМОСТИ УСЛУГИ</div>  
      <form className={styles.formNext}>
        <input type="text" className={styles.inputNext} placeholder='Ваше имя'/>
        <input type="text" className={styles.inputNext} placeholder='Телефон'/>
        <Button name="РАССЧИТАТЬ ВОРОТА" onClick={handleSubmit} styles={popupStyle}/>
      </form>
    </div>  
</Modal>
}
    </div>
=======
    </div >
>>>>>>> 20107f28abbdb076601593ac81f0e82616956246
  )
}
