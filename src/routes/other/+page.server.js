import { fail } from "@sveltejs/kit";
import { setFlash } from "sveltekit-flash-message/server";
import { loadFlash } from "sveltekit-flash-message/server";

export const load = loadFlash(async (event) => {
  console.log("loadFlash called on: ", event.url.pathname);
  console.log("flash cookie: " + event.cookies.get("flash"));
  const data = { someOther: "data" };
  return data;
});

export const actions = {
  default: async (event) => {
    const form = await event.request.formData();

    if (!form.get("text")) {
      setFlash({ type: "error", message: "Please enter text." }, event);
      return fail(400);
    }
  },
};
