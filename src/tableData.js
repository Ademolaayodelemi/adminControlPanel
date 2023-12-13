import Avatar from '@mui/material/Avatar';
import { DeleteOutlined, EditCalendarOutlined, VisibilityOutlined } from "@mui/icons-material";
import { v4 as uuidv4 } from 'uuid';
import StatusButton from './components/statusButton/StatusButton';




//--------------- Student ProfileData ---------------
export const studentProfileData = [
  {
    id: uuidv4(),
    // title: 'fullName::',
    value: 'Olanrewaju Ademola',
  },
  {
    id: uuidv4(),
    title: 'Details',
    // value: 'Olanrewaju',
  },
  {
    id: uuidv4(),
    title: 'Student ID:',
    value: 2048057,
  },
  {
    id: uuidv4(),
    title: 'First Name:',
    value: 'Olanrewaju',
  },
  {
    id: uuidv4(),
    title: 'Last Name:',
    value: 'Ademola',
  },
  {
    id: uuidv4(),
    title: 'Other Name:',
    value: '----',
  },
  {
    id: uuidv4(),
    title: 'Year:',
    value: 6,
  },
  {
    id: uuidv4(),
    title: 'Nationality:',
    value: 'British',
  },
  {
    id: uuidv4(),
    title: 'Gender:',
    value: 'Male',
  },
  // {
  //   id: uuidv4(),
  //   title: 'Father Name:',
  //   value: '----',
  // },
  // {
  //   id: uuidv4(),
  //   title: 'Mother Name:',
  //   value: '----',
  // },
  {
    id: uuidv4(),
    title: 'Date of Birth:',
    value: 'January 31, 1990',
  },
  {
    id: uuidv4(),
    title: 'Telephone No',
    value: '+44759165582',
  },
  {
    id: uuidv4(),
    title: 'Religion:',
    value: 'Christianity',
  },
  {
    id: uuidv4(),
    title: 'Email:',
    value: 'Student@example.com',
  },
  {
    id: uuidv4(),
    title: 'Start Date:',
    value: '10/04/2022',
  },
  {
    id: uuidv4(),
    title: 'End Date:',
    value: '09/04/2025',
  },
  {
    id: uuidv4(),
    title: 'Home Address:',
    value: '30, Terrace Rd, UK',
  },
];


// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const socialTableData = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];
                      // OR

// export const socialTableData = [
//   {myColumn1: 'Frozen yoghurt', myColumn2: 159, myColumn3: 6.0, myColumn4: 24, myColumn5: 4.0,},

//   {myColumn1: 'Ice cream sandwich', myColumn2: 237, myColumn3: 9, myColumn4: 37, myColumn5: 4.3,},

//   {myColumn1: 'Eclair', myColumn2: 262, myColumn3: 16.0, myColumn4: 24, myColumn5: 6.0,},

//   {myColumn1: 'Cupcake', myColumn2: 305, myColumn3: 3.7, myColumn4: 67, myColumn5: 4.3,},

//   {myColumn1: 'Gingerbread', myColumn2: 356, myColumn3: 16.0, myColumn4: 49, myColumn5: 3.9,}
// ];



// ------------- Social Table Platform Data ---------------
// NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const columns = socialTablePlatformColums.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.

export const socialPlatformTableColumns = [
  // field is the only required property since it's the column identifier. It's also used to match with Row values.
  // { field: 'id', headerName: 'ID', width: 40 },
  {
    field: 'platform',
    headerName: 'Platform',
    flex: 1,
    // width: 130,
    // editable: true,
  },
  {
    field: 'visitors',
    headerName: 'Visitors',
    flex: 1,
    // width: 130,
    // editable: true,
  },
  {
    field: 'goals',
    headerName: 'Goals',
    flex: 1,
    // width: 130,
    // editable: true,
  },
  {
    field: 'gcr',
    headerName: 'GCR',
    flex: 0.5,
    // width: 130,
    // editable: true,
  },
];

// NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const rows = socialTablePlatformRows.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.

