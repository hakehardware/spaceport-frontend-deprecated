import { Progress } from '@radix-ui/themes'
import React from 'react'

type ProgressColor = 'red' | 'tomato' | 'orange' | 'yellow' | 'green' | 'blue'

const PlotProgress = ({ plotProgress }: { plotProgress: number }) => {
    let color: ProgressColor = 'blue'

    if (plotProgress <= 20) color = 'red'
    if (plotProgress > 20 && plotProgress <= 40) color = 'tomato'
    if (plotProgress > 40 && plotProgress <= 60) color = 'orange'
    if (plotProgress > 60 && plotProgress <= 80) color = 'yellow'
    if (plotProgress > 80) color = 'green'

    return <Progress color={color} value={plotProgress} size="3"/>
}

export default PlotProgress
