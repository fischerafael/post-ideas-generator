"use client";

import { Button } from "@/components/Button/button";
import { FormFull, TextAreaField } from "@/components/Form";
import { useForm } from "react-hook-form";

export default function Home() {
  const form = useForm<{ username: "" }>({
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (e: any) => {
    console.log("form", form.getValues());
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FormFull onSubmit={form.handleSubmit(onSubmit)} form={form}>
        <TextAreaField name="testing" label="Hi" />
        <Button type="submit">Submit</Button>
      </FormFull>
    </main>
  );
}
