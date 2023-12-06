import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import { useSelector } from "react-redux"
import { RootState } from "../../store"


function MyAntTab() {
    const { step2 } = useSelector((store: RootState) => store.mainInfo)
    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Tab 1',
            children: <div>
                {step2.emrinMezmunu}
            </div>,
        },
        {
            key: '2',
            label: 'Tab 2',
            children: 'Content of Tab Pane 2',
        },
        {
            key: '3',
            label: 'Tab 3',
            children: 'Content of Tab Pane 3',
        },
        {
            key: '4',
            label: 'Tab 4',
            children: 'Content of Tab Pane 4',
        },
    ];
    return (
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    )
}


export default MyAntTab;