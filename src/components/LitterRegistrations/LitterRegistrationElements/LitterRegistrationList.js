import React, {useState, useEffect, useContext} from "react";

import classes from "./LitterRegistrationList.module.css";

import {mylitterregistrations} from '../../../apis/index';

import { useTable } from 'react-table'
import styled from 'styled-components';
import { GlobalContext } from '../../../context/store/index';


const LitterRegistrationList = () => {

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

const[inspection, setRegistrations] = useState();

const fetchData=async()=>{
  const response= await mylitterregistrations(user?.friendly_url);
  response.json().then(data => ({
    data: data,
    status: response.status
})
).then(res => {
  if(res.status == 200)
  {
    setRegistrations(res.data);

  }
});
}

useEffect(()=>{

  fetchData();

},[])

  const data = React.useMemo(
    () => [
      {
        col1: 'October 30, 2017',
        col2: 'Brux von Team Panonainsee',
        col3: 'Rita vom Larechs',
        col4: 'May 20, 2015 02:33:48 pm',
        col5: 'Approved',
        col6: 'Eye Icon'
      },
      {
        col1: 'October 30, 2017',
        col2: 'Brux von Team Panonainsee',
        col3: 'Rita vom Larechs',
        col4: 'May 20, 2015 02:33:48 pm',
        col5: 'Approved',
        col6: 'Eye Icon'
      },
      {
        col1: 'October 30, 2017',
        col2: 'Brux von Team Panonainsee',
        col3: 'Rita vom Larechs',
        col4: 'May 20, 2015 02:33:48 pm',
        col5: 'Approved',
        col6: 'Eye Icon'
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'DOB',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Sire',
        accessor: 'col2',
      },
      {
        Header: 'Dam',
        accessor: 'col3',
      },
      {
        Header: 'Created Date',
        accessor: 'col4',
      },
      {
        Header: 'Status',
        accessor: 'col5',
      },
      {
        Header: '',
        accessor: 'col6',
      }
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
         <span className={classes["v215_1299"]}>Litter Registration List</span>
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
          {/* <div className={classes["v215_1249"]}>
            <span className={classes["v215_1307"]}>Brux vom Team Panonainsee</span>
            <span className={classes["v220_1031"]}>Brux vom Team Panonainsee</span>
            <span className={classes["v220_1044"]}>Brux vom Team Panonainsee</span>
            <span className={classes["v220_1057"]}>Brux vom Team Panonainsee</span>
            <span className={classes["v220_1070"]}>Brux vom Team Panonainsee</span>
            <span className={classes["v220_1083"]}>Brux vom Team Panonainsee</span>
            <span className={classes["v220_1096"]}>Brux vom Team Panonainsee</span>
            <span className={classes["v220_1109"]}>Brux vom Team Panonainsee</span>
            <span className={classes["v220_1122"]}>Brux vom Team Panonainsee</span>
            <span className={classes["v220_1018"]}>Rita vom Larechs</span>
            <span className={classes["v220_1032"]}>Rita vom Larechs</span>
            <span className={classes["v220_1045"]}>Rita vom Larechs</span>
            <span className={classes["v220_1058"]}>Rita vom Larechs</span>
            <span className={classes["v220_1071"]}>Rita vom Larechs</span>
            <span className={classes["v220_1084"]}>Rita vom Larechs</span>
            <span className={classes["v220_1097"]}>Rita vom Larechs</span>
            <span className={classes["v220_1110"]}>Rita vom Larechs</span>
            <span className={classes["v220_1123"]}>Rita vom Larechs</span>
            <span className={classes["v220_1019"]}>October 30, 2017</span>
            <span className={classes["v220_1033"]}>October 30, 2017</span>
            <span className={classes["v220_1046"]}>October 30, 2017</span>
            <span className={classes["v220_1059"]}>October 30, 2017</span>
            <span className={classes["v220_1072"]}>October 30, 2017</span>
            <span className={classes["v220_1085"]}>October 30, 2017</span>
            <span className={classes["v220_1098"]}>October 30, 2017</span>
            <span className={classes["v220_1111"]}>October 30, 2017</span>
            <span className={classes["v220_1124"]}>October 30, 2017</span>
            <span className={classes["v220_1022"]}>Usman Baloch</span>
            <span className={classes["v220_1034"]}>Usman Baloch</span>
            <span className={classes["v220_1047"]}>Usman Baloch</span>
            <span className={classes["v220_1060"]}>Usman Baloch</span>
            <span className={classes["v220_1073"]}>Usman Baloch</span>
            <span className={classes["v220_1086"]}>Usman Baloch</span>
            <span className={classes["v220_1099"]}>Usman Baloch</span>
            <span className={classes["v220_1112"]}>Usman Baloch</span>
            <span className={classes["v220_1125"]}>Usman Baloch</span>
            <span className={classes["v220_1023"]}>Used</span>
            <span className={classes["v220_1035"]}>Used</span>
            <span className={classes["v220_1048"]}>Unused</span>
            <span className={classes["v220_1061"]}>Used</span>
            <span className={classes["v220_1074"]}>Used</span>
            <span className={classes["v220_1087"]}>Used</span>
            <span className={classes["v220_1100"]}>Unused</span>
            <span className={classes["v220_1113"]}>Used</span>
            <span className={classes["v220_1126"]}>Used</span>
            <div className={classes["v220_1029"]}>
              <span className={classes["v220_1020"]}>May 20, 2015</span>
              <span className={classes["v220_1021"]}>02:33:48 pm</span>
            </div>
          </div>
          <div className={classes["v220_1037"]}>
            <span className={classes["v220_1038"]}>May 20, 2015</span>
            <span className={classes["v220_1039"]}>02:33:48 pm</span>
          </div>
          <div className={classes["v220_1050"]}>
            <span className={classes["v220_1051"]}>May 20, 2015</span>
            <span className={classes["v220_1052"]}>02:33:48 pm</span>
          </div>
          <div className={classes["v220_1063"]}>
            <span className={classes["v220_1064"]}>May 20, 2015</span>
            <span className={classes["v220_1065"]}>02:33:48 pm</span>
          </div>
          <div className={classes["v220_1076"]}>
            <span className={classes["v220_1077"]}>May 20, 2015</span>
            <span className={classes["v220_1078"]}>02:33:48 pm</span>
          </div>
          <div className={classes["v220_1089"]}>
            <span className={classes["v220_1090"]}>May 20, 2015</span>
            <span className={classes["v220_1091"]}>02:33:48 pm</span>
          </div>
          <div className={classes["v220_1102"]}>
            <span className={classes["v220_1103"]}>May 20, 2015</span>
            <span className={classes["v220_1104"]}>02:33:48 pm</span>
          </div>
          <div className={classes["v220_1115"]}>
            <span className={classes["v220_1116"]}>May 20, 2015</span>
            <span className={classes["v220_1117"]}>02:33:48 pm</span>
          </div>
          <div className={classes["v220_1128"]}>
            <span className={classes["v220_1129"]}>May 20, 2015</span>
            <span className={classes["v220_1130"]}>02:33:48 pm</span>
          </div> */}
          {/* <div className={classes["v217_1008"]}></div> */}
          {/* <span className={classes["v215_1301"]}>Sire</span>
          <span className={classes["v220_1012"]}>Dam</span>
          <span className={classes["v220_1013"]}>Mating Date</span>
          <span className={classes["v220_1014"]}>Created Date</span>
          <span className={classes["v220_1015"]}>Created By</span>
          <span className={classes["v220_1016"]}>Status</span> */}
          {/* <div className={classes["v220_1024"]}>
            <div className={classes["v220_1025"]}>
               <div className={classes["v220_1026"]}></div>
               <div className={classes["v220_1027"]}></div>
            </div>
          </div> */}
          {/* <div className={classes["v220_1040"]}>
            <div className={classes["v220_1041"]}>
               <div className={classes["v220_1042"]}></div>
               <div className={classes["v220_1043"]}></div>
            </div>
          </div> */}
          {/* <div className={classes["v220_1053"]}>
            <div className={classes["v220_1054"]}>
               <div className={classes["v220_1055"]}></div>
               <div className={classes["v220_1056"]}></div>
            </div>
          </div>
          <div className={classes["v220_1066"]}>
            <div className={classes["v220_1067"]}>
               <div className={classes["v220_1068"]}></div>
               <div className={classes["v220_1069"]}></div>
            </div>
          </div>
          <div className={classes["v220_1079"]}>
            <div className={classes["v220_1080"]}>
               <div className={classes["v220_1081"]}></div>
               <div className={classes["v220_1082"]}></div>
            </div>
          </div>
          <div className={classes["v220_1092"]}>
            <div className={classes["v220_1093"]}>
               <div className={classes["v220_1094"]}></div>
               <div className={classes["v220_1095"]}></div>
            </div>
          </div>
          <div className={classes["v220_1105"]}>
            <div className={classes["v220_1106"]}>
               <div className={classes["v220_1107"]}></div>
               <div className={classes["v220_1108"]}></div>
            </div>
          </div>
          <div className={classes["v220_1118"]}>
            <div className={classes["v220_1119"]}>
               <div className={classes["v220_1120"]}></div>
               <div className={classes["v220_1121"]}></div>
            </div>
          </div>
          <div className={classes["v220_1131"]}>
            <div className={classes["v220_1132"]}>
               <div className={classes["v220_1133"]}></div>
               <div className={classes["v220_1134"]}></div>
            </div>
          </div> */}
         {/* <div className={classes["name"]}></div> */}
          {/* <div className={classes["v237_1058"]}>
              <div className={classes["v220_1030"]}></div>
              <div className={classes["v220_1036"]}></div>
              <div className={classes["v220_1049"]}></div>
              <div className={classes["v220_1062"]}></div>
              <div className={classes["v220_1075"]}></div>
              <div className={classes["v220_1088"]}></div>
              <div className={classes["v220_1101"]}></div>
              <div className={classes["v220_1114"]}></div>
              <div className={classes["v220_1127"]}></div>
          </div> */}
         {/* <div className={classes["v220_1135"]}>
            <div className={classes["v220_1136"]}>
               <div className={classes["v220_1137"]}>
                  <div className={classes["v220_1138"]}></div>
               </div>
            </div>
            <div className={classes["name"]}></div>
            <span className={classes["v220_1140"]}>24</span>
            <span className={classes["v220_1141"]}>...</span>
            <span className={classes["v220_1142"]}>05</span>
            <span className={classes["v220_1143"]}>04</span>
            <span className={classes["v220_1144"]}>03</span>
            <span className={classes["v220_1145"]}>02</span>
            <span className={classes["v220_1146"]}>01</span>
         </div> */}
         
         
         
         </>
};

export default LitterRegistrationList;
