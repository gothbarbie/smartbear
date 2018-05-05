// @flow

import React, { Component } from 'react'
import styled from 'styled-components'

const Article = styled.article`
  background: ${({ running }) => (running ? '#fff' : '##F2F2F2')};
  border: 1px solid #e0e0e0;
  border-radius: 3px;
  padding: 1rem;
  min-width: 250px;
  font-size: 0.8rem;
  cursor: pointer;
  position: relative;
`

const RunningStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
`

const PlayIcon = styled.i`
  color: rgb(111, 207, 151);
  font-size: 3rem;
`

const StopIcon = styled.i`
  color: rgb(235, 87, 87);
  font-size: 3rem;
`

const Menu = styled.ul`
  position: absolute;
  bottom: -2rem;
  right: -1rem;
  background: #f2f2f2;
  border: 1px solid BDBDBD;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  color: #333333;
  list-style: none;
`

const MenuItem = styled.li`
  margin: 0;
  line-height: 1.5rem;
`

type Props = {
  apiType: string, 
  name: string, 
  openModal: Function,
  port: number, 
  protocol: string,
  running: boolean, 
  virtualizationID: number,
}

type State = {
  menuOpen: boolean,
}


export class Instance extends Component<Props, State> {
  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false,
    }
  }

  renderMenu () {
    const { virtualizationID, openModal } = this.props
    
    return this.state.menuOpen && (
      <Menu>
        <MenuItem onClick={() => openModal(virtualizationID)}>
          Edit
        </MenuItem>
        <MenuItem onClick={() => console.log('redeploy')}>
          Redeploy
        </MenuItem>
      </Menu>
    )
  }

  openMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
    })
  }

  render () {
    const { running, name, apiType, port, protocol } = this.props
    
    return (
      <Article 
        onClick={this.openMenu}
        running={running} 
      >
        <header>{name}</header>
        <RunningStatus>
          {running ? (
            <PlayIcon className="fas fa-play" />
          ) : (
            <StopIcon className="fas fa-stop" />
          )}
        </RunningStatus>
        <div>{apiType}</div>
        <div>Port: {port}</div>
        <div>Protocol: {protocol}</div>
        {this.renderMenu()}
      </Article>
    )
  }
}

export default Instance
