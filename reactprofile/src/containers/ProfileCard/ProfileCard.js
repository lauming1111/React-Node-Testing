import React from 'react'
import './index.css'

import { Avatar } from '../../components/Avatar'
import { Button } from '../../components/Button'

export const ProfileCard = (props) => {
  const margin = props.layer * 300
  return (
    <div className="card" style={{ marginLeft: margin + 'px' }}>
      <div class="info">
        <Avatar size={64} src={props.data.picture} />
        <center className="user-name">{props.data.name.first + ' ' + props.data.name.last}</center>
        <center className="company-name">{props.data.company}</center>
        <center className="company-address">{props.data.address}</center>
        <center>
          <Button><i className="fas fa-phone" /></Button>
          <Button><i className="fas fa-envelope" /></Button>
        </center>
      </div>
      <div className="about">
        <span>About</span>
        <p>{props.data.about}</p>
        <span className="data-registered">{props.data.registered}</span>
      </div>
    </div>
  )
}