export const socialPlatformTableRows = [
  { id: 1,
    platform: 'Facebook',
    visitors: 3456,
    goals: 79,
    gcr: 8.59,
  },
  { id: 2,
    platform: 'Twitter',
    visitors: 1306,
    goals: 68,
    gcr: 3.4 ,

  },
  { id: 3,
    platform: 'Linked in',
    visitors: 782,
    goals: 15.0,
    gcr: 14,

  },
  { id: 4,
    platform: 'Google Plus',
    visitors: 425,
    goals: 5.7,
    gcr: 69,

  },
  { id: 5,
    platform: 'Youtube',
    visitors: 452,
    goals: 18.0,
    gcr: 57,

  },
];

// ------------- Social Table Device Data ---------------
// NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const columns = socialTableDeviceColumns.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.

export const socialDeviceTableColumns = [
  // {id:1, tableHead1: 'Device', tableHead2: 'Visits', tableHead3: 'Avg. time'},

  {
    field: 'device',
    headerName: 'Device',
    flex: 1,
    // width: 130,
    // editable: true,
  },
  {
    field: 'visits',
    headerName: 'Visits',
    flex: 1,
    // width: 130,
    // editable: true,
  },
  {
    field: 'avgTime',
    headerName: 'Avg. time',
    flex: 0.5,
    // width: 130,
    // editable: true,
  },
];

// NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const rows = socialTableDeviceRows.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.

export const socialDeviceTableRows = [
  {
    id:1, 
    device: 'Unknown', 
    visits: 2456, 
    avgTime: '00:02:36',
},

  {
    id:2, 
    device: 'Apple iPad', 
    visits: 1586, 
    avgTime: '00:03:41'
},

  {
    id:3, 
    device: 'Apple iPhone', 
    visits: 82, 
    avgTime: '00:04:10'
},

  {
    id:4, 
    device: 'HTC Desire', 
    visits: 45, 
    avgTime: '00:01:40'
},

  {
    id:5, 
    device: 'Samsung', 
    visits: 52, 
    avgTime: '00:04:54'
},
];
// export const socialTablePlatformData = [
//   {id:1, tableHead1: 'Platform', tableHead2: 'Visitors', tableHead3: 'Goals', tableHead4: 'GCR'},

//   {id:1, myColumn1: 'Facebook', myColumn2: 3456, myColumn3: 79, myColumn4: 8.59},

//   {id:2, myColumn1: 'Twitter', myColumn2: 1306, myColumn3: 68, myColumn4: 3.4},

//   {id:3, myColumn1: 'Linked in', myColumn2: 782, myColumn3: 15.0, myColumn4: 14},

//   {id:4, myColumn1: 'Google Plus', myColumn2: 425, myColumn3: 5.7, myColumn4: 69},

//   {id:5, myColumn1: 'Youtube', myColumn2: 452, myColumn3: 18.0, myColumn4: 57}
// ];

// export const socialTableDeviceData = [
//   {id:1, tableHead1: 'Device', tableHead2: 'Visits', tableHead3: 'Avg. time'},

//   {id:1, myColumn1: 'Unknown', myColumn2: 2456, myColumn3: '00:02:36',},

//   {id:2, myColumn1: 'Apple iPad', myColumn2: 1586, myColumn3: '00:03:41'},

//   {id:3, myColumn1: 'Apple iPhone', myColumn2: 82, myColumn3: '00:04:10'},

//   {id:4, myColumn1: 'HTC Desire', myColumn2: 45, myColumn3: '00:01:40'},

//   {id:5, myColumn1: 'Samsung', myColumn2: 52, myColumn3: '00:04:54'}
// ];


// ------------- New Applicants ---------------
// NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const columns = newApplicantsColumns.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.

