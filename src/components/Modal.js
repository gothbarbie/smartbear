// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { closeModal, openModal, save } from '../actions'

import Button from './Button'

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
`

const Box = styled.div`
  background: #f2f2f2;
  border: 1px solid #bdbdbd;
  min-width: 320px;
`

const Header = styled.header`
  background: #e0e0e0;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
`

const Main = styled.main`
  display: block;
  padding: 1rem 2rem;
`

const InputField = styled.div`
  margin: 1.25rem 0;
  width: ${({ width }) => (width ? width + '%' : '100%')};

  & label {
    color: #4f4f4f;
    display: block;
    font-size: 14px;
    line-height: 1.5rem;
  }

  & > input {
    background: #fff;
    border: 1px solid #e0e0e0;
    font-size: 16px;
    padding: 0.5rem;
    width: 100%;
    box-sizing: border-box;
  }
`

const RadioLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;

  & input {
    margin-right: 0.5rem;
  }
`

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 2rem;
`

type State = {
  name: string,
  port: number,
  protocol: string,
}

type Props = {
  closeModal: Function,
  data: Object,
  modal: { id: ?number },
  save: Function,
}

export class Modal extends Component<Props, State> {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      port: '',
      protocol: '',
    }
    this.fetchData(props)
  }

  fetchData (props: Props) {
    const data = props.data.find(
      item =>
        item.virtualizationID === props.modal.id
    )

    if (data) {
      this.setState({
        name: data.name,
        port: data.port,
        protocol: data.protocol,
      })
    }
  }

  componentWillReceiveProps (nextProps: Props) {
    this.fetchData(nextProps)
  }

  onChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = () => {
    const {
      closeModal,
      modal: { id },
      save,
    } = this.props

    save({ id, ...this.state })

    closeModal()
  }

  render () {
    const { closeModal, modal } = this.props
    const { name, port, protocol } = this.state

    if (!modal.id) return null

    return (
      <Wrapper
        onClick={() => {
          closeModal()
        }}
      >
        <Box onClick={e => e.stopPropagation()}>
          <Header>Edit</Header>
          <Main>
            <InputField>
              <label htmlFor="name">Name</label>
              <input
                name="name"
                onChange={this.onChange}
                type="text"
                value={name}
              />
            </InputField>

            <InputField width="30">
              <label htmlFor="port">Port</label>
              <input
                name="port"
                onChange={this.onChange}
                type="number"
                value={port}
              />
            </InputField>

            <InputField>
              <label htmlFor="protocol">Protocol</label>
              <RadioLabel>
                <input
                  checked={protocol === 'HTTP'}
                  name="protocol"
                  onChange={this.onChange}
                  type="radio"
                  value="HTTP"
                />
                HTTP
              </RadioLabel>
              <RadioLabel>
                <input
                  checked={protocol === 'HTTPS'}
                  name="protocol"
                  onChange={this.onChange}
                  type="radio"
                  value="HTTPS"
                />
                HTTPS
              </RadioLabel>
            </InputField>
          </Main>
          <Footer>
            <Button onClick={this.handleSubmit} primary>
              Save
            </Button>
            <Button onClick={() => closeModal()}>Cancel</Button>
          </Footer>
        </Box>
      </Wrapper>
    )
  }
}

const mapStateToProps = ({ data, modal }) => {
  return {
    data,
    modal,
  }
}

const mapDispatchToProps = {
  openModal,
  closeModal,
  save,
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
