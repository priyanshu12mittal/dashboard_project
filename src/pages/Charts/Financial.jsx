import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,HiloSeries, Tooltip, DateTime, Zoom, Logarithmic, Crosshair } from '@syncfusion/ej2-react-charts';
import { financialChartData,FinancialPrimaryXAxis,FinancialPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

const date1 = new Date('2017, 1, 1');
function filterValue(value) {
  if (value.x >= date1) {
    return value.x, value.high, value.low;
  }
}
const returnValue = financialChartData.filter(filterValue);

const Financial  = () => {
  const {currentMode} = useStateContext();
  return (
    <div className=' m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Financial" title="AAPLE Historical" />
      <ChartComponent id='charts' height="420px" primaryXAxis={FinancialPrimaryXAxis} primaryYAxis={FinancialPrimaryYAxis} chartArea={{border:{width:0}}} tooltip={{enable:true,shared:true}} background={currentMode === 'Dark'?'#33373e':'#fff'} legendSettings={{ background: 'white' }}>
      <Inject services={[HiloSeries, Tooltip, DateTime, Logarithmic, Crosshair, Zoom]}></Inject>
      <SeriesCollectionDirective>
        <SeriesDirective
          dataSource={returnValue}
          xName='x'
          yName='low'
          name='Apple Inc'
          type='Hilo'
          low='low'
          high='high'
        >

        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>
  )
}

export default Financial
