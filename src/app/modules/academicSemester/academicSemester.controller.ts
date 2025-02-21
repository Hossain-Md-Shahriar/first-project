import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { academicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await academicSemesterServices.createAcademicSemesterIntoDB(
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is created successfully',
      data: result,
    });
  },
);

const getAcademicSemesters = catchAsync(async (req: Request, res: Response) => {
  const result = await academicSemesterServices.getAcademicSemestersFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'All Academic Semesters retrieved successfully',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { semesterId } = req.params;
    const result =
      await academicSemesterServices.getSingleAcademicSemesterFromDB(
        semesterId,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester retrieved successfully',
      data: result,
    });
  },
);

const updateAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const { semesterId } = req.params;
    const data = req.body;
    const result =
      await academicSemesterServices.updateAnAcademicSemesterFromDB(
        semesterId,
        data,
      );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester updated successfully',
      data: result,
    });
  },
);

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
