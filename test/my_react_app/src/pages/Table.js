// import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }


// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//     createData('test', 356, 17.0, 40, 3.9),
//     createData('test2', 350, 19.0, 47, 3.7),
// ];

// export default function CusTable() {
//     let test =  localStorage.getItem('data'); 
//     test = JSON.parse(test);
//     console.log(test);
//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                 <TableHead>
//                     <TableRow>
//                         {/* {
//                             Object.keys(test).map((item, index) => {
//                                 <TableCell align="right" key={index}>{item[index]}</TableCell>
//                             })
//                         } */}
//                         <TableCell>Dessert (100g serving)</TableCell>
//                         <TableCell align="right">Calories</TableCell>
//                         <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                         <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                         <TableCell align="right">Protein&nbsp;(g)</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {rows.map((row) => (
//                         <TableRow
//                             key={row.name}
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             <TableCell component="th" scope="row">
//                                 {row.name}
//                             </TableCell>
//                             <TableCell align="right">{row.calories}</TableCell>
//                             <TableCell align="right">{row.fat}</TableCell>
//                             <TableCell align="right">{row.carbs}</TableCell>
//                             <TableCell align="right">{row.protein}</TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }

import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

function createData(eeiNum, eeiName, consumer, landmark, photoType, lens, iType, helperNum, r, p) {
  return { eeiNum, eeiName, consumer, landmark, photoType, lens, iType, helperNum, r, p };
}

const rows = [
  createData(1, 'קים','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 5, '4-9', 3),
  createData(2, 'יהב','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 5, '4-9', 4),
  createData(3, 'מירון','גבעתי', '3265564.2956329','ריצוף',2, 'אלכסוני', 6, '12-30', 4),
  createData(4, 'ריקי','גולני', '3265564.2956329','ממוקד',2, 'אלכסוני', 7, '4-9', 1),
  createData(5, 'לי','מטכל', '3265564.2956329','ריצוף',2, 'אלכסוני', 7, '6-9', 3),
  createData(6, 'זהבי','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 8, '4-9', 2),
  createData(1, 'קים','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 5, '4-9', 1),
  createData(2, 'יהב','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 5, '4-9', 4),
  createData(3, 'מירון','גבעתי', '3265564.2956329','ריצוף',2, 'אלכסוני', 6, '12-30', 5),
  createData(4, 'ריקי','גולני', '3265564.2956329','ממוקד',2, 'אלכסוני', 7, '4-9', 1),
  createData(5, 'לי','מטכל', '3265564.2956329','ריצוף',2, 'אלכסוני', 7, '6-9', 3),
  createData(6, 'זהבי','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 8, '4-9', 5),
  createData(1, 'קים','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 5, '4-9', 2),
  createData(2, 'יהב','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 5, '4-9', 3),
  createData(3, 'מירון','גבעתי', '3265564.2956329','ריצוף',2, 'אלכסוני', 6, '12-30', 4),
  createData(4, 'ריקי','גולני', '3265564.2956329','ממוקד',2, 'אלכסוני', 7, '4-9', 1),
  createData(5, 'לי','מטכל', '3265564.2956329','ריצוף',2, 'אלכסוני', 7, '6-9', 3),
  createData(6, 'זהבי','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 8, '4-9', 2),
  createData(1, 'קים','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 5, '4-9', 2),
  createData(2, 'יהב','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 5, '4-9', 4),
  createData(3, 'מירון','גבעתי', '3265564.2956329','ריצוף',2, 'אלכסוני', 6, '12-30', 5),
  createData(4, 'ריקי','גולני', '3265564.2956329','ממוקד',2, 'אלכסוני', 7, '4-9', 1),
  createData(5, 'לי','מטכל', '3265564.2956329','ריצוף',2, 'אלכסוני', 7, '6-9', 2),
  createData(6, 'זהבי','גולני', '3265564.2956329','ריצוף',2, 'אלכסוני', 8, '4-9', 1),
];

const colors = ["#FFFF00", "#4d7f17", "#6bb120", "#9afe2e", "#aefe57"]

export default function BasicTable() {
  const [corrnetNum, setCorrnetNum] = useState(0);

  localStorage.setItem('currentImage', 0);

  let test =  localStorage.getItem('data'); 
    test = JSON.parse(test);

  return (
    <TableContainer component={Paper} style={{  marginTop: "50px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">מספר ציח</TableCell>
            <TableCell align="right">שם ציח</TableCell>
            <TableCell align="right">צרכן</TableCell>
            <TableCell align="right">WGS84 נ.צ</TableCell>
            <TableCell align="right">טווח תמונות</TableCell>
            <TableCell align="right">סוג צילום</TableCell>
            {/* <TableCell align="right">עדשה</TableCell> */}
            <TableCell align="right">סוג יעף</TableCell>
            <TableCell align="right">מספר עזר</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              // key={row.landmark}
              //1, borderColor: "#000000" 
              sx={{ '&:last-child td, &:last-child th': { border: 0}, border: 1, borderColor: "#000000", backgroundColor: colors[row.p - 1]}}
            >
              {/* <TableCell component="th" scope="row"></TableCell> */}
              <TableCell align="right">{row.eeiNum}</TableCell>
              <TableCell align="right">{row.eeiName}</TableCell>
              <TableCell align="right">{row.consumer}</TableCell>
              <TableCell align="right">{row.landmark}</TableCell>
              <input type='text' min={0} onWheel={() => console.log('fff')} value={row.r} />
              {/* <TableCell align="right">{row.r}</TableCell> */}
              <TableCell align="right">{row.photoType}</TableCell>

              <TableCell align="right">{row.iType}</TableCell>
              {/* <TableCell align="right">{row.lens}</TableCell> */}
              {/* <AllRanges imageNum={corrnetNum}/> */}
              {/* <ImagesRange landmark={row.landmark}/> */}
              {/* <input type="number">3-6</input> */}
              <TableCell align="right">{row.helperNum}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}