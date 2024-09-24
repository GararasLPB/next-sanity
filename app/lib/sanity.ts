/* eslint-disable @typescript-eslint/no-explicit-any */

import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: "4yhc8vyp",
    dataset: "production",
    apiVersion: "2023-05-03",
    useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}