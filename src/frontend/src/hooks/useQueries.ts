import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitContactForm() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      subject: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitContactForm(
        data.name,
        data.email,
        data.phone,
        data.subject,
        data.message,
      );
    },
  });
}

export function useSubmitJobApplication() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (data: {
      name: string;
      email: string;
      phone: string;
      position: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      await actor.submitJobApplication(
        data.name,
        data.email,
        data.phone,
        data.position,
        data.message,
      );
    },
  });
}