export const newApplicantsColumns = [
  { 
    
    field: 'id', 
    headerName: 'ID',
    // flex: 1, 
    maxWidth: 10 
},
  {
    field: 'firstName',
    headerName: 'First name',
    flex: 1,
    minWidth: 160,
    // editable: true,
    renderCell: params => {
      return (
        <div className="imgFirstname">
          <Avatar src="/broken-image.jpg" />
          <div>{params.row.firstName}</div>
        </div>
      )
    }
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    flex: 1,
    minWidth: 130,
    // editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    // type: 'number',
    flex: 1,
    maxWidth: 60,
    // editable: true,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    flex: 1,
    minWidth: 90,
    // editable: true,
  },
  {
    field: 'course',
    headerName: 'Course',
    flex: 1,
    minWidth: 180,
    // editable: true,
  },
  {
    field: 'fee',
    headerName: 'Fee',
    flex: 1,
    minWidth: 100,
    // editable: true,
  },
  {
    field: 'score',
    headerName: 'Score',
    // type: 'number',
    flex: 1,
    maxWidth: 80,
    // editable: true,
  },
  {
    field: 'country',
    headerName: 'Country',
    flex: 1,
    minWidth: 100,
    // editable: true,
  },
  {
    field: 'level',
    headerName: 'Level',
    // type: 'number',
    flex: 1,
    minWidth: 80,
    // editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    minWidth: 100,
    // editable: true,
  },
  {
    field: 'decision',
    headerName: 'Decision',
    flex: 1,
    minWidth: 120,
    // editable: true,
  },
  {
    field: 'action',
    headerName: 'Action',
    flex: 1,
    minWidth: 210,
    // editable: true,
    renderCell: params => {
      return (
        <div className="actionContainer">
          <button className="viewButton">
            <VisibilityOutlined/>
            <span>view</span>
          </button>
          <DeleteOutlined className="appDeleteIcon"/>
        </div>
      )
    }
  },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];


// NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const rows = newApplicantsRows.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.

export const newApplicantsRows = [
  { 
    id: 1, 
    firstName: 'Jon', 
    lastName: 'Snow', 
    age: 35,
    gender: 'Male',
    course: 'Computer Science',
    fee: '£14000',
    score: '70%',
    country: 'England',
    level: 'MSc',
    status: 'Citizen',
    decision: 'Accepted',

  },
  { 
    id: 2, 
    firstName: 'Cersei', 
    lastName: 'Lannister', 
    age: 42,
    gender: 'Male',
    course: 'Computer Science',
    fee: '£14000',
    score: '70%',
    country: 'England',
    level: 'MSc',
    status: 'Citizen',
    decision: 'Accepted',

  },
  { 
    id: 3, 
    firstName: 'Jaime', 
    lastName: 'Lannister', 
    age: 45,
    gender: 'Male',
    course: 'Computer Science',
    fee: '£14000',
    score: '70%',
    country: 'England',
    level: 'MSc',
    status: 'Citizen',
    decision: 'Accepted',

  },
  { 
    id: 4, 
    firstName: 'Arya', 
    lastName: 'Stark', 
    age: 16,
    gender: 'Male',
    course: 'Computer Science',
    fee: '£14000',
    score: '70%',
    country: 'England',
    level: 'MSc',
    status: 'Citizen',
    decision: 'Accepted',

  },
  { 
    id: 5, 
    firstName: 'Daenerys', 
    lastName: 'Targaryen', 
    age: 25,
    gender: 'Male',
    course: 'Computer Science',
    fee: '£14000',
    score: '70%',
    country: 'England',
    level: 'MSc',
    status: 'Citizen',
    decision: 'Accepted',
    
  },
  { 
    id: 6, 
    firstName: 'Matt', 
    lastName: 'Melisandre', 
    age: 15,
    gender: 'Male',
    course: 'Computer Science',
    fee: '£14000',
    score: '70%',
    country: 'England',
    level: 'MSc',
    status: 'Citizen',
    decision: 'Accepted',

  },
  { 
    id: 7, 
    firstName: 'Ferrara', 
    lastName: 'Clifford', 
    age: 44,
    gender: 'Male',
    course: 'Computer Science',
    fee: '£14000',
    score: '70%',
    country: 'England',
    level: 'MSc',
    status: 'Citizen',
    decision: 'Accepted',

  },
  { 
    id: 8, 
    firstName: 'Rossini', 
    lastName: 'Frances', 
    age: 36,
    gender: 'Male',
    course: 'Computer Science',
    fee: '£14000',
    score: '70%',
    country: 'England',
    level: 'MSc',
    status: 'Citizen',
    decision: 'Accepted',

  },
  { 
    id: 9, 
    firstName: 'Harvey', 
    lastName: 'Roxie', 
    age: 65,
    gender: 'Male',
    course: 'Computer Science',
    fee: '£14000',
    score: '70%',
    country: 'England',
    level: 'MSc',
    status: 'Citizen',
    decision: 'Accepted',

  },
  { 
    id: 10, 
    firstName: 'Paul', 
    lastName: 'Casey', 
    age: 65,
    gender: 'Male',
    course: 'Computer Science',
    fee: '£14000',
    score: '70%',
    country: 'England',
    level: 'MSc',
    status: 'Citizen',
    decision: 'Accepted',

  },
];

