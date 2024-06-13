"use client";
// use client makes sure it ONLY runs on the client side not like before where it runs on both client and server
// We need use client since even with noSSRWrapper the server will render server components
// This means it will be run on server even though no ssr before being sent to client as pure html. This is why we need to use client
// But this only creates a client slot where if you have later server content you can still take advantage html sent to client

import { createPortal } from "react-dom";

// Since this component is a child of the NoSSRWrapper component it will not be rendered on the server unless there is no use client
export function InPortal({ children }: { children: React.ReactNode }) {
    return createPortal(<>{children}</>, document.body);
}
