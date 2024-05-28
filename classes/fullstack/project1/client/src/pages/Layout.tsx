import { Outlet } from "react-router-dom"
import Title, { TitleSize } from "../components/Title/Title"

function Layout() {
  return (
    <div>
      <Title size={TitleSize.H1} text={"Builds dashbort"} />
      <div className="pt-10">
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout
