import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getData, openModal } from './actions'

import styled from 'styled-components'

import './App.css'

import Modal from './components/Modal'
import Instance from './components/Instance'

const Wrapper = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const HeaderElement = styled.header`
  display: flex;
  width: 100%;
`

const H1 = styled.h1`
  color: #4f4f4f;
  font-weight: 300;
  font-size: 1.5rem;
  align-self: flex-start;
  margin-left: 3rem;
`

const Section = styled.section`
  background: #efefef;
  border: 1px solid #bdbdbd;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 3rem;
  grid-template-rows: 1fr;
  margin-top: 5%;
  padding: 3rem 2.5rem;
`

class App extends Component {
  componentWillMount() {
    this.props.getData()
  }

  openModal = id => {
    this.props.openModal(id)
  }

  render() {
    const { data, modal } = this.props
    return (
      <div>
        <Wrapper>
          <HeaderElement>
            <H1>VirtualiZer</H1>
          </HeaderElement>
          <Section>
            {data.map(item => {
              return (
                <Instance
                  {...item}
                  key={item.virtualizationID}
                  openModal={this.openModal}
                />
              )
            })}
          </Section>
        </Wrapper>
        <Modal />
      </div>
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
  getData,
  openModal,
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
