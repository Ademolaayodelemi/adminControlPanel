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

// modified:   App.js
// modified:   App.scss
// added  SocialDeviceTable.js
// added  socialDeviceTable.scss
// added  AllCourses.js
// added  allCourses.scss
// added  AllStaffTable.js
// added  allStaffTable.scss
// added  AllStudentsTable.js
// added  allStudentsTable.scss
// deleted: Comments.js
// deleted:  comments.scss
// added     CourseWorkTable.js
// added      courseWorkTable.scss
// deleted:  DataTable.js
// deleted:  dataTable.scss
// added     ExamResultsTable.js
// added     examResultsTable.scss
// added  Hostel.js
// added  hostel.scss
// added   LecturesDetails.js
// added   lecturesDetails.scss
// added   NewApplicantsTable.js
// added   newApplicantsTable.scss
// added   Remarks.js
// added   remarks.scss
// added   SearchPage.js
// added   searchPage.scss
// modified: Sidebar.js
// deleted:  SmallTable.js
// deleted:  smallTable.scss
// added     SocialPlatformTable.js
// added      socialPlatformTable.scss
// modified:  statusButton.scss
// modified:   StudentDetails.js
// modified:   studentDetails.scss
// modified:   Home.js
// modified:   home.scss
// modified:   Management.js
// modified:   tableData.js
