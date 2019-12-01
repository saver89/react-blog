import React from 'react';

interface person {
    title: string,
    id: number
    click: any
}

export default function Person(props: person) {
    return <div onClick={() => {props.click()}}>{props.title}</div>;
}