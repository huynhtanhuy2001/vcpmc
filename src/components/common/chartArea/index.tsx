import React from 'react'
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Area } from '@ant-design/plots';
import { useParams } from 'react-router-dom';
import { IParams, ItemCharts } from '../../../types';
import './styles.scss'




const ChartArea: React.FC<ItemCharts> = (props) => {

    const data = props.data
    const {control} : IParams = useParams()
    
    const config = {
        data,
        width: 754,
        height: 373,
        xField: 'x',
        yField: 'y',
        xAxis: {
            range: [0, 1],
            // tickCount: 4,
            // max: maxAxisX
        },
        yAxis: {
            max: 9000,
            tickCount: 9
        },
        smooth: true,


    };


    return (
        <div className="Chartarea" >
        <Area  {...config} />
        </div>
    )
}

export default ChartArea