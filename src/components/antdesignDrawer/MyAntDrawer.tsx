import { Button, Drawer, Space } from 'antd';
import { useState } from 'react';
import MyAntStep from '../antdesignStep/MyAntStep';
import './MyAntDrawer.css';

function MyAntDrawer() {
    const [open, setOpen] = useState(false);

    const showLargeDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div >
            <Space>
                <Button type="primary" onClick={showLargeDrawer}>
                    Task
                </Button>
            </Space>
            <Drawer
                className='antDrawer'
                title={` Drawer`}
                placement="right"
                onClose={onClose}
                open={open}
                width='70rem'

            >
                <MyAntStep />
            </Drawer>
        </div>
    )
}

export default MyAntDrawer


