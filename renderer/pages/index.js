/* import 'antd/dist/antd.css';
import '../styles/global.css'
import '../styles/login.css' */
import { Layout, Menu, Breadcrumb, Row, Col ,Image, Space,Typography} from 'antd';
import React, { useState ,useEffect} from 'react';
import Login from '../components/login';
const { Title } = Typography;

const Home = () => {
  const [input, setInput] = useState('')
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const handleMessage = (event, message) => setMessage(message)
    window.electron.message.on(handleMessage)

    return () => {
      window.electron.message.off(handleMessage)
    }
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    window.electron.message.send(input)
    setMessage(null)
  }

  return (


    <Layout style={{ minHeight: '100vh' }}>
        <Row  style={{ marginTop: '200px' }} justify='center'  >
          <Col span={12} offset={9}>         
              <Space align="center" direction="vertical">
                <Image alt="" src="https://cdn.booklick.net/public/favicon-96x96.png"/>
                <Title>Administrador</Title>          
              </Space>                     
            <Login/>
          </Col>
        </Row>       
     </Layout>
   /*  <div>
      <h1>Hello Electron!</h1>

      {message && <p>{message}</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </form>

      <style jsx>{`
        h1 {
          color: red;
          font-size: 50px;
        }
      `}</style>
    </div> */
  )
}

export default Home
