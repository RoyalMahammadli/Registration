import { Button, message, Steps, theme } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setStep1 } from '../../store/slices/mainInfoSlice';
import './MyAntStep.css';
import MyAntAccordion from '../antdesignAccordion/MyAntAccordion';
function MyAntStep() {
    const dispatch = useDispatch()
    const { step1 } = useSelector((store: RootState) => store.mainInfo)

    const settingStep1 = (key: string
        , value: any) => {
        // console.log(key, value);
        // @ts-ignore 
        dispatch(setStep1({ key: key, value: value }))
    }

    const setTesnifatWithNomenklatur = (e: any) => {
        settingStep1('tesnifat', e.target.value)
        console.log(e.target.value);

        switch (e.target.value) {
            case 'Digər':
                settingStep1('nomenklatur', '12.1')
                break;
            case 'Göstəriş məktubu':
                settingStep1('nomenklatur', '12.2')
                break;
            case 'Metodiki tövsiyyə':
                settingStep1('nomenklatur', '12.3')
                break;
            default:
                console.log('nothing will happen');
        }
    }
    const handleSenedeBax = () => {
        console.log("you clicked mee");
        alert(`
            Təsnifat:${step1.tesnifat},
            Təyinat:${step1.teyinat},
            Nomenklatur:${step1.nomenklatur},
            Məzmun:${step1.mezmun}`
        )

    }

    const steps = [
        {
            title: 'Əsas Məlumatlar',
            teyinat: <select placeholder='ss' value={step1.teyinat} onChange={(e) => settingStep1("teyinat", e.target.value)}>
                <option className={step1.teyinat !== '' ? 'none' : 'block'} disabled value=''>Seçin</option>
                <option value='Ümumi'>Ümumi</option>
                <option value="Apellasiya şurası">Apellasiya şurası</option>
                <option value="Təhlükəsizlik şurası">Təhlükəsizlik şurası</option>
            </select>,
            tesnifat: <select value={step1.tesnifat} onChange={setTesnifatWithNomenklatur}>
                <option className={step1.tesnifat !== '' ? 'none' : 'block'} disabled value=''>Seçin</option>
                <option value='Digər'>Digər</option>
                <option value="Göstəriş məktubu">Göstəriş məktubu</option>
                <option value="Metodiki tövsiyyə">Metodiki tövsiyyə</option>
            </select>,
            nomenklatur: <select disabled >
                <option className={step1.tesnifat !== '' ? 'none' : 'block'} selected disabled value=''>Seçin</option>
                <option selected={step1.tesnifat == 'Digər' ? true : false} value="12.1">12.1</option>
                <option selected={step1.tesnifat == 'Göstəriş məktubu' ? true : false} value="12.2">12.2</option>
                <option selected={step1.tesnifat == 'Metodiki tövsiyyə' ? true : false} value="12.3">12.3</option>
            </select>,
            konfidensial: <label > <input checked={step1.konfidensial} onChange={(e) => settingStep1('konfidensial', e.target.checked)} type="checkbox" name="" id="" />Konfidensial</label>,
            mezmun: <select value={step1.mezmun} onChange={(e) => settingStep1("mezmun", e.target.value)}>
                <option className={step1.mezmun !== '' ? 'none' : 'block'} disabled value=''>Daxil edin və ya seçin</option>
                <option value='test'>Test</option>
                <option value="test1">Test 1</option>
                <option value="test2">Test 2</option>
            </select>,
            div2: <div>
                <div className="content">
                    <h2>Cavablandırılan sənəd</h2>
                    <button className='green btn'>+ Sənədi seç</button>
                </div>

                <div className="content">
                    <h2>Əlaqəli sənədi seç</h2>
                    <button className='white btn'>+ Sənədi seçin</button>
                </div>

            </div>

        },


        {
            title: 'Əmr Məlumatları',
            tesnifat: step1.tesnifat,
            nomenklatur: step1.nomenklatur,
            konfidensial: step1.konfidensial ? "Bəli" : "Xeyr",
            mezmun: step1.mezmun,
            div2: <div className='content'>
                <MyAntAccordion />
            </div>

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
                {current !== 0 && <button
                    type='button'
                    onClick={handleSenedeBax}
                    className='senede_bax'
                    disabled={(step1.teyinat && step1.tesnifat && step1.nomenklatur && step1.mezmun) ? false : true
                    }>Sənədə bax</button>}

            </div >
            {steps[current].div2}




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
