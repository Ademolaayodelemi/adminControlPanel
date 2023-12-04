import "./studentDetails.scss";
import StudentWidgets from "../studentWidgets/StudentWidgets";
import StudentTodo from "../studentTodo/StudentTodo";
import DataTable from "../dataTable/DataTable";
import { courseWorkColumns, courseWorkRows, examResultsColumns, examResultsRows } from "../../tableData";
import UserData from "../userData/UserData";
import { studentProfileData } from "../../tableData";
import SmallTable from "../smallTable/SmallTable";
import Comments from "../comments/Comments";



const StudentDetails = () => {
  return (
    <div className='studentDetails'>
      <StudentWidgets/>
      <div className="studentDetailsMain">
        <UserData profileData={ studentProfileData }  title='User Information'/>
        <StudentTodo title='Event Record'/>
      </div>
      <div className="examResultsTable">
        <DataTable 
        title={"Exam Results"}
        columns={ examResultsColumns }
        rows={ examResultsRows }
        />
      </div>
      <div className="courseWork">
        <div className="recentProject">
          <SmallTable
          title="Recent Project"
          columns={courseWorkColumns}
          rows={courseWorkRows}
          />
        </div>
        <div className="recentComments">
          <Comments/>
        </div>
      </div>
    </div>
  )
}

export default StudentDetails
