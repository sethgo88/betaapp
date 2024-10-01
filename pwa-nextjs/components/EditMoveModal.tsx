"use client"
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { IsOpenEditMoveModal, MoveList, tempMovePositionAtom,  } from "./ImageContainer";
import { Button } from "./atoms/Button";
import { v4 as uuidV4 } from "uuid";

export const EditMoveModal = () => {
    const [activeMove, setActiveMove] = useAtom(IsOpenEditMoveModal)
    const [moveList, setMoveList] = useAtom(MoveList);
    console.log(activeMove)
    if(activeMove.length < 1) return;

    const handleUpdate = () => {
        handleClose();
    }
     
    const handleDelete = () => {
        setMoveList(moveList.filter(move => move.id !== activeMove))
        handleClose();
    }

    const handleClose = () => {
        setActiveMove('');
    }

    return (
        <div className="absolute flex flex-col justify-between p-3 w-[calc(100dvw-24px)] h-[calc(100dvh-24px)] top-3 left-3 rounded-lg bg-gray-900 text-white">
            <div className="flex-1">
                
            </div>
            <div className="flex gap-x-2 justify-end">
                <Button onClick={handleClose} as="button">Cancel</Button>
                <Button onClick={handleDelete} as="button">Delete</Button> 
                <Button onClick={handleUpdate} as="button">Add</Button>
            </div>
        </div>
    ) 
}