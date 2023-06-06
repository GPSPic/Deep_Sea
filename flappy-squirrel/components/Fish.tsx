import React from 'react'
import Matter from 'matter-js'
import { View } from 'react-native'

const Fish = (props : any) => {
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
  
    const initialFish: any = Matter.Bodies.circle(
        pos.x,
        pos.y,
        size.width,
        {
            label: 'Fish',
            isStatic: true,
        },
    )
    Matter.World.add(world, initialFish)

    return {
        body : initialFish,
        color,
        pos,
        renderer: <Fish/>
    }
}
