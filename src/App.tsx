import { Route, Routes } from 'react-router-dom'

import { Layout } from 'components'
import { MainPage, NotFoundPage } from 'pages'

const routes = [
  { path: '*', component: <NotFoundPage /> },
  { path: '/', component: <MainPage /> },
]

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  )
}

export default App