// -------------------- Exam Results ----------------------
// NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const columns = examResultsColumns.map( column =>  column ); WITHOUT THE BELOW ARRAY OF OBJECTS.

export const examResultsColumns = [
  {
    field: 'courseTitle',
    headerName: 'Course Title',
    flex: 1,
    // width: 130,
  },
  {
    field: 'courseCode',
    headerName: 'Course Code',
    flex: 1,
    // width: 130,
  },
  {
    field: 'gradePoint',
    headerName: 'Grade Point',
    flex: 1,
    // width: 130,
  },
  {
    field: 'score',
    headerName: 'Score (%)',
    flex: 1,
    // width: 130,
  },
  {
    field: 'courseUnit',
    headerName: 'Course Unit',
    flex: 1,
    // width: 130,
  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    // width: 130,
  },
  {
    field: 'semester',
    headerName: 'Semester',
    flex: 1,
    // width: 130,
  },
  {
    field: 'session',
    headerName: 'Session',
    flex: 1,
    // width: 130,
  },
];

// NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const rows = examResultsRows.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.

export const examResultsRows = [ 
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
  { 
    id: uuidv4(),
    courseTitle: 'Embedded System',
    courseCode: 'CSC 702',
    gradePoint: '4.00',
    score: 85,
    courseUnit: 3,
    status: 'Passed',
    semester: 'First Semester',
    session: '15/04/2020/21',
  },
 ];

//  --------------- Course Work ----------------
 export const courseWorkTableColumns = [
  {
    field: 'courseTitle',
    headerName: 'Course Title',
    flex: 1,
    // width: 130,
    // headerAlign: 'center',

  },
  {
    field: 'status',
    headerName: 'Status',
    flex: 1,
    // width: 130,
    // headerAlign: 'center',

    renderCell: params => {
      return (
        <StatusButton type={params.row.status}/>
      )
    }
  },
  {
    field: 'score',
    headerName: 'Score (%)',
    flex: 1,
    // width: 130,
    // headerAlign: 'center',

  },
  {
    field: 'date',
    headerName: 'Date Submitted',
    flex: 1,
    // width: 130,
    // headerAlign: 'center',

  },
];

export const courseWorkTableRows = [
  {
    id: uuidv4(),
    courseTitle: 'Embedded System',
    status: 'COMPLETE',
    score: 35,
    date: 'January 22',
  },
  {
    id: uuidv4(),
    courseTitle: 'Embedded System',
    status: 'PENDING',
    score: '-',
    date: 'January 22',
  },
  {
    id: uuidv4(),
    courseTitle: 'Embedded System',
    status: 'COMPLETE',
    score: 32,
    date: 'January 22',
  },
  {
    id: uuidv4(),
    courseTitle: 'Embedded System',
    status: 'PENDING',
    score: '-',
    date: 'January 22',
  },
  {
    id: uuidv4(),
    courseTitle: 'Embedded System',
    status: 'REJECTED',
    score: '0',
    date: 'January 22',
  },
  {
    id: uuidv4(),
    courseTitle: 'Embedded System',
    status: 'COMPLETE',
    score: 30,
    date: 'January 22',
  },
];

// ----------------- Lectures Remarks ------------------
export const lecturesRemarks = [
  {
    remarkAvater: 'img',
    remarkHead: 'John Doe',
    remarkText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    remarkStatus: 'APPROVED',
    remarkTimeStamp: 'December 5, 2023',
  },
  {
    remarkAvater: 'img',
    remarkHead: 'John Doe',
    remarkText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    remarkStatus: 'PENDING',
    remarkTimeStamp: 'December 5, 2023',
  },
  {
    remarkAvater: 'img',
    remarkHead: 'John Doe',
    remarkText: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo.',
    remarkStatus: 'REJECTED',
    remarkTimeStamp: 'December 5, 2023',
  },
];


