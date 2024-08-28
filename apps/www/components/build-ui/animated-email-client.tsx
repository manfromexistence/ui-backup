// "use client";

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { ArchiveBoxIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
// import { getRandomEmail } from "@/lib/data";

// export default function EmailClient({
//   initialMessages,
// }: {
//   initialMessages: { id: string; subject: string; preview: string }[];
// }) {
//   const [messages, setMessages] = useState(initialMessages);
//   const [selectedMessageIds, setSelectedMessageIds] = useState<string[]>([]);

//   function toggleMessage(message: {
//     id: string;
//     subject: string;
//     preview: string;
//   }) {
//     if (selectedMessageIds.includes(message.id)) {
//       setSelectedMessageIds((ids) => ids.filter((id) => id !== message.id));
//     } else {
//       setSelectedMessageIds((ids) => [message.id, ...ids]);
//     }
//   }

//   function addMessage() {
//     setMessages((messages) => [...messages, getRandomEmail()]);
//   }

//   function archiveMessages() {
//     setMessages((messages) =>
//       messages.filter((message) => !selectedMessageIds.includes(message.id))
//     );
//     setSelectedMessageIds([]);
//   }

//   return (
//     <div className="flex w-full flex-1 overflow-hidden">
//       <div className="flex w-2/5 flex-col bg-gray-800">
//         <div className="px-5 shadow-sm shadow-black/50">
//           <div className="flex justify-between py-2 text-right">
//             <button
//               onClick={addMessage}
//               className="-mx-2 rounded px-2 py-1 text-gray-500 hover:text-gray-400 active:bg-gray-700 active:text-gray-300"
//             >
//               <EnvelopeIcon className="size-5" />
//             </button>
//             <button
//               onClick={archiveMessages}
//               className="-mx-2 rounded px-2 py-1 text-gray-500 hover:text-gray-400 active:bg-gray-700 active:text-gray-300"
//             >
//               <ArchiveBoxIcon className="size-5" />
//             </button>
//           </div>
//         </div>

//         <ul className="overflow-y-scroll px-3 py-2">
//           <AnimatePresence initial={false}>
//             {[...messages].reverse().map((message) => (
//               <motion.li
//                 initial={{ height: 0, opacity: 0 }}
//                 animate={{ height: "auto", opacity: 1 }}
//                 exit={{ height: 0, opacity: 0, overflow: "hidden" }}
//                 transition={{ type: "spring", bounce: 0, duration: 0.4 }}
//                 key={message.id}
//                 className="relative"
//               >
//                 <div className="py-0.5">
//                   <button
//                     onClick={() => toggleMessage(message)}
//                     className={`${
//                       selectedMessageIds.includes(message.id)
//                         ? "bg-blue-500"
//                         : "hover:bg-gray-700"
//                     } block w-full cursor-pointer truncate rounded p-3 text-left`}
//                   >
//                     <p
//                       className={`${
//                         selectedMessageIds.includes(message.id)
//                           ? "text-white"
//                           : "text-gray-300"
//                       } truncate text-sm font-semibold`}
//                     >
//                       {message.subject}
//                     </p>
//                     <p
//                       className={`${
//                         selectedMessageIds.includes(message.id)
//                           ? "text-blue-200"
//                           : "text-gray-500"
//                       } mt-1 truncate text-xs`}
//                     >
//                       {message.preview}
//                     </p>
//                   </button>
//                 </div>
//               </motion.li>
//             ))}
//           </AnimatePresence>
//         </ul>
//       </div>

//       <div className="flex-1 overflow-y-scroll border-l-2 border-gray-900/50 p-8">
//         <h1 className="h-8 rounded bg-gray-700 text-2xl font-bold" />
//         <div className="mt-8 space-y-6">
//           {Array.from(Array(9).keys()).map((i) => (
//             <div key={i} className="space-y-2 text-sm">
//               <p className="h-4 w-5/6 rounded bg-gray-700" />
//               <p className="h-4 rounded bg-gray-700" />
//               <p className="h-4 w-4/6 rounded bg-gray-700" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
