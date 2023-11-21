import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import './MyAntAccordion.css';



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
        children: <p></p>,
    },
    {
        key: '3',
        label: 'Tapşırıq',
        children: <p>{}</p>,
    },
    {
        key: '4',
        label: 'Əsas',
        children: <p>{}</p>,
    }
];

function MyAntAccordion() {
    const onChange = (key: string | string[]) => {
        console.log(key);
    };

    return (
        <Collapse  items={items} onChange={onChange} />
    )
}

export default MyAntAccordion



