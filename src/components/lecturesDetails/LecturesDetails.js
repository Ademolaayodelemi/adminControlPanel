import "./lecturesDetails.scss";
import StudentWidgets from "../studentWidgets/StudentWidgets";
import StudentTodo from "../studentTodo/StudentTodo";
import UserData from "../userData/UserData";
import { studentProfileData } from "../../tableData";
import Remarks from "../remarks/Remarks";
import ExamResultsTable from "../examResultsTable/ExamResultsTable";
import CourseWorkTable from "../courseWorkTable/CourseWorkTable";

const LecturesDetails = () => {
  return (
    <div className='lecturesDetails'>
      <StudentWidgets/>
      <div className="lecturesDetailsMain">
        <UserData profileData={ studentProfileData }  title='User Information'/>
        <StudentTodo title='Event Record'/>
      </div>
      {/* <div className="examResultsTableWrapper">
        <ExamResultsTable/>
      </div> */}
      <div className="paperWrapper">
        <CourseWorkTable/>
        <Remarks title="Remarks"/>
      </div>
    </div>
  )
}

export default LecturesDetails;
