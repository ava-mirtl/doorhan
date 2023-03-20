import React, { useState } from 'react';
import styles from './Calc.module.scss';
import ModalGrats from '../Modal/ModalGrats';
import ModalInputs from '../Modal/ModalInputs';
import Title from '../Title/Title';
import pic1 from '../../assets/images/online1.png';
import pic2 from '../../assets/images/online2.png';
import pic3 from '../../assets/images/online3.png';
import pic4 from '../../assets/images/online4.png';
import check from '../../assets/icons/check.png';
import der1 from '../../assets/images/derevo1.png';
import der2 from '../../assets/images/derevo2.png';
import der3 from '../../assets/images/derevo3.png';
import str from '../../assets/icons/str.png'
import Button, { medium } from '../Button/Button';
import Tabs from '../Tablist/Tablist';
import { blue } from '../Title/Title';
import { set } from 'immutable';


export default function Calc() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const onNextClick = () => {
    setCount(count + 1);
  }

  const onPrevClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      setCount(count)
    }
  }

  const onNextClick2 = () => {
    setCount2(count2 + 1);
  }

  const onPrevClick2 = () => {
    if (count2 > 0) {
      setCount2(count2 - 1);
    }
    else {
      setCount2(count2)
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
                <div className={styles.img}>
                  <img src={pic1} alt="ДОСКА" />
                </div>
                <form className={styles.checked}>
                  <label htmlFor="choice1"><img src={check} alt="доска" />
                    <input type="radio" id="choice1" name="one" value="choice" />
                  </label>
                </form>
                <p>ДОСКА</p>
              </div>

              <div className={styles.choice}>
                <div className={styles.img}>
                  <img src={pic2} alt="ШИРОКАЯ ЦЕНТРАЛЬНАЯ ПОЛОСА" />
                </div>
                <form className={styles.checked}>
                  <label htmlFor="choice2"><img src={check} alt="полоса" />
                    <input type="radio" id="choice2" name="two" value="choice" />
                  </label>
                </form>
                <p>ШИРОКАЯ ЦЕНТРАЛЬНАЯ <br /> ПОЛОСА</p>
              </div>

              <div className={styles.choice}>
                <div className={styles.img}>
                  <img src={pic3} alt="ФИЛЕНКА" />
                </div>
                <form className={styles.checked}>
                  <label htmlFor="choice3"><img src={check} alt="филенка" />
                    <input type="radio" id="choice3" name="three" value="choice" />
                  </label>
                </form>
                <p>ФИЛЕНКА</p>
              </div>

              <div className={styles.choice}>
                <div className={styles.img}>
                  <img src={pic4} alt="ВОЛНА" />
                </div>
                <form className={styles.checked}>
                  <label htmlFor="choice4"><img src={check} alt="волна" />
                    <input type="radio" id="choice4" name="four" value="choice" /></label>
                </form>
                <p>ВОЛНА</p>
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
                      <button className={styles.bt_left} >
                        <img
                          src={str}
                          alt="left"
                          onClick={onPrevClick}
                        />
                      </button>
                      <input type="text" value={count} />
                      <button className={styles.bt_right} >
                        <img
                          src={str}
                          alt="right"
                          onClick={onNextClick}
                        />
                      </button>
                    </div>
                  </div>


                  <div className={styles.sizes}>
                    <div className={styles.sizes__title}>
                      ВЫСОТА
                    </div>
                    <div className={styles.sizes__count}>
                      <button className={styles.bt_left} >
                        <img
                          src={str}
                          alt="left"
                          onClick={onPrevClick2}
                        />
                      </button>
                      <input type="text" value={count2} readonly min="0" />
                      <button className={styles.bt_right} >
                        <img
                          src={str}
                          alt="right"
                          onClick={onNextClick2}
                        />
                      </button>
                    </div>
                  </div>




                </div>

                <div className={styles.control_4}>
                  <p>ВЫБЕРИТЕ <br />ЦВЕТ ВОРОТ</p>
                  <div className={styles.buttons}>
                    <button className={styles.btn1}></button>
                    <button className={styles.btn2}></button>
                    <button className={styles.btn3}></button>
                    <button className={styles.btn4}></button>
                    <button className={styles.btn5}></button>
                    <button className={styles.btn6}></button>
                    <button className={styles.btn7}></button>
                    <button className={styles.btn8}></button>
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
                {/* <Button type='submit' onClick={(e) => handleSubmit(e)} styles={medium} name="УТОЧНИТЬ СТОИМОСТЬ" /> */}

              </form>
            </div>
          </div>


        </form>


      </div >

    </div >

  )
}


