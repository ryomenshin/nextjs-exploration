// "use client";
// import { useEffect } from "react";
// import gsap from "gsap";

// const AnimatedBox = () => {
//   useEffect(() => {
//     gsap.to(".box", {
//       duration: 2,
//       rotationY: 360,
//       rotationX: 180,
//       scale: 1.5,
//       ease: "power2.inOut",
//       repeat: -1,
//       yoyo: true,
//     });
//   }, []);

//   return (
//     <div
//       style={{
//         perspective: "800px",
//         width: "200px",
//         height: "200px",
//         margin: "100px auto",
//       }}
//     >
//       <div
//         className="box"
//         style={{
//           width: "100%",
//           height: "100%",
//           backgroundColor: "blue",
//           transformStyle: "preserve-3d",
//         }}
//       />
//     </div>
//   );
// };

// export default AnimatedBox;

// components/AnimatedBox.js
"use client";
import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import CustomSpinner from "./CustomSpinner"; // Sesuaikan path jika perlu

const AnimatedBox = () => {
  const [isLoading, setIsLoading] = useState(true);
  const boxRef = useRef(null); // Gunakan ref untuk menargetkan elemen GSAP

  // 1. Efek untuk simulasi loading komponen ini
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Simulasi waktu muat 1.5 detik untuk AnimatedBox

    return () => clearTimeout(timer); // Cleanup timer
  }, []); // Hanya berjalan sekali saat komponen mount

  // 2. Efek untuk menjalankan animasi GSAP SETELAH loading selesai
  useEffect(() => {
    // Hanya jalankan animasi jika tidak sedang loading DAN elemen box sudah ada
    if (!isLoading && boxRef.current) {
      gsap.to(boxRef.current, { // Targetkan elemen melalui ref
        duration: 2,
        rotationY: 360,
        rotationX: 180,
        scale: 1.5,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
    }
    // Jika Anda ingin animasi di-reset/dihapus saat komponen unmount,
    // Anda bisa return sebuah fungsi cleanup dari sini yang menghentikan animasi GSAP.
    // Contoh: return () => gsap.killTweensOf(boxRef.current);
  }, [isLoading]); // Jalankan ulang efek ini jika isLoading berubah (terutama dari true ke false)

  // 3. Render kondisional
  if (isLoading) {
    return <CustomSpinner message="Memuat 3D Box..." />;
  }

  // Konten asli AnimatedBox
  return (
    <div
      style={{
        perspective: "800px",
        width: "200px",
        height: "200px", // Sebaiknya sama dengan minHeight di spinner atau kontainer loader
        margin: "100px auto",
        display: "flex", // Untuk memastikan box ada di tengah jika spinner juga di tengah
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        ref={boxRef} // Tambahkan ref di sini
        // className="box" // Anda masih bisa menggunakan className jika diperlukan untuk styling lain
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "blue",
          transformStyle: "preserve-3d",
        }}
      />
    </div>
  );
};

export default AnimatedBox;