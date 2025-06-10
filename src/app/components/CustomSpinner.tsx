// components/CustomSpinner.js
"use client"; // Jika ada interaktivitas atau hook, jika tidak, tidak perlu

const CustomSpinner = ({ message = "Memuat..." }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        margin: "10px 0", // Beri sedikit margin agar tidak terlalu rapat jika banyak loader
        border: "1px dashed #ccc", // Contoh border agar terlihat jelas
        minHeight: "100px", // Atur tinggi minimal agar layout tidak terlalu banyak berubah
        textAlign: "center",
      }}
    >
      <p>{message}</p>
      {/* Di sini Anda bisa menambahkan animasi CSS, SVG spinner, dll. */}
      
      <style jsx>{`
        .spinner {
          border: 4px solid rgba(0, 0, 0, 0.1);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border-left-color: #09f;
          animation: spin 1s ease infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
      <div className="spinner"></div>
     
    </div>
  );
};

export default CustomSpinner;