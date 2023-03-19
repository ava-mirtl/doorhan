import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import styles from '../Tablist/Tablist.module.scss';
import vor1 from '../../assets/images/vorota1.png';
import vor2 from '../../assets/images/vorota2.png';
import vor3 from '../../assets/images/vorota3.png';




export default function WithReactTabs() {
    return (
        <div className={styles.with_react_tabs}>
            <Tabs>
                <TabList className={styles.tabs}>
                    <Tab>ОТКАТНЫЕ</Tab>
                    <Tab>РАСПАШНЫЕ</Tab>
                    <Tab>ГАРАЖНЫЕ</Tab>
                </TabList>

                <TabPanel className={styles.tab_content}>
                    <div className={styles.tab_img}>
                        <img src={vor1} alt="" />
                    </div>
                </TabPanel>
                <TabPanel className={styles.tab_content}>
                    <div className={styles.tab_content}>
                        <img src={vor2} alt="" />
                    </div>
                </TabPanel>
                <TabPanel className={styles.tab_content}>
                    <div className={styles.tab_content}>
                        <img src={vor3} alt="" />
                    </div>
                </TabPanel>
                <span className={styles.glider}></span>
            </Tabs>

        </div>
    )
}





// export default function Tabs() {
//     return (
//         <div className={styles.wraper}>
//             <div className={styles.container__tabs}>
//                 <div className={styles.tabs}>
//                     <input className={styles.radio1} type="radio" id="radio1" name="tabs" />
//                     <label className={styles.tab} htmlfor="radio1">ОТКАТНЫЕ</label>
//                     <input className={styles.radio2} type="radio" id="radio2" name="tabs" />
//                     <label className={styles.tab} htmlfor="radio2">РАСПАШНЫЕ</label>
//                     <input className={styles.radio3} type="radio" id="radio3" name="tabs" />
//                     <label className={styles.tab} htmlfor="radio3">ГАРАЖНЫЕ</label>
//                     <span className={styles.glider}></span>
//                 </div>
//             </div>
//         </div >
//     )
// }

