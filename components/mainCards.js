import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Card from './card'

const MainCards = () => {
    const { death, confirmed, recovered } = useContext(GlobalContext)
    return (
        <>
            <Card
              title="Vaka 😷"
              value={confirmed}
              type="confirmed"
            />

            <Card
              title="Ölüm ☠️"
              value={death}
              type="death"
            />

            <Card
              title="İyileşen 🏃"
              value={recovered}
              type="recovered"
            />
        </>
    )
}

export default MainCards