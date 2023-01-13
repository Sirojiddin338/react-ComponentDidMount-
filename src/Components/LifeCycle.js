import React from 'react';

class LifeCycle extends React.Component {

   constructor() {
      super();
      console.log("Constructor is Working...");
   }

   componentDidMount() {
      console.log("ComponentDidMount is Working...");
   }

   componentWillMount () {
      console.log("componentWillMount is Working...");
   }

    render () {
        console.log("render is working ... ");
        return (
            <div>
                 <h1> Components is DidMount and WillMount </h1>
            </div>
        )
    }
}

export default LifeCycle;