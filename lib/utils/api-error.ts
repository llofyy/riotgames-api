import { AxiosError } from "axios";
import { IApiErrorResponse } from "./interface";

export function ApiError(error: AxiosError) {
  if (error instanceof AxiosError)
    return {
      message: error.response?.statusText,
      status: error.response?.status,
    } as IApiErrorResponse;
}
