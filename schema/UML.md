----------------------------------
|            User              |
----------------------------------
| - user_id: string (PK)       |
| - username: string           |
| - email: string              |
| - password: string           |
| - userType: string           |
| - verified: boolean          |
----------------------------------

----------------------------------
|           Teacher            |
----------------------------------
| - teacher_id: string (PK)    |
| - user_id: string (FK)       |
| - additional_teacher_info    |
----------------------------------

----------------------------------
|           Student            |
----------------------------------
| - student_id: string (PK)    |
| - user_id: string (FK)       |
| - additional_student_info    |
----------------------------------

----------------------------------
|           Master             |
----------------------------------
| - master_id: string (PK)     |
| - user_id: string (FK)       |
| - additional_master_info     |
----------------------------------
----------------------------------
|           Class              |
----------------------------------
| - class_id: string (PK)      |
| - teacher_id: string (FK)    |
| - class_name: string         |
| - start_time: datetime       |
| - end_time: datetime         |
----------------------------------

----------------------------------
|         Attendance           |
----------------------------------
| - attendance_id: string (PK) |
| - student_id: string (FK)    |
| - class_id: string (FK)      |
| - attendance_date: datetime  |
| - marked_present: boolean    |
| - reason_for_absence: string |
----------------------------------