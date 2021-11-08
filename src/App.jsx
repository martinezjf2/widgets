
import React from 'react';
import Search from './Search'
// import Accordion from './Accordion'

// eslint-disable-next-line
const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript framework'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS Library among engineers'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
];


export default function App() {
    return <div><Search /></div>
    // <div><Accordion items={items}/></div>
}