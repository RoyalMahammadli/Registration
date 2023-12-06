import { NavLink } from "react-router-dom"
import './Dashboard.css'
import Sidebar from "../../components/layout/sidebar/Sidebar"
import Routing from "../../routes/Routing"

function Dashboard() {
  return (
    <section>
      <div className='dashboard'>
        <header>
          <h4>Əmr/Sərəncam/Qərar hazırlanması</h4>
          <div className="head-buttons">
            <button>Vizaya göndər</button>
            <button>Digər strukturlarla razılaşdırma</button>
            <button>Sil</button>
          </div>
        </header>
        <aside>
          <NavLink to='/'><button> &#8592; Geri</button></NavLink>
          <Sidebar />
        </aside>
        <main>
          <Routing />
        </main>
      </div>
    </section>
  )
}

export default Dashboard