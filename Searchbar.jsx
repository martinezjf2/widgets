


import React from 'react';

export default class Greeting extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "John Smith",
            message: "Welcome to React State!"
        }
    }
}



import React from 'react';

export default class Greeting extends React.Component {
    
    state = {
        name: "John Smith",
        message: "Welcome to React State!"
    }   
}



