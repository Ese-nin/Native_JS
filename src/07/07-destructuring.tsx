import React, {useState} from "react";

type titleType = {
    title: string
}
type streetType = {
    street: titleType
}

export type manType = {
    name: string
    age: number
    lessons: Array<titleType>
    address: streetType
}

type PropsType = {
    title: string
    man: manType
}

export const ManComponent: React.FC<PropsType> = (props) => {

    const {title, man} = props;

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {man.name}
            </div>
        </div>
    )
}