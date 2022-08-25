import style from '../../../styles/container/components-css/filter.module.css';
import { useState } from 'react';

export default function Input(prop) {
        const Api_data = [...new Set(prop.api)];
        const [Data, setData] = useState('')
        const [Place_holder, setPlace_holder] = useState('set ' + prop.title)
        const New_Api = (Array.isArray(Api_data) ? Api_data : []).filter((e) => {
            return e.includes(Data)
        })

        return (
            <span className={style.religion_tab}>
                <p className={style.hadding}>{prop.title}</p>
                <input placeholder={Place_holder} onChange={(z) => {
                    z.target.nextSibling.style.display = 'initial';
                    setData(z.target.value.toLowerCase());
                }} />
                <span className={style.options}>
                    <p onClick={() => {
                        setData('');
                        prop.set('');
                        setPlace_holder('set ' + prop.title)
                    }}>all</p>
                    {(Array.isArray(New_Api) ? New_Api : []).map((items, index) => {
                        return (
                            <p key={index} onClick={(z) => {
                                setData('')
                                prop.set(z.target.innerText.toLowerCase());
                                setPlace_holder(z.target.innerText)
                            }}>{items}</p>
                        )
                    })}
                </span>
            </span >
        )
    }