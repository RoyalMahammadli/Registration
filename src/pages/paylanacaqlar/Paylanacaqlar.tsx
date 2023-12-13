import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import './Paylanacaqlar.css'

function Paylanacaqlar() {
    const { imzalama } = useSelector((state: RootState) => state.mainInfo.step4)
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SAA</th>
                        <th>Vəzifə</th>
                        <th>Vəzifə orqanı</th>
                        <th>Qeyd</th>
                        <th>Status</th>
                        <th>Tarix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{imzalama.name}</td>
                        <td>{imzalama.vezife}</td>
                        <td>{imzalama.vergiOrqan}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Paylanacaqlar