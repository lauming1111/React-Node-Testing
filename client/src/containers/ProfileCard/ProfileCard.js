import React from 'react'

import 'antd/dist/antd.css'
import './index.css'

import {Avatar} from '../../components/Avatar'
// import {Button} from '../../components/Button'
import {Popconfirm, Icon} from 'antd';

export const ProfileCard = (props) => {
    const margin = props.layer * 300;
    return (
        <div className="card" style={{marginLeft: margin + 'px'}}>
            <div class="info">
                {/*<p>{props.data}</p>*/}
                <Avatar size={64} src={props.data.picture}/>
                <center className="user-name">{props.data.name.first + ' ' + props.data.name.last}</center>
                <center className="company-name">{props.data.company}</center>
                <center className="company-address">{props.data.address}</center>
                <div>
                    <Popconfirm className="company-address1" title={props.data.phone} icon={<Icon type="phone"/>}>
                        <Icon type="phone"/>
                    </Popconfirm>

                    <Popconfirm title={<a href={"mailto:" + props.data.email}>{props.data.email}</a>}
                                icon={<Icon type="mail"/>} >
                        <Icon type="mail"/>
                    </Popconfirm>
                </div>
                <div className="about">
                    <span>About</span>
                    <p>{props.data.about}</p>
                    <span className="data-registered">{props.data.registered}</span>
                </div>
            </div>
        </div>
    )
};
