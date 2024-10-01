"use client"
import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { ImageList } from "./PageWrapper";
import useLongPress from "../utils/useLongPress";
import { MoveContainer } from "./MoveContainer";
import React from "react";
import { v4 as uuidV4 } from "uuid";

type Position = {
    x: number;
    y: number;
}

export type Move = {
    id: string;
    type: string;
    description: string;
    position: Position;
}
export const MoveList = atomWithStorage<Move[]>('moveList', [])
export const IsOpenNewMoveModal = atom<boolean>(false);
export const IsOpenEditMoveModal = atom<string>('');
export const tempMovePositionAtom = atom<Position>();

function isTouch(e: React.TouchEvent | React.MouseEvent): e is React.TouchEvent {
    return e.nativeEvent instanceof TouchEvent;
}
export const ImageContainer = () => {
    const imageSrc = useAtomValue(ImageList);
    const setIsOpenNewMoveModal = useSetAtom(IsOpenNewMoveModal);
    const setTempMovePosition = useSetAtom(tempMovePositionAtom);

    const onLongPress = (event: React.MouseEvent | React.TouchEvent) => {
        setIsOpenNewMoveModal(true);
        setTempMovePosition({x: isTouch(event) ? event.touches[0].pageX : event.nativeEvent.offsetX, y: isTouch(event) ? event.touches[0].pageY : event.nativeEvent.offsetY})
    }
    const onClick = () => {
        
    }

    const defaultOptions = {
        shouldPreventDefault: true,
        delay: 500,
    };
    const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

    return (
    <>
        <div className="flex flex-col w-screen h-[calc(100dvh)]">
            <div className="w-full h-full overflow-scroll bg-black cursor-pointer" { ...longPressEvent}>
                <div className="h-full w-max">
                    <img src={imageSrc} alt="alt" className="h-full pointer-events-none"/>
                </div>
                <MoveContainer />
            </div>
        </div>
    </>
    );
}