// ----------- Hostel List -----------

export const hostelListColumns = [
  { 
    field: "hostelName", 
    headerName: "Hotel Name", 
    room: 204,
    flex: 1,
    // minWidth: , 
    // maxWidth: , 
},
  { 
    field: "roomNo", 
    headerName: "Room No", 
    room: 204,
    flex: 1,
    // minWidth: , 
    // maxWidth: , 
},
  { 
    field: "roomType", 
    headerName: "Room Type", 
    room: 204,
    flex: 1,
    // minWidth: , 
    // maxWidth: , 
},
  { 
    field: "noOfBeds", 
    headerName: "No Of Beds", 
    room: 204,
    flex: 1,
    // minWidth: , 
    // maxWidth: , 
},
  { 
    field: "cost", 
    headerName: "Cost Per Bed", 
    room: 204,
    flex: 1,
    // minWidth: , 
    // maxWidth: , 
},
 
];

export const hostelListRows = [
  { 
    id: uuidv4(),
    hostelName: "Bay Hostel", 
    roomNo: 204,
    roomType: 'double',
    noOfBeds: 3,
    cost: '£600',
},
  { 
    id: uuidv4(),
    hostelName: "Singleton Hostel", 
    roomNo: 204,
    roomType: 'Single',
    noOfBeds: 3,
    cost: '£450',
},
  { 
    id: uuidv4(),
    hostelName: "Bay Hostel", 
    roomNo: 204,
    roomType: 'Single',
    noOfBeds: 3,
    cost: '£450',
},
  { 
    id: uuidv4(),
    hostelName: "Singleton Hostel", 
    roomNo: 204,
    roomType: 'double',
    noOfBeds: 3,
    cost: '£600',
},
  { 
    id: uuidv4(),
    hostelName: "Bay Hostel", 
    roomNo: 204,
    roomType: 'double',
    noOfBeds: 3,
    cost: '£600',
},
  { 
    id: uuidv4(),
    hostelName: "Singleton Hostel", 
    roomNo: 204,
    roomType: 'Single',
    noOfBeds: 3,
    cost: '£450',
},
  { 
    id: uuidv4(),
    hostelName: "Bay Hostel", 
    roomNo: 204,
    roomType: 'Single',
    noOfBeds: 3,
    cost: '£450',
},
  { 
    id: uuidv4(),
    hostelName: "Singleton Hostel", 
    roomNo: 204,
    roomType: 'double',
    noOfBeds: 3,
    cost: '£600',
},
{ 
  id: uuidv4(),
  hostelName: "Bay Hostel", 
  roomNo: 204,
  roomType: 'Single',
  noOfBeds: 3,
  cost: '£450',
},
{ 
  id: uuidv4(),
  hostelName: "Singleton Hostel", 
  roomNo: 204,
  roomType: 'double',
  noOfBeds: 3,
  cost: '£600',
},
{ 
  id: uuidv4(),
  hostelName: "Singleton Hostel", 
  roomNo: 204,
  roomType: 'double',
  noOfBeds: 3,
  cost: '£600',
},
{ 
  id: uuidv4(),
  hostelName: "Singleton Hostel", 
  roomNo: 204,
  roomType: 'double',
  noOfBeds: 3,
  cost: '£600',
},
{ 
  id: uuidv4(),
  hostelName: "Singleton Hostel", 
  roomNo: 204,
  roomType: 'double',
  noOfBeds: 3,
  cost: '£600',
},
{ 
  id: uuidv4(),
  hostelName: "Singleton Hostel", 
  roomNo: 204,
  roomType: 'double',
  noOfBeds: 3,
  cost: '£600',
},
{ 
  id: uuidv4(),
  hostelName: "Singleton Hostel", 
  roomNo: 204,
  roomType: 'double',
  noOfBeds: 3,
  cost: '£600',
},
];

