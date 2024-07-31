import React from "react";
import { Textarea } from "../TextArea";
import {
  FormField as BaseFormField,
  Form,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "./base";

export const FormFull = ({
  form,
  onSubmit,
  children,
}: {
  form: any;
  onSubmit: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="w-full">
        {children}
      </form>
    </Form>
  );
};

interface FormFieldProps {
  name: string;
  label?: string;
  placeholder?: string;
}

export const TextAreaField = ({ name, label, placeholder }: FormFieldProps) => {
  return (
    <BaseFormField
      name={name}
      render={({ field }) => (
        <FormItem>
          {!!label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Textarea placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
