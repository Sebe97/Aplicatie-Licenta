import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';

export default class ImagineDescriere extends Component {
    render() {
        const {
           pathImagine,
           nume,
           descriere
       } = this.props.ramura
   
        
        return (
            <div>
                <Image src={pathImagine} circle className="rounded-circle" />
                <h3><a href={nume.replace(/\s/g, '')}>{nume}</a></h3>
                <p> {descriere}</p>
            </div>
        )
    }
}