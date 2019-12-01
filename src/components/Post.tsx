import React from 'react';

interface post {
    title: string,
    id: number
    click: any,
    changed: any
}

export default function Post(props: post) {
    return <div>
        <input type="text" onChange={(event) => props.changed(event)} />
        <div onClick={() => { props.click() }}>{props.title}</div>
        </div>;
}