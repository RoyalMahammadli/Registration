import { Button, Form, Modal, Steps, notification, theme } from 'antd';
import { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { IoMdPersonAdd } from "react-icons/io";
import { MdOutlineDownloadDone } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { myStep1, myStep2, myStep4, users } from '../../const';
import { RootState } from '../../store';
import { setStep1, setStep4_RemoveImza, setStep4_imza } from '../../store/slices/mainInfoSlice';
import MyAntAccordion from '../antdesignAccordion/MyAntAccordion';
import MyUpload from '../antdesignUpload/MyUpload';
import './MyAntStep.css';

function MyAntStep() {
    const [current, setCurrent] = useState<number>(0);
    const [error, setError] = useState<boolean>(false)
    const dispatch = useDispatch()
    const { step1, step2, step4 } = useSelector((store: RootState) => store.mainInfo)

    // Getting step1 information
    const settingStep1 = (key: string
        , value: any) => {
        // @ts-ignore 
        dispatch(setStep1({ key: key, value: value }))
    }

    // Set Nomenklatur to Tesnifat
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
    // Alert for senede bax
    const handleSenedeBax = () => {
        console.log("you clicked mee");
        alert(`
            Təsnifat:${step1.tesnifat},
            Təyinat:${step1.teyinat},
            Nomenklatur:${step1.nomenklatur},
            Məzmun:${step1.mezmun}`
        )

    }
    // ant drawer control
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => { setIsModalOpen(true) };
    const handleOk = () => { setIsModalOpen(false) };
    const handleCancel = () => { setIsModalOpen(false) };

    //handle ant Form
    const onFinish = (values: any) => { console.log('Success:', values) };
    const onFinishFailed = (errorInfo: any) => {
        // setError(true)
        console.log('Failed:', errorInfo)
    };
    const { token } = theme.useToken();
    const onChange = (value: number) => {
        console.log('onChange', value)
        setCurrent(value)
    }
    //Handle buttons
    const next = () => { setCurrent(current + 1) };
    const prev = () => { setCurrent(current - 1) };

    // When press Sec in Imzalayanlar
    const handleStep4Sec = (item: any) => {
        setIsModalOpen(false)
        dispatch(setStep4_imza(item))
    }
    //Remove imza table
    const handleRemoveImza = (id: number) => {
        dispatch(setStep4_RemoveImza(id))
    }

    // STEP1 STATUS CONTROL ---wait,process,finish
    const controlStep1 = (object: myStep1, currentStep: number) => {
        const empty = Object.values(object).some((item: string | boolean) => item == '')
        const finish = Object.values(object).every((item: string | boolean) => item !== '')
        if (empty && error && current != 0) {
            return 'error'
        } else if (currentStep != 0 && finish) {
            return 'finish'
        } else if (currentStep == 0) {
            return 'process'
        } else if (currentStep != 0 && empty) {
            return 'wait'
        }
    }

    // STEP2 STATUS CONTROL ---wait,process,finish
    const controlStep2 = (object: myStep2, currentStep: number) => {
        const empty = Object.values(object).some((item: string | string[]) => item == '' || item.length == 0)
        const finish = Object.values(object).every((item: string | string[]) => item !== '' || item.length != 0)
        if (empty && error && current != 1) {
            return 'error'
        } else if (currentStep != 1 && finish) {
            return 'finish'
        } else if (currentStep == 1) {
            return 'process'
        } else if (currentStep != 1 && empty) {
            return 'wait'
        }
    }

    // STEP4 STATUS CONTROL ---wait,process,finish
    const controlStep4 = (object: myStep4, currentStep: number) => {
        const empty = Object.keys(object.imzalama).length == 0
        const finish = Object.entries(object.imzalama).length > 0
        if (empty && error && current != 3) {
            return 'error'
        } else if (currentStep != 3 && finish) {
            return 'finish'
        } else if (currentStep == 3) {
            return 'process'
        } else if (currentStep != 3 && empty) {
            return 'wait'
        }
    }
//My main step array
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

            </div>,
            status: controlStep1(step1, current)

        },
        {
            title: 'Əmr Məlumatları',
            tesnifat: `:${step1.tesnifat}`,
            nomenklatur: ` :${step1.nomenklatur}`,
            konfidensial: step1.konfidensial ? "Bəli" : "Xeyr",
            mezmun: `:${step1.mezmun}`,
            div2: <div className='content'>
                <MyAntAccordion />
            </div>,
            status: controlStep2(step2, current)

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
            </div>,
            status: current === 2 ? 'process' : 'finish'
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
                                <th>Vəzifə orqanı</th>
                                <th>Qeyd</th>
                                <th>Status</th>
                                <th>Tarix</th>
                                <th ><CiCircleRemove className='cicircleRemove' onClick={handleRemoveImza} /></th>

                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>{step4.imzalama.name}</td>
                                <td>{step4.imzalama.vezife}</td>
                                <td>{step4.imzalama.vergiOrqan}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>}

                <h3>Vizaya vermə</h3>
                <button type='button' className='sablon'><IoMdPersonAdd /> Əlavə et</button>
                <h3>Digər strukturla razılaşdırma</h3>
                <button type='button' className='sablon'><IoMdPersonAdd /> Əlavə et</button>
            </div>,
            status: controlStep4(step4, current)
        }
    ];

    const items = steps.map((item) => ({ key: item.title, title: item.title, status: item.status }));

    const contentStyle: React.CSSProperties = {

        borderRadius: token.borderRadiusLG,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        padding: '1rem'
    };

    //Notification
    const [api, contextHolder] = notification.useNotification();
    const openNotification = () => {
        const step1Empty = Object.values(step1).some((item: string | boolean) => item == '')
        const step2Empty = Object.values(step2).some((item: string | string[]) => item == '')
        const step4Empty = Object.keys(step4.imzalama).length == 0
        if (!step1Empty && !step2Empty && !step4Empty) {
            api.open({
                message: `237191873419827391823 sənədi qeydiyyata alınıb."Əmr/Sərəncam/Qərar hazırlanması" tapşırığı yaradılıb`,
                duration: 0,
                icon: <MdOutlineDownloadDone />,
                className: 'black',
                btn: <Link to='/mainInfo' ><button className='sablon'>Tapşırığı aç</button></Link>
            });
        } else { setError(true) }
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
