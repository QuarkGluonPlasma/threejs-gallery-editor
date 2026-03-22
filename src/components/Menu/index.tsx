import { Menu } from 'antd'

const menuItems = [
  { key: 'gallery', label: '画廊编辑' },
  { key: 'character', label: '人物编辑' },
]

function AppSider() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['gallery']}
      items={menuItems}
      style={{ height: '100%', borderRight: 0 }}
    />
  )
}

export default AppSider
