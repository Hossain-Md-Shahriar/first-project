import { Student } from './student.interface';
import { StudentModel } from './student.model';

const CreateStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const GetAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const GetSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  CreateStudentIntoDB,
  GetAllStudentsFromDB,
  GetSingleStudentFromDB,
};
