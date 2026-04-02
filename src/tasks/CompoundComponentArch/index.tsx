import FileUpload from './FileUpload/FileUpload';

const CompoundComponentArch = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h2 style={{ color: '#0f172a', marginBottom: '8px' }}>Compound Component Architecture</h2>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>
        Compound components provide an expressive, declarative way to build complex UI. 
        The parent manages the state, and the children handle the rendering.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {/* Example 1: Full featured upload */}
        <div>
          <h3 style={{ fontSize: '16px', color: '#334155', marginBottom: '16px' }}>Example 1: Full-featured Upload</h3>
          <FileUpload onChange={(file) => console.log('Basic upload file:', file)}>
            <FileUpload.Input accept="image/*" />
            <FileUpload.Trigger>Select an Image</FileUpload.Trigger>
            <FileUpload.SelectedFileDetails />
            <FileUpload.ClearSelection />
          </FileUpload>
        </div>

        {/* Example 2: Minimal upload (different arrangement of children) */}
        <div>
          <h3 style={{ fontSize: '16px', color: '#334155', marginBottom: '16px' }}>Example 2: Minimal Layout Component</h3>
          <FileUpload onChange={(file) => console.log('Minimal upload file:', file)}>
            <FileUpload.Input id="minimal-upload" accept=".pdf,.doc,.docx" />
            <FileUpload.Trigger htmlFor="minimal-upload">Upload Document</FileUpload.Trigger>
            <FileUpload.SelectedFileDetails />
          </FileUpload>
        </div>
      </div>
    </div>
  );
};

export default CompoundComponentArch;