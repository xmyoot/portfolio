import './index.scss'
import Sidebar from '../Sidebar'
import Home from '../Home'
const Layout = () => {
  return (
    <>
      <Sidebar />
      <div className="page">
        <span className="tags top-tags top-tag-html">&lt;html&gt;</span>
        <br />
        <span className="tags top-tags">&lt;body&gt;</span>
        {/* <Home /> */}
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
