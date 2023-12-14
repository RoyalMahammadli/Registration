import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';
import MyAntStep from '../antdesignStep/MyAntStep';
import './MyAntDrawer.css';

function MyAntDrawer() {
    const [open, setOpen] = useState<boolean>(false);
    const showLargeDrawer = () => { setOpen(true) };
    const onClose = () => { setOpen(false) };
    return (
        <div  className='app'>
            <Space>
                <Button type="default" onClick={showLargeDrawer}>
                Əməliyyatlar
                </Button>
            </Space>
            <Drawer
                className='antDrawer'
                title={` Əməliyyatlar`}
                placement="right"
                onClose={onClose}
                open={open}
                width='70rem'
            >
                <MyAntStep onClose={onClose} />
            </Drawer>
        </div>
    )
}

export default MyAntDrawer


