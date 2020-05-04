import React from 'react';
import AppMinMax from './inputs/minmax/minmax';
import AppInputLazy from './inputs/lazy/lazy';

export default class extends React.Component {

    state = {
        inp1: 'start',
        inp2: 'start other'
    }
 
    render(){
         return(
             <div>
                 <h2>Lazy input</h2>
                <p>{this.state.inp1}</p>
               <AppInputLazy netiveProps={{type: 'text', className: 'lol' }}
                            value={this.state.inp1}
                            onChange={(e) => this.setState({inp1: e.target.value})} />

                <h2>Lazy input not lazy</h2>
                <p>{this.state.inp2}</p>
               <AppInputLazy netiveProps={{ 
                                type: 'text', 
                                className: 'lol', 
                                onChange: (e) => this.setState({inp2: e.target.value})
                            }}
                            value={this.state.inp2}
                    />
                <hr/>
                <button onClick={(e) => this.setState({inp1: 'test'})} >
                    Unreal change
                </button>
             </div>
         )
     }
};
