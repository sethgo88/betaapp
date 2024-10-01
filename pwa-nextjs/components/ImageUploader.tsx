"use client"
import { useState } from "react";

export const ImageUploader = () => {
    return (
    <>
        <div className="flex flex-col w-screen h-[calc(100dvh)]">
            <div className="w-full h-full overflow-scroll bg-black">
                <img src={""} alt="alt" className="h-auto w-full"/>
            </div>
        </div>
    </>
    );
}