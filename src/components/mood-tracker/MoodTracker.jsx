import { Component } from 'react'
import MoodPoints from '../mood-points/MoodPoints'
import MoodNote from '../mood-note/MoodNote'

export default class MoodTracker extends Component {
    // Create state and set inital state
    // constructor(props) {
        // Invoke super first!
        // Get functionality from Component  
        // super(props)
        // this.state = {
        //     points: 11
        // }
    // }
    state = {
        points: 11
    }

    // Event Handler
    handleIncreaseMood = () => {
        this.setState((prevState) => {
            return {
                points: prevState.points + 1
            }
        })
    }

    handleDecreaseMood = () => {
        this.setState((prevState) => {
            return {
                points: prevState.points - 1
            }
        })
    }



    
    render() {
        return (
        <div>
           <MoodPoints points ={this.state.points}/>

           <button onClick={this.handleIncreaseMood}><b>+</b>🎸</button>
           <button onClick={this.handleDecreaseMood}><b>–</b>🎸</button>
        
        <h3>My Notes:</h3>
        
        <MoodNote 
            points={5}
            date={'date'}
            note={'test note'}
        />
        </div>
        )
    }
}