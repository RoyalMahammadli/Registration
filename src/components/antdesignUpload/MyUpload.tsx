import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, message, Upload } from 'antd';

const props: UploadProps = {
    name: 'file',
    // action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    action: 'https://localhost:5173',
    headers: {
        authorization: 'authorization-text',
    },
    multiple: true,
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

function MyUpload() {
    return (
        <Upload
            {...props} >

            <Button className='sablon' icon={<UploadOutlined />}>Fayl seç</Button>
        </Upload>
    )
}

export default MyUpload
