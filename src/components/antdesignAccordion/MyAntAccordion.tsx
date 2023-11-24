import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import './MyAntAccordion.css';

import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { setStep2_bendler } from '../../store/slices/mainInfoSlice';
import { nanoid } from '@reduxjs/toolkit';
import { RootState } from '../../store';



function MyAntAccordion() {
    const dispatch = useDispatch()
    const { bendler } = useSelector((store: RootState) => store.mainInfo.step2)
    const [order, setOrder] = useState<string>("")
    const handleArea = (e: any) => {
        setOrder(e.target.value)
    }
    const disableControl = order.trim() === "" ? true : false

    const handleAdd = () => {
        dispatch(setStep2_bendler({ id: nanoid(), bend: order }))
        setOrder('')
    }
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Başlıq və əsaslandırma',
            children: <div>
                <div className='sablon_div'>
                    <button className='sablon '>+ Şablondan seç</button>
                    <button className='sablon'> Şablon kimi yadda saxla</button>
                </div>
                <h4>Əmrin məzmunu</h4>
                <input type="text" placeholder='Type' />
                <h4>Preambula</h4>
                <textarea placeholder='Type' rows={10}></textarea>
            </div>,
        },
        {
            key: '2',
            label: 'Əmr / Sərəncam / Qərar',
            children: <div>
                <div className='sablon_div'>
                    <button className='sablon '>+ Şablondan seç</button>
                    <button className='sablon'> Şablon kimi yadda saxla</button>
                </div>
                <h4>Bəndin mətni</h4>
                <textarea onChange={handleArea} rows={7} value={order}> </textarea>

                <div className='sablon_div'>
                    <button disabled={disableControl} className='sablon '>Imtina et</button>
                    <button className='sablon'>Dəyiş</button>
                    {/* @ts-ignore  */}
                    <button onClick={handleAdd} disabled={disableControl} className='sablon'>Əlavə et</button>
                </div>
                {bendler.length > 0 && <div style={{ border: "1px solid red", minHeight: "300px" }}>
                    {bendler.map((item: any) => {
                        return (
                            <div content=''>
                                {item?.bend}
                            </div>
                        )
                    })}
                </div>}
            </div>,
        },
        {
            key: '3',
            label: 'Tapşırıq',
            children: <div className='content'></div>
        },
        {
            key: '4',
            label: 'Əsas',
            children: <div>
                <h4>Mətn</h4>
                <textarea rows={7}></textarea>
            </div>
        }
    ];


    const onChange = (key: string | string[]) => {
        console.log(key);
    };



    return (
        <>
            <Collapse items={items} onChange={onChange} />

        </>

    )
}

export default MyAntAccordion



