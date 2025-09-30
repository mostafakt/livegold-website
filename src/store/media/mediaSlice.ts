/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosProgressEvent } from "axios";

export const createMedia = createAsyncThunk<
  any,
  { userId: string; fileName: string; fileType: string; fileSize: number }
>(
  "media/create",
  async ({ fileName, fileSize, fileType, userId }, thunkAPI) => {
    const response = await axios.post("/admin/media/create", {
      fileName,
      userId,
    });
    return response.data;
  }
);

export const uploadMedia = createAsyncThunk<
  any,
  {
    url: string;
    fields: Record<string, any>;
    file: File;
    onUploadProgress?: (progressEvent: AxiosProgressEvent) => void;
  }
>("media/upload", async ({ url, fields, file, onUploadProgress }, thunkAPI) => {
  const bodyFormData = new FormData();
  Object.entries(fields || {}).forEach(([k, v]) =>
    bodyFormData.append(k, v as any)
  );
  bodyFormData.append("file", file);

  const response = await axios.post(url, bodyFormData, {
    withCredentials: true,
    headers: { "Content-Type": "multipart/form-data" },
    onUploadProgress,
    baseURL: "/", // keep as in original or change to real API base
  });

  return response.data;
});

const mediaSlice = createSlice({
  name: "media",
  initialState: {},
  reducers: {},
});

export default mediaSlice.reducer;
