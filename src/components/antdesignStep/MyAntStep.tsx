import { Button, Form, Modal, Steps, notification, theme } from 'antd';
import { useState } from 'react';
import { MdOutlineDownloadDone } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { users } from '../../const';
import { RootState } from '../../store';
import { setStep1, setStep4_imza } from '../../store/slices/mainInfoSlice';
import MyAntAccordion from '../antdesignAccordion/MyAntAccordion';
import MyUpload from '../antdesignUpload/MyUpload';
import './MyAntStep.css';

function MyAntStep() {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };


    const dispatch = useDispatch()
    const { step1, step4 } = useSelector((store: RootState) => store.mainInfo)

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

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleStep4Sec = (item: any) => {
        setIsModalOpen(false)
        dispatch(setStep4_imza(item))
    }

    const steps = [
        {
            title: 'Əsas Məlumatlar',
            teyinat:

                <select value={step1.teyinat} onChange={(e) => settingStep1("teyinat", e.target.value)}>
                    <option selected className={step1.teyinat !== '' ? 'none' : 'block'} disabled value=''>Seçin</option>
                    <option value='Ümumi'>Ümumi</option>
                    <option value="Apellasiya şurası">Apellasiya şurası</option>
                    <option value="Təhlükəsizlik şurası">Təhlükəsizlik şurası</option>
                </select>

            ,
            tesnifat: <select value={step1.tesnifat} onChange={setTesnifatWithNomenklatur}>
                <option selected className={step1.tesnifat !== '' ? 'none' : 'block'} disabled value=''>Seçin</option>
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
                <option selected className={step1.mezmun !== '' ? 'none' : 'block'} disabled value=''>Daxil edin və ya seçin</option>
                <option value='test'>Test</option>
                <option value="test1">Test 1</option>
                <option value="test2">Test 2</option>
            </select>,
            div2: <div>
                <div className="content">
                    <h2>Cavablandırılan sənəd</h2>
                    <button type='button' className='green btn'>+ Sənədi seç</button>
                </div>

                <div className="content">
                    <h2>Əlaqəli sənədi seç</h2>
                    <button type='button' className='white btn'>+ Sənədi seçin</button>
                </div>

            </div>

        },
        {
            title: 'Əmr Məlumatları',
            tesnifat: `:${step1.tesnifat}`,
            nomenklatur: ` :${step1.nomenklatur}`,
            konfidensial: step1.konfidensial ? "Bəli" : "Xeyr",
            mezmun: `:${step1.mezmun}`,
            div2: <div className='content'>
                <MyAntAccordion />
            </div>

        },
        {
            title: 'Elektron Forma',
            tesnifat: `:${step1.tesnifat}`,
            nomenklatur: ` :${step1.nomenklatur}`,
            konfidensial: step1.konfidensial ? "Bəli" : "Xeyr",
            mezmun: `:${step1.mezmun}`,
            div2: <div className='content'>
                <h3>Elektron forma</h3>
                <div className='apload_sablon'>
                    <MyUpload />
                    <button type='button' className='sablon'>Skan et</button>
                </div>
            </div>
        },
        {
            title: 'Paylanacaqlar Siyahısı',
            tesnifat: `:${step1.tesnifat}`,
            nomenklatur: ` :${step1.nomenklatur}`,
            konfidensial: step1.konfidensial ? "Bəli" : "Xeyr",
            mezmun: `:${step1.mezmun}`,
            div2: <div className='content'>
                <h3>Imzalamaya vermə</h3>
                <button type='button' className='sablon' onClick={showModal}><IoMdPersonAdd /> Əlavə et</button>
                <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                    <div className='modalDiv'>
                        <div className='user'>
                            {users?.map(item => {
                                return (
                                    <div className="box" key={item.id}>
                                        <p>Ad:{item.name}</p>
                                        <p>Vəzife:{item.vezife}</p>
                                        <p>Vergi Orqanı:{item.vergiOrqan}</p>
                                        <button type='button' onClick={() => handleStep4Sec(item)} className='sablon'>{item.seç}</button>

                                    </div>
                                )
                            })}
                        </div>
                        <div className='user'></div>
                        <div className='user'></div>

                    </div>
                </Modal>
                {Object.keys(step4.imzalama).length > 0 && <div className='imza-box'>
                    <table>
                        <thead>
                            <tr>
                                <th>SAA</th>
                                <th>Vəzifə</th>
                                <th><CiCircleRemove /></th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>{step4.imzalama.name}</td>
                                <td>{step4.imzalama.vezife}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>}

                <h3>Vizaya vermə</h3>
                <button type='button' className='sablon'><IoMdPersonAdd /> Əlavə et</button>
                <h3>Digər strukturla razılaşdırma</h3>
                <button type='button' className='sablon'><IoMdPersonAdd /> Əlavə et</button>
            </div>
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

    const items = steps.map((item) => ({ key: item.title, title: item.title, Error: item.tesnifat }));

    const contentStyle: React.CSSProperties = {

        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        padding: '1rem'
    };


    //Notification
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        api.open({
            message: `237191873419827391823 sənədi qeydiyyata alınıb."Əmr/Sərəncam/Qərar hazırlanması" tapşırığı yaradılıb`,
            duration: 0,
            icon: <MdOutlineDownloadDone />,
            className:'black',
            btn:<button className='sablon'>Tapşırığı aç</button>
           
        });
    };
    return (
        <>
            <Steps current={current} items={items} onChange={onChange} />
            <h1>Əsas fəaliyyətlər üzrə əmrlər</h1>
            <Form
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete='off'
                initialValues={{ remember: true }}
            >
                <div className='content' style={contentStyle}>

                    <h2>{steps[current].title}</h2>
                    <div className={current == 0 ? 'flex' : 'none'}>
                        <p>Təyinatı</p>
                        <Form.Item
                            required
                            name='Təyinat'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please include some information'
                                },
                                {
                                    type: 'string', message: 'Please include'
                                }
                            ]}
                        >

                            {steps[current].teyinat}
                        </Form.Item>
                    </div>
                    <div className={current !== 0 ? 'content-wrap' : ''}>

                        <div className={current == 0 ? 'flex' : 'f'}>
                            <p>Təsnifat</p>
                            <Form.Item

                                name='Təsnifat'
                                rules={[
                                    {
                                        required: current === 0 ? true : false,
                                        message: current === 0 ? 'Please include some information' : ''
                                    },
                                    {
                                        type: 'string', message: 'Please include'
                                    }
                                ]}
                            >
                                {steps[current].tesnifat}
                            </Form.Item>
                        </div>

                        <div className={current == 0 ? 'flex' : 'f'}>
                            <p>Nomenklatur</p>
                            {steps[current].nomenklatur}
                            {current !== 0 && <p className='konfidensial'>Konfidensial:</p>}
                            {steps[current].konfidensial}
                        </div>

                        <div className={current == 0 ? 'flex' : 'f'}>
                            <p>Məzmun</p>
                            <Form.Item
                                // className='form'
                                name='Məzmun'
                                rules={[
                                    {
                                        required: current === 0 ? true : false,
                                        message: current === 0 ? 'Please include some information' : '',

                                    },
                                    {
                                        type: 'string', message: 'Please include'
                                    }
                                ]}
                            >
                                {steps[current].mezmun}
                            </Form.Item>
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
                <div style={{ marginTop: 24 }
                }>
                    {
                        current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
                                Geri
                            </Button>
                        )
                    }
                    {
                        current < steps.length - 1 && (
                            <Button className='green' onClick={() => next()}>
                                Davam et
                            </Button>
                        )
                    }

                    {
                        Object.keys(step4.imzalama).length !== 0 && (
                            <Form.Item>
                                {contextHolder}
                                <Button htmlType='submit' onClick={openNotification}>
                                    Qeydiyyata al
                                </Button>
                            </Form.Item>
                        )
                    }
                </div >
            </Form >
        </>
    )
}

export default MyAntStep
