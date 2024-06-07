"use client";
import React, { forwardRef } from "react";

export const Item = forwardRef<
    HTMLDivElement,
    {
        children: React.ReactNode;
    } & React.ComponentPropsWithoutRef<"div">
>(function Item({ children, ...props }, ref) {
    return (
        <div {...props} ref={ref}>
            {children}
        </div>
    );
});
