// import {
//   QueryClient,
//   HydrationBoundary,
//   dehydrate,
// } from "@tanstack/react-query";
// import { getNotes } from "@/lib/api";
// import NoteDetailsClient from "./Notes.client";

// interface NoteProps {
//   params: Promise<{ id: string }>;
// }

// async function Note({ params }: NoteProps) {
//   const { id } = await params;

//   const queryClient = new QueryClient();

//   queryClient.prefetchQuery({
//     queryKey: ["note", id],
//     queryFn: () => getNotes(id),
//   });

//   return (
//     <HydrationBoundary state={dehydrate(queryClient)}>
//       <NoteDetailsClient />
//     </HydrationBoundary>
//   );
// }

// export default Note;
