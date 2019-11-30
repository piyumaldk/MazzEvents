import React, { Component } from 'react';
import '../App.css';

export default class RightCusSaved extends Component {
    render() {
        console.log(this.props.selectedFlowers)
        var SelectedList = this.props.selectedFlowers.map(title=>{
            return (
                <div class="rights">
                    
                        <a href="/" className="btn btn-xs btn-primary pull-right">Delete</a>
                        <strong>{title}</strong>
               
                </div>
            )
    
        })
        return(
            <ul>
                <h3>Selected Flowers</h3>
                {SelectedList}
            </ul>
        )
    }
}
