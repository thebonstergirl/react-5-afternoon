import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateCredit} from '../../ducks/reducer';

class WizardSeven extends Component {

    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={(e)=>this.props.updateCredit(e.target.value)} value="Excellent">Excellent</button></Link>
                        <Link to="/wEight"><button onClick={(e)=>this.props.updateCredit(e.target.value)}value="Good">Good</button></Link>
                        <Link to="/wEight"><button onClick={(e)=>this.props.updateCredit(e.target.value)}value="Fair">Fair</button></Link>
                        <Link to="/wEight"><button onClick={(e)=>this.props.updateCredit(e.target.value)}value="Poor">Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

var mapStateToProps = (state) =>{
    var {credit} = state;
    return{
        credit,
    }
}

export default connect(mapStateToProps, {updateCredit})(WizardSeven);