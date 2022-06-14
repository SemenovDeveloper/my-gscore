import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'
import Button from '../src/ui/button/button'

const Home: NextPage = () => {
  return (
    <>
    <h1>Hello</h1>
    <Button fluid accent>Button</Button>
    </>
  )
}

export default Home

