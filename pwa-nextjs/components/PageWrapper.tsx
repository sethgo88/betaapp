import { atom } from "jotai"
import { ImageContainer } from "./ImageContainer"
import { ControlContainer } from "./ControlContainer"
import { NewMoveModal } from "./NewMoveModal"
import { EditMoveModal } from "./EditMoveModal"
import { atomWithStorage } from "jotai/utils"

export const ImageList = atomWithStorage("imageList","")
export const PageWrapper = () => {
    return (
      <>
        <ImageContainer />
        <ControlContainer />
        <EditMoveModal />
        <NewMoveModal />
      </>
    )
}