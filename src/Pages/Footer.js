import React,{Component} from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import AppBar from '@material-ui/core/AppBar'
import styled from 'styled-components'

const FooterComponent = styled.div`
  display: flex;min-height: 100vh;flex-direction: column;
`;

class Footer extends Component {
  render () {
    return (
      <FooterComponent>
        this is footer
      </FooterComponent>
      )
  }
}
export default Footer;