// ------------------- All Students Data ----------------
// NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const columns = allStudentsDataColumns.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.

export const allStudentsDataColumns = [
//   { 
//     field: 'id', 
//     headerName: 'ID',
//     // flex: 1, 
//     maxWidth: 10 
// },
  { 
    
    field: 'studentNo', 
    headerName: 'Student Number',
    flex: 1, 
    minWidth: 10 
},
{
  field: 'photo', 
  headerName: 'Photo',
  flex: 1,
  maxWidth: 90,
  // editable: true,
  renderCell: params => {
    return (
      <div className="imgFirstname">
        <Avatar src="/broken-image.jpg" />
        <div>{params.row.firstName}</div>
      </div>
    )
  }
},
  { 
    
    field: 'fullName',
    headerName: 'Full name',
    flex: 1, 
    minWidth: 100 
  },
  {
    field: 'gender',
    headerName: 'Gender',
    flex: 1,
    maxWidth: 90,
    // editable: true,
  },
  {
    field: 'sponsor',
    headerName: 'Sponsor Name',
    flex: 1,
    minWidth: 100,
    // editable: true,
  },
  {
    field: 'dob',
    headerName: 'Date of Birth',
    // type: 'number',
    flex: 1,
    minWidth: 60,
    // editable: true,
  },
  {
    field: 'mobile',
    headerName: 'Mobile No',
    flex: 1,
    minWidth: 100,
    // editable: true,
  },
  {
    field: 'course',
    headerName: 'Course',
    flex: 1,
    minWidth: 180,
    // editable: true,
  },
  {
    field: 'email',
    headerName: 'Email Address',
    // type: 'number',
    flex: 1,
    minWidth: 120,
    // editable: true,
  },
  {
    field: 'year',
    headerName: 'Year',
    // type: 'number',
    flex: 1,
    maxWidth: 80,
    // editable: true,
  },
  {
    field: 'level',
    headerName: 'Level',
    // type: 'number',
    flex: 1,
    minWidth: 100,
    // editable: true,
  },
];

// NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const columns = allStudentsDataColumns.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.
export const allStudentsDataRows = [
  { 
    id: uuidv4(),
    studentNo:'#2037310',
    photo: 'avatar',
    fullName: 'Daniel Will',
    gender: 'Male',
    sponsor: 'David Will',
    dob: '10/03/1995',
    mobile: '+447451170092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '3',
    level: 'Under Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2037310',
    photo: 'avatar',
    fullName: 'Daniel Will',
    gender: 'Male',
    sponsor: 'David Will',
    dob: '10/03/1995',
    mobile: '+447451170092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '3',
    level: 'Under Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2037310',
    photo: 'avatar',
    fullName: 'Daniel Will',
    gender: 'Male',
    sponsor: 'David Will',
    dob: '10/03/1995',
    mobile: '+447451170092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '3',
    level: 'Under Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2037310',
    photo: 'avatar',
    fullName: 'Daniel Will',
    gender: 'Male',
    sponsor: 'David Will',
    dob: '10/03/1995',
    mobile: '+447451170092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '3',
    level: 'Under Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2037310',
    photo: 'avatar',
    fullName: 'Daniel Will',
    gender: 'Male',
    sponsor: 'David Will',
    dob: '10/03/1995',
    mobile: '+447451170092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '3',
    level: 'Under Graduate',
  },
    { 
    id: uuidv4(),
    studentNo:'#2037310',
    photo: 'avatar',
    fullName: 'Daniel Will',
    gender: 'Male',
    sponsor: 'David Will',
    dob: '10/03/1995',
    mobile: '+447451170092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '3',
    level: 'Under Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2037310',
    photo: 'avatar',
    fullName: 'Daniel Will',
    gender: 'Male',
    sponsor: 'David Will',
    dob: '10/03/1995',
    mobile: '+447451170092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '3',
    level: 'Under Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2037310',
    photo: 'avatar',
    fullName: 'Daniel Will',
    gender: 'Male',
    sponsor: 'David Will',
    dob: '10/03/1995',
    mobile: '+447451170092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '3',
    level: 'Under Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2037310',
    photo: 'avatar',
    fullName: 'Daniel Will',
    gender: 'Male',
    sponsor: 'David Will',
    dob: '10/03/1995',
    mobile: '+447451170092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '3',
    level: 'Under Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2137275',
    photo: 'avatar',
    fullName: 'Larry James',
    gender: 'Male',
    sponsor: 'Samuel James',
    dob: '14/05/1990',
    mobile: '+447641165092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '6',
    level: 'Post Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2137275',
    photo: 'avatar',
    fullName: 'Larry James',
    gender: 'Male',
    sponsor: 'Samuel James',
    dob: '14/05/1990',
    mobile: '+447641165092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '6',
    level: 'Post Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2137275',
    photo: 'avatar',
    fullName: 'Larry James',
    gender: 'Male',
    sponsor: 'Samuel James',
    dob: '14/05/1990',
    mobile: '+447641165092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '6',
    level: 'Post Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2137275',
    photo: 'avatar',
    fullName: 'Larry James',
    gender: 'Male',
    sponsor: 'Samuel James',
    dob: '14/05/1990',
    mobile: '+447641165092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '6',
    level: 'Post Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2137275',
    photo: 'avatar',
    fullName: 'Larry James',
    gender: 'Male',
    sponsor: 'Samuel James',
    dob: '14/05/1990',
    mobile: '+447641165092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '6',
    level: 'Post Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2137275',
    photo: 'avatar',
    fullName: 'Larry James',
    gender: 'Male',
    sponsor: 'Samuel James',
    dob: '14/05/1990',
    mobile: '+447641165092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '6',
    level: 'Post Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2137275',
    photo: 'avatar',
    fullName: 'Larry James',
    gender: 'Male',
    sponsor: 'Samuel James',
    dob: '14/05/1990',
    mobile: '+447641165092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '6',
    level: 'Post Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2137275',
    photo: 'avatar',
    fullName: 'Larry James',
    gender: 'Male',
    sponsor: 'Samuel James',
    dob: '14/05/1990',
    mobile: '+447641165092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '6',
    level: 'Post Graduate',
  },
  { 
    id: uuidv4(),
    studentNo:'#2137275',
    photo: 'avatar',
    fullName: 'Larry James',
    gender: 'Male',
    sponsor: 'Samuel James',
    dob: '14/05/1990',
    mobile: '+447641165092',
    course: 'Computer Science', 
    email: 'user@gmail.com', 
    year: '6',
    level: 'Post Graduate',
  },
];


// ------------------- All Staff Data ----------------
  // NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const columns = allStudentsDataColumns.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.
  
  export const allStaffDataColumns = [
    //   { 
    //     field: 'id', 
    //     headerName: 'ID',
    //     // flex: 1, 
    //     maxWidth: 10 
    // },
      { 
        
        field: 'staffNo', 
        headerName: 'Staff Number',
        flex: 1, 
        maxWidth: 110 
    },
    {
      field: 'photo', 
      headerName: 'Photo',
      flex: 1,
      maxWidth: 55,
      // editable: true,
      renderCell: params => {
        return (
          <div className="imgFirstname">
            <Avatar src="/broken-image.jpg" />
            <div>{params.row.firstName}</div>
          </div>
        )
      }
    },
      { 
        
        field: 'fullName',
        headerName: 'Full name',
        flex: 1, 
        minWidth: 100 
      },
      {
        field: 'gender',
        headerName: 'Gender',
        flex: 1,
        maxWidth: 90,
        // editable: true,
      },
      {
        field: 'dob',
        headerName: 'Date of Birth',
        // type: 'number',
        flex: 1,
        minWidth: 60,
        // editable: true,
      },
      {
        field: 'mobile',
        headerName: 'Mobile No',
        flex: 1,
        minWidth: 120,
        // editable: true,
      },
      {
        field: 'department',
        headerName: 'Department',
        flex: 1,
        minWidth: 100,
        // editable: true,
      },
      {
        field: 'email',
        headerName: 'Email Address',
        // type: 'number',
        flex: 1,
        minWidth: 120,
        // editable: true,
      },
      {
        field: 'empDate',
        headerName: 'Employment Date',
        // type: 'number',
        flex: 1,
        minWidth: 80,
        // editable: true,
      },
      {
        field: 'level',
        headerName: 'Level',
        // type: 'number',
        flex: 1,
        minWidth: 100,
        // editable: true,
      },
    ];

    
  // NOTE IF YOU ARE FETCHING THE DATA FROM A DATABASE JUST DO THIS: const columns = allStudentsDataColumns.map( row =>  row ); WITHOUT THE BELOW ARRAY OF OBJECTS.
