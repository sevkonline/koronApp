import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"
import Card from './card'

const MainCards = () => {
    const { death, confirmed, recovered } = useContext(GlobalContext)
    return (
        <>
            <Card
              title="Toplam Vaka 😷"
              value={confirmed}
              type="confirmed"
            />

            <Card
              title=" Toplam Ölüm ☠️"
              value={death}
              type="death"
            />

            <Card
              title="Toplam İyileşen 🏃"
              value={recovered}
              type="recovered"
            />
        </>
    )
}

export default MainCards