import { useState } from 'react';
import './Sidebar.css'
import {
    FileOutlined,
    ProfileOutlined,
    DatabaseOutlined,
    FieldTimeOutlined,
    DingdingOutlined
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';


const { Sider } = Layout;



function Sidebar() {
    const [collapsed, setCollapsed] = useState<boolean>(false);
    const {
        token: { colorBgContainer },
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
                        icon: <ProfileOutlined style={{color:'white'}} />,
                        label: 'Əsas məlumatlar',
                    },
                    {
                        key: '/orderInfo',
                        icon: <FileOutlined style={{color:'white'}}  />,
                        label: 'Əmr məlumatları',
                    },
                    {
                        key: '/form',
                        icon: <DatabaseOutlined style={{color:'white'}}/>,
                        label: 'Elektron forma',

                    },
                    {
                        key: '/list',
                        icon: <DingdingOutlined style={{color:'white'}}/>,
                        label: 'Paylanacaqlar siyahısı',

                    },
                    {
                        key: '/history',
                        icon: <FieldTimeOutlined style={{color:'white'}}/>,
                        label: 'Əməliyyatlar tarixçəsi',

                    }
                ]}
            />

        </Sider>

    );


}

export default Sidebar



