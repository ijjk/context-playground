import { createServerContext } from "react";

export const ServerData = createServerContext<string>(
  "my-unique-data-name",
  "default"
);
