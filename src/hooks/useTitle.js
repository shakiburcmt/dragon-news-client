import { useEffect } from "react"

const useTitle = title => {
    // external jinis gulo use korar jonnow useEffect use hoy
    useEffect(() => {
        document.title = `${title} - dragon news`;
    },[title])
}

export default useTitle;