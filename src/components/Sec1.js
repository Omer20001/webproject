import React, { Component } from 'react'

export default class sec1 extends Component {
    render() {
        return (
            <div>
            <a className="aaaaa" href="#">{this.props.name}</a>
        <p className="gray1">{this.props.ppp}</p>
        <div> <i class="fas fa-circle"></i>{this.props.pro}  <i class="far fa-star"></i><span>{this.props.say}</span></div> 
        
                
            </div>
        )
    }
}
 