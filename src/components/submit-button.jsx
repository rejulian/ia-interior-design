import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";

export default function SubmitButton({ children }) {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" variant="secondary" disabled={pending}>
      {pending ? "Loading..." : children}
    </Button>
  );
}
