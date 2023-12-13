import {
    DatabaseOutlined,
    DingdingOutlined,
    FieldTimeOutlined,
    FileOutlined,
    ProfileOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {
    } = theme.useToken();
    const navigate = useNavigate()

    return (
        <Sider className='side' trigger={null} collapsible collapsed={collapsed}>

            <Menu
                onClick={({ key }) => {
                    console.log(key);
                    navigate(key)
                }}
                theme="light"
                mode="inline"
                defaultSelectedKeys={['2']}
                items={[
                    {
                        key: '/mainInfo',
                        icon: <ProfileOutlined style={{ color: 'white' }} />,
                        label: 'Əsas məlumatlar',
                    },
                    {
                        key: '/orderInfo',
                        icon: <FileOutlined style={{ color: 'white' }} />,
                        label: 'Əmr məlumatları',
                    },
                    {
                        key: '/form',
                        icon: <DatabaseOutlined style={{ color: 'white' }} />,
                        label: 'Elektron forma',

                    },
                    {
                        key: '/list',
                        icon: <DingdingOutlined style={{ color: 'white' }} />,
                        label: 'Paylanacaqlar siyahısı',

                    },
                    {
                        key: '/history',
                        icon: <FieldTimeOutlined style={{ color: 'white' }} />,
                        label: 'Əməliyyatlar tarixçəsi',

                    }
                ]}
            />
        </Sider>
    );
}
export default Sidebar



