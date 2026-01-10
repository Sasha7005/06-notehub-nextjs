// "use client";

// import { useQuery } from "@tanstack/react-query";
// import css from "./NoteDetails.module.css";
// import { getNotes } from "@/lib/api";

// type Props = {
//   page: number;
//   query: string;
// };

// export default function NoteDetailsClient({ page, query }: Props) {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["notes", page, query],
//     queryFn: () => getNotes(page, query),
//     refetchOnMount: false,
//   });

//   if (isLoading) return <p>Loading...</p>;
//   if (error || !data) return <p>Something went wrong</p>;

//   return (
//     <ul className={css.container}>
//       {data.map((note) => (
//         <li key={note.id}>{note.title}</li>
//       ))}
//     </ul>
//   );
// }
