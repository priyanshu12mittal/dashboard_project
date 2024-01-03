import React from 'react'
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';
import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';


const Pyramid  = () => {
  const {currentMode} = useStateContext();
  return (
    <div className=' m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <AccumulationChartComponent id='pyramid-chart' tooltip={{enable:true}} background={currentMode === 'Dark'?'#33373e':'#fff'} legendSettings={{ background: 'white' }}>
      <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]}></Inject>
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          dataSource={PyramidData}
          xName='x'
          yName='y'
          name='Food'
          type='Pyramid'
          width='45%'
          height='80%'
          neckWidth='15%'
          gapRatio={0.03}
          explode
          emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
          dataLabel={{
            visible: true,
            position: 'Inside',
            name: 'text',
          }}
        >
        </AccumulationSeriesDirective>
      </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
    </div>
  )
}

export default Pyramid
