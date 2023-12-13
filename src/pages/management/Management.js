import "./management.scss";
import Bar from "../../components/bar/Bar"
import StudentDetails from "../../components/studentDetails/StudentDetails";
import Hostel from "../../components/hostel/Hostel";
import AllStudents from "../../components/allStudentsTable/AllStudentsTable";
import SearchPage from "../../components/searchPage/SearchPage";
import AllStaffTable from "../../components/allStaffTable/AllStaffTable";
import AllCourses from "../../components/allCourses/AllCourses";

const Management = () => {
  return (
    <div className='management'>
      <Bar/>
      {/* <StudentDetails/> */}
      {/* <Hostel/> */}
      {/* <AllStudents/> */}
      {/* <SearchPage/> */}
      {/* <LecturesDetails/> */}
      {/* <AllStaffTable/> */}
      <AllCourses/>
    </div>
  )
}

export default Management