// export default function Calc() {

//   document.body.style.overflow = '';
//   const [modalActive, setModalActive] = useState(false);
//   const [modalSecond, setModalSecond] = useState(false);
//   const handleSubmit = (event) => {
//     setModalSecond(false);
//     event.preventDefault();
//     setModalActive(true);
//   }
//   const handleClick = (event) => {
//     event.preventDefault();
//     setModalSecond(true);
//   }

//   return (
//     <div>
//       <div className={styles.wraper}>
//         <Title styles={blue} title="ОНЛАЙН КАЛЬКУЛЯТОР" />
//         <div className={styles.container1}>
//           <div className={styles.container1_left}>
//             <div className={styles.container1_left__top}>
//               <div className={styles.choice}>
//                 <div className={styles.img}>
//                   <img src={pic1} alt="ДОСКА" />
//                 </div>
//                 <div className={styles.checked}>
//                   <input type="radio" id="contactChoice1" name="contact" value="email" />
//                   <label htmlFor="contactChoice1"><img src={check} alt="доска" /></label>
//                 </div>
//                 <p>ДОСКА</p>
//               </div>
//               <div className={styles.choice}>
//                 <div className={styles.img}>
//                   <img src={pic2} alt="ШИРОКАЯ ЦЕНТРАЛЬНАЯ ПОЛОСА" />
//                 </div>
//                 <div className={styles.checked}>
//                   <input type="radio" id="contactChoice2" name="contact" value="email" />
//                   <label htmlFor="contactChoice2"><img src={check} alt="полоса" /></label>
//                 </div>
//                 <p>ШИРОКАЯ ЦЕНТРАЛЬНАЯ ПОЛОСА</p>
//               </div>
//               <div className={styles.choice}>
//                 <div className={styles.img}>
//                   <img src={pic3} alt="ФИЛЕНКА" />
//                 </div>
//                 <div className={styles.checked}>
//                   <input type="radio" id="contactChoice3" name="contact" value="email" />
//                   <label for="contactChoice3"><img src={check} alt="филенка" /></label>
//                 </div>
//                 <p>ФИЛЕНКА</p>
//               </div>
//               <div className={styles.choice}>
//                 <div className={styles.img}>
//                   <img src={pic4} alt="ВОЛНА" />
//                 </div>
//                 <div className={styles.checked}>
//                   <input type="radio" id="contactChoice4" name="contact" value="email" />
//                   <label for="contactChoice4"><img src={check} alt="волна" /></label>
//                 </div>
//                 <p>ВОЛНА</p>
//               </div>
//             </div>


//             <div className={styles.container1_left__bottom}>
//               <div className={styles.left__bottom}>
//                 <div className={styles.controls}>
//                   <p>ИСПОЛНЕНИЕ</p>
//                   <div class={styles.tabs__ispolnenie}>
//                     <input className={styles.radio4} type="radio" id="radio-4" name="tabs" />
//                     <label class={styles.tab__ispolnenie} for="radio-4">ГОРИЗОНТАЛЬНОЕ</label>
//                     <input className={styles.radio5} type="radio" id="radio-5" name="tabs" />
//                     <label class={styles.tab__ispolnenie} for="radio-5">ВЕРТИКАЛЬНОЕ</label>
//                     <span className={styles.glider__ispolnenie}></span>
//                   </div>
//                 </div>

//                 <div className={styles.controls}>
//                   <p>АВТОМАТИКА</p>
//                   <div class={styles.tabs}>
//                     <input type="radio" id="radio-1" name="tabs" checked />
//                     <label class={styles.tab} for="radio-1">ВСТРОЕННАЯ</label>
//                     <input type="radio" id="radio-2" name="tabs" />
//                     <label class={styles.tab} for="radio-2">ОТДЕЛЬНАЯ</label>
//                   </div>
//                 </div>


//                 <div className={styles.controls}>
//                   <p>РАЗМЕРЫ</p>
//                   <div class={styles.tabs}>
//                     <input type="range" name="number" id="num" min="1" />
//                     <input type="range" name="number" id="num" min="1" />
//                   </div>
//                 </div>

