import React from 'react';

interface post {
    title: string,
    id: number
    click: any
}

export default function Post(props: post) {
    return <div onClick={() => {props.click()}}>{props.title}</div>;
}