"use client"

import { useSetAtom } from "jotai";
import { ImageList } from "./PageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCameraRetro, faFolderPlus } from "@fortawesome/free-solid-svg-icons";

export const ControlContainer = () => {
    const setImageSrc = useSetAtom(ImageList);
    const handleCapture = (target: EventTarget & HTMLInputElement) => {
        if(target.files) {
            if( target.files.length !== 0) {
                const file = target.files[0];
                const newUrl = URL.createObjectURL(file);
                setImageSrc(newUrl);
            }
        }
    }
    return (
        <div className="absolute bottom-0 w-full">
            <div>
                <label htmlFor="file"><FontAwesomeIcon icon={faFolderPlus} className="text-white w-4 h-4 border-2 border-white rounded-full p-2 cursor-pointer" /></label>
                <input accept="image/*" id="file" className="invisible" type="file" onChange={(e) => handleCapture(e.target)} />
            </div>
            
            <div>
                <label htmlFor="camera"><FontAwesomeIcon icon={faCameraRetro} className="text-white w-4 h-4 border-2 border-white rounded-full p-2 cursor-pointer" /></label>
                <input accept="image/*" id="camera" className="invisible" type="file" capture="environment" onChange={(e) => handleCapture(e.target)} />
            </div>
        </div>
    )
}