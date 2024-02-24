import { ChangeEvent, useRef, useState } from "react";
import { CategoryType, MoveType, SheetType } from "../../types";
import { parseTxtFile } from "../../txtParser";

const TxtFileReader = ({ onChange }: { onChange: (newVal: SheetType) => void }) => 
{
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | null = e.target.files?.[0] || null;
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event: ProgressEvent<FileReader>) => {
      try {
        if (event.target?.result) {
          const parsedData: SheetType = parseTxtFile(event.target.result as string);
          onChange(parsedData);
        }
      } catch (error) {
        console.error('Error parsing TXT file:', error);
      }
    };

    reader.readAsText(file);
  };

  const handleBtnClick = () => {
    if (fileInputRef.current) {
        fileInputRef.current.click();
    }
};

  return (
    <div>
      <input type="file" accept=".txt" onChange={handleFileChange} ref={fileInputRef} css={{ display: "none" }} />
      <button onClick={handleBtnClick}>Upload file</button>
    </div>
  );
};

export default TxtFileReader;