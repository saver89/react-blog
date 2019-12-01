import React from 'react';

interface person {
    title: string,
    id: number
}

export default function Person(props: person) {
    return <div>{props.title}</div>;
}