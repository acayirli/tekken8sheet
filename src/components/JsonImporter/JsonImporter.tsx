import { ChangeEvent, useRef, useState } from "react";
import { SheetType } from "../../types";

export function JsonImporter({
    onChange,
}: {
    onChange: (newVal: SheetType) => void;
}) {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file: File | null = e.target.files?.[0] || null;
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (event: ProgressEvent<FileReader>) => {
            try {
                if (event.target?.result) {
                    const parsedJson: SheetType = JSON.parse(
                        event.target.result as string
                    );
                    onChange(parsedJson);
                }
            } catch (error) {
                console.error("Error parsing JSON file:", error);
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
            <input
                css={{ display: "none" }}
                type="file"
                accept=".json"
                onChange={handleFileChange}
                ref={fileInputRef}
            />

            <button onClick={handleBtnClick}>Upload file</button>
        </div>
    );
}
