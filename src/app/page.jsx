"use client";
import { createPrediction } from "@/actions/prediction";
import ImageSkeleton from "@/components/image-skeleton";
import SubmitButton from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useFormState } from "react-dom";

export default function Home() {
  const [state, formAction] = useFormState(createPrediction, null);

  return (
    <main className="container max-w-md min-h-[calc(100vh-104px)] m-auto gap-4 px-4 mt-12 sm:px-0">
      <h1 className="font-bold text-xl sm:text-2xl mb-2">
        AI Interior Design Generator
      </h1>
      <form className="grid gap-4" action={formAction}>
        <Input type="file" name="image" accept="image/*" />
        <Textarea placeholder="A tropical bedroom" name="prompt" />
        <SubmitButton>Generate</SubmitButton>
        {state?.error && <p className="text-red-500 text-sm">{state.error}</p>}
        <ImageSkeleton />
      </form>
      {state?.output ? (
        <img
          className="w-full rounded-lg"
          src={state.output[1]}
          alt="Generated image"
        />
      ) : null}
    </main>
  );
}
