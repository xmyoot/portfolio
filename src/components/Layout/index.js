import './index.scss'
import Sidebar from '../Sidebar'
import Outlet from '../Outlet'
const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="page">
      <span className="tags top-tags top-tag-html">&lt;/html&gt;</span>
      <br />
        <span className="tags top-tags">&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  )
}

export default Layout
