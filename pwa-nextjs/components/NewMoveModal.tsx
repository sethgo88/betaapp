"use client"
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { IsOpenNewMoveModal, MoveList, tempMovePositionAtom,  } from "./ImageContainer";
import { Button } from "./atoms/Button";
import { v4 as uuidV4 } from "uuid";

export const NewMoveModal = () => {
    const [isOpen, setIsOpen] = useAtom(IsOpenNewMoveModal)
    const movePosition = useAtomValue(tempMovePositionAtom);
    const [moveList, setMoveList] = useAtom(MoveList);
    if(!isOpen) return;

    const handleAdd = () => {
        if(moveList){
            setMoveList([...moveList, {id: uuidV4(), type: 'lh', description: "description", position: movePosition!}])
        } else {
            setMoveList([{id: uuidV4(), type: 'lh', description: "description", position: movePosition!}])
        }
        handleClose();
    }
     
    const handleDelete = () => {
        handleClose();
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    return (
        <div className="absolute flex flex-col justify-between p-3 w-[calc(100dvw-24px)] h-[calc(100dvh-24px)] top-3 left-3 rounded-lg bg-gray-900 text-white">
            <div className="flex-1">
                
            </div>
            <div className="flex gap-x-2 justify-end">
                <Button onClick={handleClose} as="button">Cancel</Button>
                {/* <Button onClick={handleDelete} as="button">Delete</Button> */}
                <Button onClick={handleAdd} as="button">Add</Button>
            </div>
        </div>
    ) 
}