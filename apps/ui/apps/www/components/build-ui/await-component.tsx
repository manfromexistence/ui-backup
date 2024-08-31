// // src/app/stocks/[stockId]/page.tsx
// // import { Await } from "@/components/await"

// // src/components/await.tsx
// export async function Await<T>({
//   promise,
//   children,
// }: {
//   promise: Promise<T>
//   children: (result: T) => JSX.Element
// }) {
//   let result = await promise

//   return children(result)
// }

// export default async function Stock({
//   params,
// }: {
//   params: { stockId: string }
// }) {
//   // Page blocks on this data:
//   const stock = await getStock(params.stockId)

//   return (
//     <div>
//       <h1>{stock.name}</h1>

//       <Suspense fallback={<Spinner />}>
//         {/* ...but renders a spinner for this slower data: */}
//         <Await promise={getRecentNews(stock)}>
//           {(stories) => (
//             <ul>
//               {stories.map((story) => (
//                 <li key={story.id}>{story.title}</li>
//               ))}
//             </ul>
//           )}
//         </Await>
//       </Suspense>
//     </div>
//   )
// }
