interface CustomError {
  code: string;
  message: string;
  details: null;
  data: null;
  validationErrors: null;
}

export interface ApiError {
  error: CustomError;
}
