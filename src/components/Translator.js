import React from 'react';
import rot13 from 'rot-thirteen';

class Translator extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            text: this.props.initialText || "",
            translated: rot13(props.initialText) || ""
        };
    };
    
    reset = () => {
        this.setState({
            text: "",
            translated: ""
        })
    }

    updateText = (value) => {
        this.setState({
            text: value,
            translated: rot13(value)
        })
    }


    render() {
      return (
      <div>
            <h1>Translator</h1>
            <input 
            defaultValue={this.state.text} 
            onChange={(event) => {
                this.updateText(event.target.value)
            }}/>
            <button onClick={this.reset}>Clear</button>
            <p>{this.state.text}</p>
            <p>{this.state.translated}</p>
     
        </div>
        )
    }
}

export default Translator