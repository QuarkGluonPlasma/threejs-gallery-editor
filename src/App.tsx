import { Layout } from 'antd'
import './App.scss'
import AppHeader from './components/Header'
import AppSider from './components/Menu'
import Main from './components/Main'

const { Header, Sider, Content } = Layout

function App() {
  return (
    <Layout className="gallery-editor-layout">
      <Header className="app-header">
        <AppHeader />
      </Header>
      <Layout>
        <Sider width={200} className="app-sider">
          <AppSider />
        </Sider>
        <Content className="app-content">
          <Main />
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
