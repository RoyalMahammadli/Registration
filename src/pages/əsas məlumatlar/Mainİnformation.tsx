import { nanoid } from "@reduxjs/toolkit";
import { Empty } from 'antd';
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import './Mainİnformation.css';


function Mainİnformation() {
  const { step1 } = useSelector((store: RootState) => store.mainInfo)
  type mainInfoType = {
    header: string,
    name: string | boolean
  }
  const mainİnfo: mainInfoType[] = [
    {
      header: 'Sənədin tipi',
      name: 'Əmr',

    },
    {
      header: 'Sənədin növü',
      name: `Əsas fəaliyyət üzrə (${step1.tesnifat})`,

    },
    {
      header: 'Təsnifat',
      name: step1.tesnifat,

    },
    {
      header: 'Təyinat',
      name: step1.teyinat,

    },
    {
      header: 'Konfidensial',
      name: step1.konfidensial === false ? 'Xeyr' : "Bəli",

    },
    {
      header: 'Nomenklatur',
      name: step1.nomenklatur,

    },
    {
      header: 'Normativ Sənəd',
      name: 'Xeyr',

    },
  ]

  return (
    <section className="mainİnfo">
      <h3>Əsas məlumatlar</h3>
      <div className="mİnfo-1">
        {mainİnfo.map((item: any) => {
          return (
            <div key={nanoid()}>
              <h4>{item.header}</h4>
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
      <div className="mezmun-div">
        <h4>Məzmun</h4>
        <p>{step1.mezmun}</p>
      </div>
      <h3>Cavablandırılan sənəd</h3>
      <p>siyahı boşdur</p>
      <div className="sened-box">
        <div className="sened-div">
          <h5>Qeydiyyat nömrəsi</h5>
          <h5>Qeydiyyat tarixi</h5>
          <h5>Məzmun</h5>
          <h5>Tip</h5>
          <h5>Növ</h5>
          <h5>Əlaqə növü</h5>
          <h5>Status</h5>
        </div>
        <Empty className="empty" />
      </div>

    </section>
  )
}

export default Mainİnformation