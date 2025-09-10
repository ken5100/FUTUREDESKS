import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "c0vwz9hn", // find this in sanity.json or manage.sanity.io
  dataset: "production", // or the dataset you set
  useCdn: true, // `false` if you want the latest data always
  apiVersion: "2025-09-10", // use a fixed date
});
// Note: You can also add a token here to allow write operations
// token: "your_sanity_token", // only if you want to update content with the client