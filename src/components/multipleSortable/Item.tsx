"use client";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export const Item = forwardRef<
    HTMLDivElement,
    {
        children: React.ReactNode;
    } & React.ComponentPropsWithoutRef<"div">
>(function Item({ children, className, ...props }, ref) {
    return (
        <div
            ref={ref}
            className={twMerge(
                "m-1 w-52 text-nowrap rounded bg-stone-900 px-2 text-center text-white",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});
