import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import GridExample from './packageGrid';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <GridExample></GridExample>
  </StrictMode>
);

// import * as React from 'react';
// import { useCallback, useMemo, useRef, useState } from 'react';
// import { createRoot } from 'react-dom/client';
// import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';
// import {
//   ColDef,
//   ColGroupDef,
//   Grid,
//   GridOptions,
//   GridReadyEvent,
// } from 'ag-grid-community';
// import MedalCellRenderer from './medalCellRenderer';
// import TotalValueRenderer from './totalValueRenderer';
// import { IOlympicData } from './interfaces';

// const GridExample = () => {
//   const containerStyle = useMemo(() => ({ width: '100%', height: '100%' }), []);
//   const gridStyle = useMemo(() => ({ height: '100%', width: '100%' }), []);
//   const [rowData, setRowData] = useState<IOlympicData[]>();
//   const [columnDefs, setColumnDefs] = useState<ColDef[]>([
//     { field: 'athlete' },
//     { field: 'year' },
//     { field: 'gold', cellRenderer: MedalCellRenderer },
//     { field: 'silver', cellRenderer: MedalCellRenderer },
//     { field: 'bronze', cellRenderer: MedalCellRenderer },
//     { field: 'total', minWidth: 175, cellRenderer: TotalValueRenderer },
//   ]);
//   const defaultColDef = useMemo<ColDef>(() => {
//     return {
//       editable: true,
//       sortable: true,
//       flex: 1,
//       minWidth: 100,
//       filter: true,
//       resizable: true,
//     };
//   }, []);

//   const onGridReady = useCallback((params: GridReadyEvent) => {
//     fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
//       .then((resp) => resp.json())
//       .then((data: IOlympicData[]) => {
//         setRowData(data);
//       });
//   }, []);

//   return (
//     <div style={containerStyle}>
//       <div style={gridStyle} className="ag-theme-alpine">
//         <AgGridReact<IOlympicData>
//           rowData={rowData}
//           columnDefs={columnDefs}
//           defaultColDef={defaultColDef}
//           onGridReady={onGridReady}
//         ></AgGridReact>
//       </div>
//     </div>
//   );
// };

// const root = createRoot(document.getElementById('root')!);
// root.render(<GridExample />);
