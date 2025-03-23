import QueryBuilder from '../../builder/QueryBuilder';
import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAcademicDepartmentsFromDB = async (query: Record<string, unknown>) => {
  const AcademicDepartmentQuery = new QueryBuilder(
    AcademicDepartment.find().populate('academicFaculty'),
    query,
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await AcademicDepartmentQuery.modelQuery;
  const meta = await AcademicDepartmentQuery.countTotal();
  return {
    meta,
    result,
  };
};

const getSingleAcademicDepartmentFromDB = async (id: string) => {
  const result =
    await AcademicDepartment.findById(id).populate('academicFaculty');
  return result;
};

const updateAnAcademicDepartmentFromDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>,
) => {
  const result = await AcademicDepartment.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

export const academicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getAcademicDepartmentsFromDB,
  getSingleAcademicDepartmentFromDB,
  updateAnAcademicDepartmentFromDB,
};
