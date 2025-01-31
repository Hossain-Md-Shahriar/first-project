import { Student } from './student.model';

const GetAllStudentsFromDB = async () => {
  const result = await Student.find();
  return result;
};

const GetSingleStudentFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const DeleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  GetAllStudentsFromDB,
  GetSingleStudentFromDB,
  DeleteStudentFromDB,
};