export const allStaffDataRows = [
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
  { 
    id: uuidv4(),
    staffNo:'#8768956',
    photo: 'avatar',
    fullName: 'Shayne Basley',
    gender: 'Male',
    // sponsor: 'David Will',
    dob: '10/03/1985',
    mobile: '+447451170092',
    department: 'Administration', 
    email: 'Staff@gmail.com', 
    empDate: '10/03/2013',
    level: 'Senior Staff',
  },
];

// --------------- allCourses ---------------
export const allCoursesDataColumns = [
  { 
    field: 'courseCode', 
    headerName: 'Course Code',
    flex: 1, 
    minWidth: 80 
  },
  { 
    field: 'courseTitle', 
    headerName: 'Course Title',
    flex: 1, 
    minWidth: 80 
  },
  { 
    field: 'faculty', 
    headerName: 'Faculty',
    flex: 1, 
    minWidth: 80 
  },
  { 
    field: 'department', 
    headerName: 'Department',
    flex: 1, 
    minWidth: 80 
  },
  { 
    field: 'level', 
    headerName: 'Level',
    flex: 1, 
    minWidth: 80 
  },
];

export const allCoursesDataRows = [
  { 
    id: uuidv4(),
    courseCode: 'CSCM13', 
    courseTitle: 'Critical Systems', 
    faculty: 'Science & Engineering', 
    department: 'Computer Science', 
    level: 'Postgraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSC42', 
  courseTitle: 'Systems Architectures', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'undergraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSCM98 ', 
  courseTitle: 'Operating Systems & Arch', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'Postgraduate', 
},
  { 
    id: uuidv4(),
    courseCode: 'CSCM13', 
    courseTitle: 'Critical Systems', 
    faculty: 'Science & Engineering', 
    department: 'Computer Science', 
    level: 'Postgraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSC42', 
  courseTitle: 'Systems Architectures', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'undergraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSCM98 ', 
  courseTitle: 'Operating Systems & Arch', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'Postgraduate', 
},
  { 
    id: uuidv4(),
    courseCode: 'CSCM13', 
    courseTitle: 'Critical Systems', 
    faculty: 'Science & Engineering', 
    department: 'Computer Science', 
    level: 'Postgraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSC42', 
  courseTitle: 'Systems Architectures', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'undergraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSCM98 ', 
  courseTitle: 'Operating Systems & Arch', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'Postgraduate', 
},
  { 
    id: uuidv4(),
    courseCode: 'CSCM13', 
    courseTitle: 'Critical Systems', 
    faculty: 'Science & Engineering', 
    department: 'Computer Science', 
    level: 'Postgraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSC42', 
  courseTitle: 'Systems Architectures', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'undergraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSCM98 ', 
  courseTitle: 'Operating Systems & Arch', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'Postgraduate', 
},
  { 
    id: uuidv4(),
    courseCode: 'CSCM13', 
    courseTitle: 'Critical Systems', 
    faculty: 'Science & Engineering', 
    department: 'Computer Science', 
    level: 'Postgraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSC42', 
  courseTitle: 'Systems Architectures', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'undergraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSCM98 ', 
  courseTitle: 'Operating Systems & Arch', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'Postgraduate', 
},
  { 
    id: uuidv4(),
    courseCode: 'CSCM13', 
    courseTitle: 'Critical Systems', 
    faculty: 'Science & Engineering', 
    department: 'Computer Science', 
    level: 'Postgraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSC42', 
  courseTitle: 'Systems Architectures', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'undergraduate', 
},
{ 
  id: uuidv4(),
  courseCode: 'CSCM98 ', 
  courseTitle: 'Operating Systems & Arch', 
  faculty: 'Science & Engineering', 
  department: 'Computer Science', 
  level: 'Postgraduate', 
},
];