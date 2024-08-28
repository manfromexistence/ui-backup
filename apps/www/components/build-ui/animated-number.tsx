"use client"

import { useEffect } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

function AnimatedNumber({ value }: { value: number }) {
  let spring = useSpring(value, { mass: 0.8, stiffness: 75, damping: 15 })
  let display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  )

  useEffect(() => {
    spring.set(value)
  }, [spring, value])

  return <motion.span>{display}</motion.span>
}

// client-component.tsx
// "use client";
// export default function Page() {
//   let [value, setValue] = useState(1000);
//   return (
//     <div>
//       <button onClick={() => setValue(value - 100)}>-100</button>
//       <AnimatedNumber value={value} />
//       <button onClick={() => setValue(value + 100)}>+100</button>
//     </div>
//   );
// }

// server-component.tsx
// export default async function Page() {
//     let visitors = await getVisitors();
//     return (
//       <div>
//         <p>Visitors:<p>
//         <AnimatedNumber value={visitors} />
//       </div>
//     );
//   }
