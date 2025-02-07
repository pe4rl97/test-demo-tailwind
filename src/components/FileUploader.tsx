import { ChangeEvent, useState } from "react";

const FileUploader = () => {
    const [imagePreview, setImagePreview] = useState<string>('');
    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        
        if (!file) {
            setImagePreview('');
            return;
        }

        setImagePreview(URL.createObjectURL(file));
    };

    return (
        <div className="max-container">
            <div className="flex flex-col justify-center items-center min-h-screen">
                <input 
                    type="file"
                    id="photo"
                    name="photo"
                    accept="image/*" 
                    onChange={handleImageChange}
                    className="file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-hover-primary"
                    aria-label="Upload an image"
                />
                <p className="mt-1 text-sm text-gray-500 w-70" id="file_input_help">
                    Supported formats: SVG, PNG, JPG, GIF
                </p>

                {imagePreview && (
                    <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="object-contain h-100 mt-10 rounded-lg shadow-lg"
                        role="img"
                    />
                )}
            </div>
        </div>
    );
};

export default FileUploader;