import "./studentDetails.scss";
import StudentWidgets from "../studentWidgets/StudentWidgets";
import StudentTodo from "../studentTodo/StudentTodo";
import UserData from "../userData/UserData";
import { studentProfileData } from "../../tableData";
import Remarks from "../remarks/Remarks";
import ExamResultsTable from "../examResultsTable/ExamResultsTable";
import CourseWorkTable from "../courseWorkTable/CourseWorkTable";

const StudentDetails = () => {
  return (
    <div className='studentDetails'>
      <StudentWidgets/>
      <div className="studentDetailsMain">
        <UserData profileData={ studentProfileData }  title='User Information'/>
        <StudentTodo title='Event Record'/>
      </div>
      <div className="examResultsTableWrapper">
        <ExamResultsTable/>
      </div>
      <div className="courseWorkWrapper">
        <CourseWorkTable/>
        <Remarks title="Lecturers Remarks"/>
      </div>
    </div>
  )
}

export default StudentDetails;
