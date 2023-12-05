import { useSelector } from "react-redux"
import { RootState, store } from "../../store"

function Mainİnformation() {
  const { step1 } = useSelector((store:RootState)=>store.mainInfo)

  const mainİnfo = [
    {
      header: 'Sənədin tiipi',
      name: 'Əmr',

    },
    {
      header: 'Sənədin tiipi',
      name: `Əsas fəaliyyət üzrə (${step1.tesnifat})`,

    },
    {
      header: 'Sənədin tiipi',
      name: 'Əmr',

    },
    {
      header: 'Sənədin tiipi',
      name: 'Əmr',

    },
    {
      header: 'Sənədin tiipi',
      name: 'Əmr',

    },
    {
      header: 'Sənədin tiipi',
      name: 'Əmr',

    },
    {
      header: 'Sənədin tiipi',
      name: 'Əmr',

    },
  ]
  return (
    <section className="mainİnfo">
      <h3>Əsas məlumatlar</h3>
      <div className="mİnfo-1">
        <h5>Sənədin tiipi</h5>
        <h5>Sənədin tiipi</h5>
        <h5>Sənədin tiipi</h5>
        <h5>Sənədin tiipi</h5>
        <h5>Sənədin tiipi</h5>
        <h5>Sənədin tiipi</h5>
        <h5>Sənədin tiipi</h5>
      </div>

    </section>
  )
}

export default Mainİnformation