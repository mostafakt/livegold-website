export enum MediaInputTypes {
  image = "image",
  imageField = "imageField",
  fileField = "fileField",
}

export interface MediaInputData {
  file: File;
  name: string;
}

export interface MediaInputProps {
  name: string;
  type?: MediaInputTypes;
  label: string;
  initialData?: MediaInputData;
  onUploadError?: (error: string) => void;
  onUploadDone?: (url: string) => void;
  preventSetValue?: boolean;
}
