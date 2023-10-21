import React, {useState, useEffect, useContext} from "react";

import classes from "./StudCertificateList.module.css";

import {mystudcertificates} from '../../../apis/index';
import { mymares, mystallions } from "../../../apis/member-apis";
import { useTable } from 'react-table'
import styled from 'styled-components';
import { GlobalContext } from '../../../context/store/index';


const StudCertificateList = () => {

  const {user}=useContext(GlobalContext);

  const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const[studs, setStuds] = useState();
const[mares, setMares] = useState();
const[stallions, setStallions] = useState();

const fetchList=async()=>{
  const response= await mystudcertificates(user?.friendly_url);
  response.json().then(data => ({
    data: data,
    status: response.status
  })
  ).then(res => {
    if(res.status == 200)
    {
      setStuds(res.data);

    }
  });
}

const fetchMares=async()=>{
  const response= await mymares(user?.friendly_url);
  response.json().then(data => ({
    data: data,
    status: response.status
  })
  ).then(res => {
    if(res.status == 200)
    {
      setStuds(res.data);

    }
  });
}

const fetchStallions=async()=>{
  const response= await mystallions(user?.friendly_url);
  response.json().then(data => ({
    data: data,
    status: response.status
  })
  ).then(res => {
    if(res.status == 200)
    {
      setStuds(res.data);

    }
  });
}

useEffect(()=>{

  fetchList();
  fetchMares();
  fetchStallions();

},[])

  const data = React.useMemo(
    () => [
      {
        col1: 'Brux von Team Panonainsee',
        col2: 'Rita vom Larechs',
        col3: 'October 30, 2017',
        col4: 'May 20, 2015 02:33:48 pm',
        col5: 'Usman Baloch',
        col6: 'Used',
        col7: 'Eye Icon'
      },
      {
        col1: 'Brux von Team Panonainsee',
        col2: 'Rita vom Larechs',
        col3: 'October 30, 2017',
        col4: 'May 20, 2015 02:33:48 pm',
        col5: 'Usman Baloch',
        col6: 'Used',
        col7: 'Eye Icon'
      },
      {
        col1: 'Brux von Team Panonainsee',
        col2: 'Rita vom Larechs',
        col3: 'October 30, 2017',
        col4: 'May 20, 2015 02:33:48 pm',
        col5: 'Usman Baloch',
        col6: 'Used',
        col7: 'Eye Icon'
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Sire',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Dam',
        accessor: 'col2',
      },
      {
        Header: 'Mating Date',
        accessor: 'col3',
      },
      {
        Header: 'Created Date',
        accessor: 'col4',
      },
      {
        Header: 'Created By',
        accessor: 'col5',
      },
      {
        Header: 'Status',
        accessor: 'col6',
      },
      {
        Header: 'Actions',
        accessor: 'col7',
      },
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
  })

  return <>
          {/* <div className={classes["v215_1255"]}> */}
        <div className={classes["v215_1256"]}>
          <div className={classes["v215_1257"]}>
            <span className={classes["v215_1260"]}>My Profile</span>
          </div>
          <div className={classes["v215_1257"]}>
            <span className={classes["v215_1260"]}>Stud Certificate</span>
          </div>
          <div className={classes["v215_1257"]}>
            <span className={classes["v215_1260"]}>Litter Inspection</span>
          </div>
          <div className={classes["v215_1257"]}>
            <span className={classes["v215_1260"]}>Litter Registeration</span>
          </div>
          <div className={classes["v215_1257"]}>
            <span className={classes["v215_1260"]}>Transfer/Lease</span>
          </div>
          <div className={classes["v215_1257"]}>
            <span className={classes["v215_1260"]}>Horses Entered</span>
          </div>
          <div className={classes["v215_1257"]}>
            <span className={classes["v215_1260"]}>Show Enteries/Surveys</span>
          </div>
          <div className={classes["v215_1257"]}>
            <span className={classes["v215_1260"]}>News & Updates</span>
          </div>
          <div className={classes["v215_1257"]}>
            <span className={classes["v215_1260"]}>Balance Statement</span>
          </div>
        
        </div>
         <div className={classes["v215_1249"]}>
         <span className={classes["v215_1299"]}>Stud Certificate List</span>
         <div className={classes["v215_1250"]}>
            <div className={classes["v215_1251"]}>
               <div className={classes["v215_1252"]}></div>
               <span className={classes["v215_1253"]}>Online</span>
            </div> 
         </div>
         </div>
         <div className={classes["v215_1249"]}>
         <table {...getTableProps()} style={{width:"100%"}}>
      <thead style={{backgroundColor:"#ffeb00"}}>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()} style={{textAlign:"center"}}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
    </div>
         </>
};

export default StudCertificateList;
