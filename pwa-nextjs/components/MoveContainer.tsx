import { useAtomValue, useSetAtom } from "jotai"
import { IsOpenEditMoveModal, MoveList } from "./ImageContainer"

export const MoveContainer = () => {
    const moves = useAtomValue(MoveList)
    const setActiveMove = useSetAtom(IsOpenEditMoveModal)
    if(!moves) return;
    const handleClick = (id: string) => {
        setActiveMove(id);
    }
    return (
        <>
            <ul>
                {moves.map((move) => (
                    <li className="text-white absolute text-sm uppercase border-2 border-white p-1 rounded-full rounded-tl-none bg-black/40" style={{left: `${move.position.x}px`, top: `${move.position.y}px`}} key={move.id} onClick={() => handleClick(move.id)}>{move.type}</li>
                ))}
            </ul>
        </>
    )
}