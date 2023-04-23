import * as React from 'react';
import { ICellRendererParams } from 'ag-grid-community';
import { IOlympicData } from './interfaces';
export default (props: ICellRendererParams<IOlympicData, number>) => (
  <span>{new Array(props.value).fill('#').join('')}</span>
);
