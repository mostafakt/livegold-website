/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { toast } from "react-hot-toast";
import { createMedia, uploadMedia } from "@/store/media/mediaSlice";
import {
  MediaInputData,
  MediaInputProps,
  MediaInputTypes,
} from "@/types/media";

export default function MediaInput({
  name,
  type = MediaInputTypes.image,
  label,
  initialData,
  onUploadError,
  onUploadDone,
  preventSetValue = false,
}: MediaInputProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { setValue } = useFormContext();

  const [pickedData, setPickedData] = useState<MediaInputData | null>(null);
  const [progress, setProgress] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleResetFile() {
    setPickedData(null);
    setProgress(null);
    setFinished(false);
    setError(null);

    if (!preventSetValue) {
      setValue(name, undefined, { shouldDirty: true });
    }
  }

  async function handleCreateFile(file: File) {
    const data: MediaInputData = { file, name: file.name };
    setPickedData(data);
    setProgress(null);
    setFinished(false);

    try {
      const createRes = await dispatch(
        await createMedia({
          userId: "current-user", // replace with real user.id from store
          fileName: data.name,
          fileSize: data.file.size,
          fileType: data.name.split(".")[1] || "type",
        })
      ).unwrap();

      const uploadRes = await dispatch(
        await uploadMedia({
          ...createRes,
          file: data.file,
          onUploadProgress,
        })
      ).unwrap();

      setFinished(true);

      if (!preventSetValue) {
        setValue(name, uploadRes.url + uploadRes.fields.key);
      }
      if (onUploadDone) onUploadDone(uploadRes.url + uploadRes.fields.key);
      toast.success(`${label} uploaded successfully`);
    } catch (err: any) {
      const message = `Failed to upload ${label.toLowerCase()}`;
      setError(message);
      toast.error(message);
      handleResetFile();
      if (onUploadError) onUploadError(message);
    }
  }

  function onUploadProgress(progressEvent: ProgressEvent) {
    if (progressEvent.total) {
      setProgress(
        Math.round((progressEvent.loaded * 100) / progressEvent.total)
      );
    }
  }

  useEffect(() => {
    if (initialData) {
      handleResetFile();
      handleCreateFile(initialData.file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialData]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) handleCreateFile(file);
  }

  return (
    <label className="w-28 h-28 px-3 py-2.5 rounded-xl border border-dashed cursor-pointer border-neutral-700 inline-flex justify-center items-center gap-2 relative">
      <input
        type="file"
        accept={type === MediaInputTypes.image ? "image/*" : "*"}
        onChange={handleFileChange}
        className="hidden"
      />
      {!pickedData && (
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.167 4.66666H10.267C8.30681 4.66666 7.32671 4.66666 6.57803 5.04813C5.91946 5.38369 5.38403 5.91912 5.04847 6.57769C4.66699 7.32638 4.66699 8.30647 4.66699 10.2667V17.7333C4.66699 19.6936 4.66699 20.6736 5.04847 21.4223C5.38403 22.0809 5.91946 22.6163 6.57803 22.9518C7.32671 23.3333 8.30681 23.3333 10.267 23.3333H17.7337C19.6939 23.3333 20.6739 23.3333 21.4227 22.9518C22.0812 22.6163 22.6166 22.0809 22.9522 21.4223C23.3337 20.6736 23.3337 19.6936 23.3337 17.7333V12.8333"
            stroke="#A6A6A6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4.66699 18.6667L9.67536 13.6583C10.131 13.2027 10.8697 13.2027 11.3253 13.6583L15.167 17.5M15.167 17.5L18.4254 14.2416C18.881 13.786 19.6197 13.786 20.0753 14.2416L23.3337 17.5M15.167 17.5L17.792 20.125"
            stroke="#A6A6A6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5837 3.5V6.41667M21.5837 6.41667V9.33333M21.5837 6.41667H18.667M21.5837 6.41667H24.5003"
            stroke="#A6A6A6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}

      {pickedData && (
        <div className="text-xs text-neutral-500 text-center">
          {progress !== null && !finished
            ? `Uploading... ${progress}%`
            : finished
              ? "Uploaded"
              : "Ready"}
        </div>
      )}
    </label>
  );
}
