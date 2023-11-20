import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setStep1 } from '../../store/slices/mainInfoSlice';
import './MyAntStep.css';
function MyAntStep() {
    const dispatch = useDispatch()
    const { step1 } = useSelector((store: RootState) => store.mainInfo)

    const settingStep1 = (key: string
        , value: any) => {
        console.log(key, value);
        // @ts-ignore 
        dispatch(setStep1({ key: key, value: value }))
    }


    const steps = [
        {
            title: 'Əsas Məlumatlar',
            teyinat: <select value={step1.teyinat} onChange={(e) => settingStep1("teyinat", e.target.value)}>
                <option value='Ümumi'>Ümumi</option>
                <option value="Apellasiya şurası">Apellasiya şurası</option>
                <option value="Təhlükəsizlik şurası">Təhlükəsizlik şurası</option>
            </select>,
            tesnifat: <select value={step1.tesnifat} onChange={(e) => settingStep1("tesnifat", e.target.value)}>
                <option value='Digər'>Digər</option>
                <option value="Göstəriş məktubu">Göstəriş məktubu</option>
                <option value="Metodiki tövsiyyə">Metodiki tövsiyyə</option>
            </select>,
            nomenklatur: <select disabled >
                <option value='Secin'>Seçin</option>
                <option value="12.1">12.1</option>
                <option selected={step1.tesnifat == 'Göstəriş məktubu' ? true : false} value="12.2">12.2</option>
                <option value="12.3">12.3</option>
            </select>,
            konfidensial: <label > <input checked={step1.konfidensial} onChange={(e) => settingStep1('konfidensial', e.target.checked)} type="checkbox" name="" id="" />Konfidensial</label>,
            mezmun: <select value={step1.mezmun} onChange={(e) => settingStep1("mezmun", e.target.value)}>
                <option value='test'>test</option>
                <option value="Apellasiya şurası">Apellasiya şurası</option>
                <option value="Təhlükəsizlik şurası">Təhlükəsizlik şurası</option>
            </select>
        },
        {
            title: 'Əmr Məlumatları',
            tesnifat: step1.tesnifat,
            nomenklatura: '',
            konfidensial: step1.konfidensial ? "Bəli" : "Xeyr",
            mezmun: step1.mezmun

        },
        {
            title: 'Elektron Forma',
        },
        {
            title: 'Paylanacaqlar Siyahısı',
        }
    ];

    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const onChange = (value: number) => {
        console.log('onChange', value)
        setCurrent(value)

    }

    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const items = steps.map((item) => ({ key: item.title, title: item.title }));

    const contentStyle: React.CSSProperties = {

        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        padding: '1rem'
    };


    return (
        <>
            <Steps current={current} items={items} onChange={onChange} />
            <h1>Əsas fəaliyyətlər üzrə əmrlər</h1>
            <div className='content' style={contentStyle}>
                <h2>{steps[current].title}</h2>
                <div className={current == 0 ? 'flex' : 'none'}>
                    <p>Təyinatı</p>
                    {steps[current].teyinat}
                </div>
                <div className={current !== 0 ? 'content-wrap' : ''}>

                    <div className={current == 0 ? 'flex' : 'f'}>
                        <p>Təsnifat</p>
                        {steps[current].tesnifat}
                    </div>

                    <div className={current == 0 ? 'flex' : 'f'}>
                        <p>Nomenklatur</p>
                        {steps[current].nomenklatur}
                        {current !== 0 && <p className='konfidensial'>Konfidensial:</p>}
                        {steps[current].konfidensial}
                    </div>

                    <div className={current == 0 ? 'flex' : 'f'}>
                        <p>Məzmun</p>
                        {steps[current].mezmun}
                    </div>
                </div>




            </div >

            <div className="content">
                <h2>Cavablandırılan sənəd</h2>
                <button className='green btn'>+ Sənədi seç</button>
            </div>

            <div className="content">
                <h2>Əlaqəli sənədi seç</h2>
                <button className='white btn'>+ Sənədi seçin</button>
            </div>

            {/* Buttons */}
            <div style={{ marginTop: 24 }}>
                {current < steps.length - 1 && (
                    <Button className='green' onClick={() => next()}>
                        Davam et
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
                {current > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                        Geri
                    </Button>
                )}
            </div>
        </>
    )
}

export default MyAntStep
