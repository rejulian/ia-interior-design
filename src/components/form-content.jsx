"use client";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ImageSkeleton from "@/components/image-skeleton";
import SubmitButton from "@/components/submit-button";

export default function FormContent({ state }) {
  const { pending } = useFormStatus();

  return (
    <>
      <Input type="file" name="image" accept="image/*" />
      <Textarea placeholder="A tropical bedroom" name="prompt" />
      <SubmitButton>Generate</SubmitButton>
      {state?.error && !pending ? (
        <p className="text-red-500 text-sm">{state.error}</p>
      ) : null}
      <ImageSkeleton />
      {state?.output && !pending ? (
        <img
          className="w-full rounded-lg"
          src={state.output[1]}
          alt="Generated image"
        />
      ) : null}
    </>
  );
}
