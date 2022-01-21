import { App } from 'vue'
import { Button, Card, Col, Row, Input, Divider } from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const setup = (app: App) => {
  app.use(Button).use(Card).use(Col).use(Row).use(Input).use(Divider)
}

export default setup
