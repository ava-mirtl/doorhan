import React from 'react';
import styles from './Calc.module.scss';
import pict from '../../assets/images/gv.png';
import pic1 from '../../assets/images/online1.png';
import pic2 from '../../assets/images/online2.png';
import pic3 from '../../assets/images/online3.png';
import pic4 from '../../assets/images/online4.png';
import Button from '../Button/Button';



export default function Calc() {
  return (
    <div>
      <div className={styles.wraper}>
        <div className={styles.title1}>ОНЛАЙН КАЛЬКУЛЯТОР</div>
        <div className={styles.container1}>
          <div className={styles.container1_left}>
            <div className={styles.container1_left__top}>


              <div className={styles.choice}>
                <div className={styles.img}><img src={pic1} alt="ДОСКА" /></div>
                <input type="radio" id='btn' name='btn1' value='btn' checked />
                <label for="btn">
                  <span>г</span>
                </label>
                <p>ДОСКА</p>
              </div>

              <div className={styles.choice}>
                <div className={styles.img}><img src={pic2} alt="ШИРОКАЯ ЦЕНТРАЛЬНАЯ ПОЛОСА" /></div>
                <input type="radio" id='btn' name='btn1' value='btn' checked />
                <label for="btn">
                  <span>г</span>
                </label>
                <p>ШИРОКАЯ ЦЕНТРАЛЬНАЯ ПОЛОСА</p>
              </div>

              <div className={styles.choice}>
                <div className={styles.img}><img src={pic3} alt="ФИЛЕНКА" /></div>
                <input type="radio" id='btn' name='btn1' value='btn' checked />
                <label for="btn">
                  <span>г</span>
                </label>
                <p>ФИЛЕНКА</p>
              </div>

              <div className={styles.choice}>
                <div className={styles.img}><img src={pic4} alt="ВОЛНА" /></div>
                <input type="radio" id='btn' name='btn1' value='btn' checked />
                <label for="btn">
                  <span>г</span>
                </label>
                <p>ВОЛНА</p>
              </div>



            </div>
            <div className={styles.container1_bottom}></div>
          </div>




          <div className={styles.container1_right}>
            <div class={styles.container}>
              <div class={styles.tabs}>
                <input type="radio" id="radio-1" name="tabs" checked />
                <label class={styles.tab} for="radio-1">ОТКАТНЫЕ</label>
                <input type="radio" id="radio-2" name="tabs" />
                <label class={styles.tab} for="radio-2">РАСПАШНЫЕ</label>
                <input type="radio" id="radio-3" name="tabs" />
                <label class={styles.tab} for="radio-3">ГАРАЖНЫЕ</label>
                <span class={styles.glider}></span>
              </div>
            </div>
            <div></div>
          </div>



        </div>


        <div className={styles.title2}>НАШИ РАБОТЫ</div>
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
              <Button name="РАССЧИТАТЬ ВОРОТА" />
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}
