import React from 'react'
import Matter from 'matter-js'
import { View, Image } from 'react-native'

const Squirrel = (props : any) => {
    const widthBody : number = props.body.bounds.max.x - props.body.bounds.min.x
    const heightBody : number = props.body.bounds.max.y - props.body.bounds.min.y

    const xBody = props.body.position.x - widthBody/2;
    const yBody = props.body.position.y - heightBody/2;

    const color = props.color

    return (
        <View style = {{
            borderWidth:1,
            borderColor:color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody
        }}/>
    )
}

export default (world: any, color: string, pos: any, size: any): any => {
  
    const initialSquirrel: any = Matter.Bodies.rectangle(
        pos.x,
        pos.y,
        size.width,
        size.height,
        {
            label: 'Squirrel',
            isSensor: false,
            isStatic: true,
            // restitution: 0.5
        }
    )
    Matter.World.add(world, initialSquirrel)

    return {
        body : initialSquirrel,
        color,
        pos,
        renderer: <Squirrel/>
    }
}
