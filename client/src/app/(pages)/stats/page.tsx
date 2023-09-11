'use client';

import React from 'react';
import ComponentChart from '@/components/chart';
import { ECElementEvent } from 'echarts/core';
import dataHistory from '@/data/history.json';

export default async function Page() {
  const optionData: any = [];
  const monthPerYear = 12;
  dataHistory.map((history, index) => {
    let totalMonth = history.endYear - history.beginYear > 0 ? (history.endYear - history.beginYear) * monthPerYear : 0;
    totalMonth += (history.endMonth - history.beginMonth >= 0) ? history.endMonth - history.beginMonth : -(history.beginMonth - history.endMonth);
    optionData.push(
      {
        value: totalMonth,
        name: history.companyName,
        period: `${history.beginYear}-${history.beginMonth} ~ ${history.endYear}-${history.endMonth}`
      },
    )
  });
  optionData.sort((a: any,b: any) => b.value - a.value);

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: (params: any) => {
        return `${params.data.period}<br/> ${params.name}: ${params.data.value} months (${params.percent}%)<br/>`;
      }
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        // name: 'Period',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 25,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: optionData
      }
    ]
  };

  const onEvents = {
    'click': (params: ECElementEvent) => {
    },
    'legendselectchanged': () => {
    }
  }
  
  return (
    <>
      <ComponentChart option={option} events={onEvents} />
    </>
  );
}