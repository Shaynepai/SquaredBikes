import { Outlet } from "react-router-dom"
import PageHeader from "./PageHeader"

export default function LoginPageLayout() {
  return (
   <>
    <div>
        <PageHeader />
        <Outlet />
    </div>
   </>
  )
}