//                 <div className={styles.controls}>
//                   <p>ВЫБЕРИТЕ ЦВЕТ ВОРОТ</p>
//                   <div class={styles.buttons}>
//                     <buttons class={styles.btn1}></buttons>
//                     <buttons class={styles.btn2}></buttons>
//                     <buttons class={styles.btn3}></buttons>
//                     <buttons class={styles.btn4}></buttons>
//                     <buttons class={styles.btn5}></buttons>
//                     <buttons class={styles.btn6}></buttons>
//                     <buttons class={styles.btn7}></buttons>
//                     <buttons class={styles.btn8}></buttons>
//                   </div>
//                 </div>
//               </div>
//               <div className={styles.texture}>
//                 <p>ТИП ПОВЕРХНОСТИ</p>
//                 <div className={styles.texture__photo}>
//                   <div className={styles.texture1}>
//                     <div className={styles.first}>
//                       <div className={styles.img}>
//                         <img src={der1} alt="текстура" />
//                       </div>
//                       <div className={styles.checked}>
//                         <input type="radio" id="contactChoice4" name="contact" value="check" />
//                         <label for="contactChoice4"><img src={check} alt="волна" /></label>
//                       </div>
//                     </div>

//                     <div className={styles.second}>
//                       <div className={styles.img}>
//                         <img src={der2} alt="текстура" />
//                       </div>
//                       <div className={styles.checked}>
//                         <input type="radio" id="contactChoice4" name="contact" value="check" />
//                         <label for="contactChoice4"><img src={check} alt="волна" /></label>
//                       </div>
//                     </div>
//                   </div>

//                   <div className={styles.texture2}>
//                     <div className={styles.third}>
//                       <div className={styles.img}>
//                         <img src={der3} alt="текстура" />
//                       </div>
//                       <div className={styles.checked}>
//                         <input type="radio" id="contactChoice4" name="contact" value="check" />
//                         <label for="contactChoice4"><img src={check} alt="волна" /></label>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>

//           <div className={styles.container1_right}>
//             <div className={styles.container__tabs}>
//               <div className={styles.tabs}>
//                 <input className={styles.radio1} type="radio" id="radio-1" name="tabs" />
//                 <label className={styles.tab} for="radio-1">ОТКАТНЫЕ</label>
//                 <input className={styles.radio2} type="radio" id="radio-2" name="tabs" />
//                 <label className={styles.tab} for="radio-2">РАСПАШНЫЕ</label>
//                 <input className={styles.radio3} type="radio" id="radio-3" name="tabs" />
//                 <label className={styles.tab} for="radio-3">ГАРАЖНЫЕ</label>
//                 <span className={styles.glider}></span>
//               </div>
//             </div>
//             <div className={styles.container__img}>
//               <img src={vor1} alt="откатные ворота" />
//             </div>
//             <form className={styles.container__form}>
//               <input type="text" className={styles.input} placeholder='Телефон' />
//               <Button type='submit' onClick={(e) => handleSubmit(e)} styles={medium} name="УТОЧНИТЬ СТОИМОСТЬ" />

//             </form>
//           </div>

//         </div>







//       </div>
//       {
//         modalActive && <Modal active={modalActive} setActive={setModalActive}>
//           <div className={styles.popupContainer}>
//             <div className={styles.imgContainer}>
//               <img src={popup} alt="девушка" />
//             </div>
//             <div className={styles.popupTxt}><div className={styles.popupTitle}>СПАСИБО ЗА ВАШЕ ОБРАЩЕНИЕ, НАШ МЕНЕДЖЕР СКОРО С ВАМИ СВЯЖЕТСЯ!
//             </div></div>
//           </div>    </Modal>
//       }
//       {
//         modalSecond &&
//         <Modal active={modalSecond} setActive={setModalSecond}>
//           <div className={styles.popupContainerNext}>
//             <div className={styles.popupTitleNext}>РАСЧЕТ СТОИМОСТИ УСЛУГИ</div>
//             <form className={styles.formNext}>
//               <input type="text" className={styles.inputNext} placeholder='Ваше имя' />
//               <input type="text" className={styles.inputNext} placeholder='Телефон' />
//               <Button name="РАССЧИТАТЬ ВОРОТА" onClick={handleSubmit} styles={popupStyle} />
//             </form>
//           </div>
//         </Modal>
//       }
//     </div>
//   )
// }
