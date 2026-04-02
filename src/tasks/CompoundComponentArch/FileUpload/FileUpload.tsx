
import React, { createContext, useContext, useState, type ReactNode } from 'react';

// 1. Create a Context to share state between the parent and children
interface FileUploadContextType {
  file: File | null;
  setFile: (file: File | null) => void;
}

const FileUploadContext = createContext<FileUploadContextType | undefined>(undefined);

// 2. Custom hook for children to consume context
const useFileUpload = () => {
  const context = useContext(FileUploadContext);
  if (!context) {
    throw new Error('FileUpload sub-components must be used within a <FileUpload> provider');
  }
  return context;
};

// 3. Create the main parent component (Provider)
interface FileUploadProps {
  children: ReactNode;
  onChange?: (file: File | null) => void;
}

const FileUpload = ({ children, onChange }: FileUploadProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleSetFile = (newFile: File | null) => {
    setFile(newFile);
    if (onChange) {
      onChange(newFile);
    }
  };

  return (
    <FileUploadContext.Provider value={{ file, setFile: handleSetFile }}>
      <div 
        style={{ 
          border: '2px dashed #cbd5e1', 
          padding: '30px', 
          borderRadius: '12px', 
          width: '100%',
          maxWidth: '400px', 
          textAlign: 'center',
          backgroundColor: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        {children}
      </div>
    </FileUploadContext.Provider>
  );
};

// 4. Create child components

// The hidden file input
const Input = ({ accept = "*/*", id = "file-upload-input" }: { accept?: string, id?: string }) => {
  const { setFile } = useFileUpload();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  return (
    <input
      type="file"
      accept={accept}
      onChange={handleFileChange}
      style={{ display: 'none' }}
      id={id}
    />
  );
};

// The custom trigger button (e.g., label pointing to the input)
const Trigger = ({ children, htmlFor = "file-upload-input" }: { children: ReactNode, htmlFor?: string }) => {
  return (
    <label 
      htmlFor={htmlFor} 
      style={{ 
        cursor: 'pointer', 
        padding: '10px 24px', 
        backgroundColor: '#3b82f6', 
        color: 'white', 
        borderRadius: '8px', 
        fontWeight: '500',
        transition: 'background-color 0.2s',
      }}
      onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
      onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
    >
      {children}
    </label>
  );
};

// Component to display details of the selected file
const SelectedFileDetails = () => {
  const { file } = useFileUpload();

  if (!file) {
    return <p style={{ color: '#64748b', fontSize: '14px', margin: 0 }}>No file selected</p>;
  }

  return (
    <div style={{ 
      width: '100%',
      padding: '12px', 
      backgroundColor: 'white', 
      borderRadius: '8px',
      border: '1px solid #e2e8f0',
      textAlign: 'left'
    }}>
      <p style={{ margin: '0 0 4px 0', fontWeight: '500', color: '#0f172a', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {file.name}
      </p>
      <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>
        {(file.size / 1024).toFixed(2)} KB
      </p>
    </div>
  );
};

// Button to clear the selection
const ClearSelection = () => {
  const { file, setFile } = useFileUpload();

  if (!file) return null;

  return (
    <button
      onClick={() => setFile(null)}
      style={{ 
        padding: '8px 16px', 
        backgroundColor: 'transparent', 
        color: '#ef4444', 
        border: '1px solid #ef4444', 
        borderRadius: '6px', 
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '500',
        transition: 'all 0.2s'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#fef2f2';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      Clear Selection
    </button>
  );
}

// 5. Attach child components to the parent namespace
FileUpload.Input = Input;
FileUpload.Trigger = Trigger;
FileUpload.SelectedFileDetails = SelectedFileDetails;
FileUpload.ClearSelection = ClearSelection;

export default FileUpload;