// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios"; // Axios for HTTP requests
// import Link from "next/link";

// const HistoryPage = () => {
//   const [historyData, setHistoryData] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("/api/history");
//         setHistoryData(response.data);
//       } catch (error) {
//         console.error("Error fetching history data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <Link href={"/home/history"}>
//       <div>
//         <h1>History Page</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>FormData</th>
//               <th>AiResponse</th>
//               <th>Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {historyData.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.name}</td>
//                 <td>{item.formData}</td>
//                 <td>{item.aiResponse}</td>
//                 <td>{item.date}</td> {/* Adjust as per your schema */}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Link>
//   );
// };

// export default HistoryPage;
