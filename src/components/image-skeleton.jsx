import { Skeleton } from "./ui/skeleton";
import { useFormStatus } from "react-dom";

export default function ImageSkeleton() {
  const { pending } = useFormStatus();
  return (
    <div>
      {pending ? (
        <Skeleton className="w-full h-[700px] rounded-lg bg-zinc-700/40" />
      ) : null}
    </div>
  );
}
