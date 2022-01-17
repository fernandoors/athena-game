import AppError from "./AppError";

function Errors(error, request, response, next) {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }
  return response.status(500).json({
    status: 'error',
    message: "Internal Server Error"
  })
}

export default Errors
