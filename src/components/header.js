import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header>
    <div>
      <div className="flex justify-between items-center mt-10">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-medium md:font-normal leading-none">
          <Link to="/">Chris Cooper</Link>
        </h1>
        <div className="lg:hidden">
          <button type="button">
            <svg
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
            >
              <path
                d="M2 6H22V7H2V6ZM2 12H22V13H2V12ZM22 18H2V19H22V18Z"
                class="fill-current text-gray-900"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </header>
)

export default Header

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }
{
  /* <header
style={{
  background: `rebeccapurple`,
  marginBottom: `1.45rem`,
}}
>
<div
  style={{
    margin: `0 auto`,
    maxWidth: 960,
    padding: `1.45rem 1.0875rem`,
  }}
>
  <h1 style={{ margin: 0 }}>
    <Link
      to="/"
      style={{
        color: `white`,
        textDecoration: `none`,
      }}
    >
      {siteTitle}
    </Link>
  </h1>
</div> */
}
