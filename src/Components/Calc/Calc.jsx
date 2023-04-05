import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Title from '../Title/Title';
import Tabs from '../Tablist/Tablist';
import ModalGrats from '../Modal/ModalGrats';
import pic1 from '../../assets/images/online1.png';
import pic2 from '../../assets/images/online2.png';
import pic3 from '../../assets/images/online3.png';
import pic4 from '../../assets/images/online4.png';
import check from '../../assets/icons/check.png';
import der1 from '../../assets/images/derevo1.png';
import der2 from '../../assets/images/derevo2.png';
import der3 from '../../assets/images/derevo3.png';
import str from '../../assets/icons/str.png'
import Button, { medium3 } from '../Button/Button';
import { blue } from '../Title/Title';
import styles from './Calc.module.scss';


export default function Calc() {
  const initialData = {
    phone: "",
    type: "",
    ispolnenie: "",
    avtomatika: "",
    dlina: "",
    visota: "", 
    color: "", 
    texture: "",
    vorota: ""
}

  const [modalActive, setModalActive] = useState(false);
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [countError, setCountError] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [ispol, setIspol] = useState("горизонтальное");
  const [avtom, setAvtom] = useState("встроенная");
  const [color, setColor] = useState("");
  const [texture, setTexture] = useState("");
  const [vorota, setVorota] = useState("");
  const [formData, setFormData] = useState(initialData);
  const [valid, setValid] = useState(false);
  const [errorPhone, setErrorPhone] = useState("Введите номер телефона");
  const [phoneDirty, setPhoneDirty] = useState(false)


  useEffect(() => {
    setFormData({
        phone: { phone },
        type: { type },
        ispolnenie: { ispol },
        avtomatika: { avtom },
        dlina: { count },
        visota: { count2 }, 
        color: { color }, 
        texture: { texture },
        vorota: { vorota }})}, [phone, type, ispol, avtom,
                                count, count2, color, texture, vorota, valid]);

  useEffect(() => { }, [formData]);
    
  useEffect(() => { if (!errorPhone) { setValid(true) }}, [errorPhone]);
    

  const handlePhone = (e) => {
    setErrorPhone(null)
    setPhone(e.target.value);
    if (e.target.value=="") setErrorPhone("Введите номер телефона");
    const re = /^\+7\s?\(?\d{3}\)?\s?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    if (!re.test(e.target.value)) {
      setErrorPhone("Допустимый формат: +7 (999) 999-99-99; +7 999-999-99-99; +7 999 999 99")
    }
    else (setErrorPhone(null))
  }


  const handleSubmit = (e, 
    phone, type, ispol, avtom,
    count, count2, color, texture, vorota) => {
        e.preventDefault();
        setFormData(state => ({...state,
            phone: { phone },
            type: { type },
            ispolnenie: { ispol },
            avtomatika: { avtom },
            dlina: { count },
            visota: { count2 }, 
            color: { color }, 
            texture: { texture },
            vorota: { vorota }}))

            emailjs.send("service_onlg9xh","template_o79m9ld", { 
              phone: formData.phone.phone,
              type: formData.type.type,
              ispolnenie: formData.ispolnenie.ispol,
              avtomatika: formData.avtomatika.avtom,
              dlina: formData.dlina.count,
              visota: formData.visota.count2, 
              color: formData.color.color, 
              texture: formData.texture.texture,
              vorota: formData.vorota.vorota }, 'ZjXCD_toGWo9fEoVg') 
          .then((result) => {
            console.log(result);}, 
          (error) => {
            console.log(error);});

      setCount(0);
      setCount2(0);
      setPhone("");
      setType("");
      setIspol("");
      setAvtom("");
      setColor("");
      setTexture("");
      setVorota("");

            setModalActive(true);
          }


  document.body.style.overflow = '';


  //счетчики длина и высота
  const onNextClick = (a, set) => {
    set(a + 10);
  }

  const onPrevClick = (a, set) => {
    if (a > 10) {
      set(a - 10);
    }
    else {
      set(0)
    }
  }

const handleChange = (e, set) =>{
  setCountError(null);
  const value = parseInt(e.target.value);
  if (/^\d*$/.test(value)){
    set(value);}
  else {
 setCountError('введите числовое значение в сантиметрах')
  }
}

const handleInput = (e, set) =>{
  setCountError(null);
  if (!e.target.value){
    set("");}
}

  return (
    <div>
      <div className={styles.wraper}>
        <Title style={blue} title="ОНЛАЙН КАЛЬКУЛЯТОР" />
        <form onSubmit={(e) => handleSubmit(e, phone, type, ispol, avtom,
    count, count2, color, texture, vorota )} className={styles.container}>
          <div className={styles.container__left}>
            <div className={styles.container__left_top} >
              <div className={styles.choice}>
                <label htmlFor="choice1">
                  <div className={styles.img}>
                    <img src={pic1} alt="ДОСКА" />
                  </div>
                  <input type="radio" id="choice1" name="type" 
                      value="доска" checked={type=="доска"?true:false}
                      onChange={(e)=>setType(e.target.value)}/>
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
                  <input type="radio" id="choice2" name="type" 
                      value="широкая центральная полоса" checked={type=="широкая центральная полоса"?true:false}
                      onChange={(e)=>setType(e.target.value)}/>
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
                  <input className={styles.checkedInput} type="radio" id="choice3" name="type" 
                      value="филенка" checked={type=="филенка"?true:false} 
                      onChange={(e)=>setType(e.target.value)}/>
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
                  <input type="radio" id="choice4" name="type" 
                  value="волна" checked={type=="волна"?true:false}
                  onChange={(e)=>setType(e.target.value)}/>
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
                  <div className={styles.tabs__isp}>
                    <input className={styles.isp1} type="radio" id="isp1" name="исполнение" 
                    value="горизонтальное"
                    checked={ispol=="горизонтальное"?true:false}
                    onChange={(e)=>setIspol(e.target.value)}/>
                    <label className={styles.tab__isp1} htmlFor="isp1">ГОРИЗОНТАЛЬНОЕ</label>
                    <input className={styles.isp2} type="radio" id="isp2" name="исполнение" 
                    value="вертикальное"
                    checked={ispol=="вертикальное"?true:false}
                    onChange={(e)=>setIspol(e.target.value)} />
                    <label className={styles.tab__isp2} htmlFor="isp2">ВЕРТИКАЛЬНОЕ</label>
                    <span className={styles.glider__isp}></span>
                  </div>
                </div>


                <div className={styles.control_2}>
                  <p className={styles.tabs__p}>АВТОМАТИКА</p>
                  <div className={styles.tabs__avtom}>
                    <input className={styles.avtom1} type="radio" id="avtom1" name="автоматика" value="встроенная"
                    checked={avtom=="встроенная"?true:false}
                    onChange={(e)=>setAvtom(e.target.value)}/>
                    <label className={styles.tab__avtom1} htmlFor="avtom1">ВСТРОЕННАЯ</label>
                    <input className={styles.avtom2} type="radio" id="avtom2" name="автоматика" value="отдельная"
                    checked={avtom=="отдельная"?true:false}
                    onChange={(e)=>setAvtom(e.target.value)}/>
                    <label className={styles.tab__avtom2} htmlFor="avtom2">ОТДЕЛЬНАЯ</label>
                    <span className={styles.glider__avtom}></span>
                  </div>
                </div>


                <div className={styles.control_3}>
                  <p className={styles.tabs__p}>РАЗМЕРЫ</p>
                  <div className={styles.sizes}>
                    <div className={styles.sizes__title}>
                      ДЛИНА
                    </div>
                    <div className={styles.sizes__count}>
                      <button className={styles.bt_left}
                        type="button"
                        onClick={() => onPrevClick(count, setCount)}
                      >
                        <img src={str} alt="left" />
                      </button>
                      <input type="text" name='dlina' onInput={(e)=>handleInput(e, setCount)} onChange={(e)=>handleChange(e, setCount)} value={count}/>
                      <button className={styles.bt_right}
                        type="button"
                        onClick={() => onNextClick(count, setCount)}
                      >
                        <img src={str} alt="right" />
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
                        onClick={() => onPrevClick(count2, setCount2)}
                      >
                        <img src={str} alt="left" />
                      </button>
                      <input type="text" name='visota'  onInput={(e)=>handleInput(e, setCount2)} onChange={(e)=>handleChange(e, setCount2)} value={count2}/>
                      <button className={styles.bt_right}
                        type="button"
                        onClick={() => onNextClick(count2, setCount2)}
                      >
                        <img src={str} alt="right" />
                      </button>
                    </div>
                  </div>
                </div>
                {countError&&<p className={styles.error}>{countError}</p>}
                <div className={styles.control_4}>
                  <p className={styles.tabs__p}>ВЫБЕРИТЕ <br />ЦВЕТ ВОРОТ</p>
                  <div className={styles.colors}>
                    <div><input type="radio" name='color' id='color1' 
                        value="белый" 
                        checked={color=="белый"?true:false}
                        onChange={(e)=>setColor(e.target.value)}/><label className={styles.round} htmlFor="color1"><div className={styles.btn1}></div></label></div>
                    <div><input type="radio" name='color' id='color2' 
                        checked={color=="серый"?true:false}
                        onChange={(e)=>setColor(e.target.value)} 
                        value="серый" /><label className={styles.round} htmlFor="color2"><div className={styles.btn2}></div></label></div>
                    <div><input type="radio" name='color' id='color3' 
                        checked={color=="бежевый"?true:false}
                        onChange={(e)=>setColor(e.target.value)} 
                        value="бежевый" /><label className={styles.round} htmlFor="color3"><div className={styles.btn3}></div></label></div>
                    <div><input type="radio" name='color' id='color4' 
                        checked={color=="зеленый"?true:false}
                        onChange={(e)=>setColor(e.target.value)} 
                        value="зеленый" /><label className={styles.round} htmlFor="color4"><div className={styles.btn4}></div></label></div>
                    <div><input type="radio" name='color' id='color5' 
                        checked={color=="синий"?true:false}
                        onChange={(e)=>setColor(e.target.value)} 
                        value="синий" /><label className={styles.round} htmlFor="color5"><div className={styles.btn5}></div></label></div>
                    <div><input type="radio" name='color' id='color6' 
                        checked={color=="красный"?true:false}
                        onChange={(e)=>setColor(e.target.value)} 
                        value="красный" /><label className={styles.round} htmlFor="color6"><div className={styles.btn6}></div></label></div>
                    <div><input type="radio" name='color' id='color7' 
                        checked={color=="коричневый"?true:false}
                        onChange={(e)=>setColor(e.target.value)} 
                        value="коричневый" /><label className={styles.round} htmlFor="color7"><div className={styles.btn7}></div></label></div>
                    <div><input type="radio" name='color' id='color8' 
                        checked={color=="черный"?true:false}
                        onChange={(e)=>setColor(e.target.value)} 
                        value="черный" /><label className={styles.round} htmlFor="color8"><div className={styles.btn8}></div></label></div>
                  </div>
                </div>




              </div>
              <div className={styles.container_texture}>
                <p>ТИП ПОВЕРХНОСТИ</p>
                <div className={styles.texture__cards}>
                  <div className={styles.texture1}>

                    <label htmlFor="texture1">
                      <div className={styles.first}>
                        <div className={styles.img}>
                          <img src={der1} alt="текстура" />
                        </div>
                        <input type="radio" id="texture1" name="texture" 
                        value="текстура1" checked={texture=="текстура1"?true:false}
                        onChange={(e)=>setTexture(e.target.value)}/>
                        <div className={styles.checked_texture}>
                          <img src={check} alt="текстура" />
                        </div>
                      </div></label>

                    <label htmlFor="texture2">
                      <div className={styles.second}>
                        <div className={styles.img}>
                          <img src={der2} alt="текстура" />
                        </div>
                        <input type="radio" id="texture2" name="texture" 
                        value="текстура2" checked={texture=="текстура2"?true:false}
                        onChange={(e)=>setTexture(e.target.value)}/>
                        <div className={styles.checked_texture}>
                          <img src={check} alt="текстура" />
                        </div>
                      </div>
                    </label>
                  </div>
                  <div className={styles.texture2}>
                    <label htmlFor="texture3">
                      <div className={styles.third}>
                        <div className={styles.img}>
                          <img src={der3} alt="текстура" />
                        </div>
                        <input type="radio" id="texture3" name="texture" 
                        value="текстура3" checked={texture=="текстура3"?true:false}
                        onChange={(e)=>setTexture(e.target.value)}/>
                        <div className={styles.checked_texture}>
                          <img src={check} alt="текстура" />
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className={styles.container__right}>
            <div className={styles.container__right_top}>
              <Tabs vorota={vorota} state={setVorota}/>
            </div>
            <div className={styles.container__right_bottom}>
              <div className={styles.container__form}>
                {(phoneDirty&&errorPhone)&&<div className={styles.error}>{errorPhone}</div>}
                <input type="text" onChange={e=>handlePhone(e)}
                onBlur={()=>setPhoneDirty(true)} className={styles.input} placeholder='Телефон' name='phone' value={phone} 
                />
                <Button type='submit' styles={medium3} name="УТОЧНИТЬ СТОИМОСТЬ" disabled={errorPhone}/>
              </div>
            </div>
          </div>
        </form>
      </div >
      { modalActive && <ModalGrats active={modalActive} setActive={setModalActive}/> }
    </div >
  )
}