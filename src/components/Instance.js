// @flow

import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { openMenu, closeMenu } from '../actions'

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
  closeMenu: Function,
  menu: { id: number },
  name: string,
  openMenu: Function,
  openModal: Function,
  port: number,
  protocol: string,
  running: boolean,
  virtualizationID: number,
}

export class Instance extends Component<Props, State> {
  constructor (props) {
    super(props)
  }

  renderMenu () {
    const { 
      closeMenu,
      menu,
      openModal, 
      virtualizationID, 
    } = this.props

    return (
      menu.id === virtualizationID && (
        <Menu>
          <MenuItem onClick={(e) => {
            e.stopPropagation()
            closeMenu()
            openModal(virtualizationID)}
          }>Edit</MenuItem>
          <MenuItem onClick={() => console.log('redeploy')}>Redeploy</MenuItem>
        </Menu>
      )
    )
  }

  render () {
    const {
      apiType,
      closeMenu,
      name,
      openMenu,
      port,
      protocol,
      running,
      virtualizationID,
    } = this.props

    return (
      <Article
        onClick={() => {
          closeMenu()
          openMenu(virtualizationID)
        }}
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

export const mapStateToProps = ({ menu }) => {
  return {
    menu,
  }
}

export const mapDispatchToProps = {
  openMenu,
  closeMenu,
}

export default connect(mapStateToProps, mapDispatchToProps)(Instance)
