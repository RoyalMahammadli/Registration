import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '../src/assets/index.css'
import { Provider } from 'react-redux'
import { store } from './store/index.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>
)
