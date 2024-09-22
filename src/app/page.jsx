"use client";
import FormContent from "@/components/form-content";
import { useFormState } from "react-dom";
import { createPrediction, getPrediction } from "@/actions/prediction";

export default function Home() {
  const [state, formAction] = useFormState(handleSubmit, null);

  async function handleSubmit(_state, formData) {
    let prediction = await createPrediction(formData);
    while (["starting", "processing"].includes(prediction.status)) {
      prediction = await getPrediction(prediction.id);

      await new Promise((resolve) => setTimeout(resolve, 4000));
    }
    return prediction;
  }

  return (
    <main className="container max-w-md min-h-[calc(100vh-104px)] m-auto gap-4 px-4 mt-12 sm:px-0">
      <h1 className="font-bold text-xl sm:text-2xl mb-2">
        AI Interior Design Generator
      </h1>
      <form className="grid gap-4" action={formAction}>
        <FormContent state={state} />
      </form>
    </main>
  );
}
