import type { TabsProps } from 'antd';
import { Empty, Tabs } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import './MyAntTab.css';


function MyAntTab() {
    const { step2 } = useSelector((store: RootState) => store.mainInfo)
    const onChange = (key: string) => {
        console.log(key);
    };
    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Başlıq və əsaslandırma',
            children:
                <section>
                    <h3>Başlıq və əsaslandırma</h3>
                    <div className='basliq'>
                        <h5>Əmrin məzmunu</h5>
                        <p>{step2.emrinMezmunu}</p>
                        <h5>Preambula</h5>
                        <p>{step2.preambula}</p>
                    </div>

                </section>
        },
        {
            key: '2',
            label: 'Əmr/Sərəncam/Qərar',
            children:
                <div>
                    {step2.bendler.map((item: any, index: number) => {
                        return (
                            <table>
                                <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Bənd</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td ><p >{item?.bend}</p></td>
                                    </tr>
                                </tbody>
                            </table>
                        )
                    })}
                </div>,
        },
        {
            key: '3',
            label: 'Tapşırıq',
            children: <Empty />,
        },
        {
            key: '4',
            label: 'Əsas',
            children:
                <div className='esas_metn'>
                    {step2.esas_metn}
                </div>,
        },
    ];
    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    )
}
export default MyAntTab;