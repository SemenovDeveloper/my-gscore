import React from 'react'
import Icon from './logo.svg'

interface ILogo {
  width?: string
  height?: string
}
export const Logo: React.FC<ILogo> = ({width = '172px', height = '42px'}) => {
  return (
    <>
      <Icon width={width} height={height} stroke="var(--white)"/>
    </>
  )
}
