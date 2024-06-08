import { NoSSRWrapper } from "@/util/noSSRWrapper";
import { InPortal as Portal } from "./inPortal";

export function InPortal({ children }: { children: React.ReactNode }) {
    return (
        <NoSSRWrapper>
            <Portal>{children}</Portal>
        </NoSSRWrapper>
    );
}
