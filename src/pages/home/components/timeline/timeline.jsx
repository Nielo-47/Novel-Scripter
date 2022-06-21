import React from 'react'
import BlocoHistoria from '../bloco_historia/bloco_historia'
import "./timeline.css"

function Timeline() {
  return (
    <div className='timelineBorder'>
      <div className='anuncioHistoriaEmDestaque' style={{fontSize:"150%", color:'white', fontWeight:'bold'}}>Novas histórias</div>
      <div className='timeline'>
        <BlocoHistoria />
        <BlocoHistoria />
        <BlocoHistoria />
        <BlocoHistoria />
        <BlocoHistoria />
        <BlocoHistoria />
        <BlocoHistoria />
        <BlocoHistoria />
        <BlocoHistoria />
        <BlocoHistoria />
        <BlocoHistoria />
        <BlocoHistoria />
      </div>
    </div>
  )
}

export default Timeline