import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={280}
        height={466.8}
        viewBox="0 0 280 466.8"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="0" y="261" rx="20" ry="20" width="280" height="88" />
        <circle cx="125" cy="125" r="125" />
        <rect x="13" y="361" rx="0" ry="0" width="91" height="27" />
        <rect x="124" y="361" rx="0" ry="0" width="140" height="46" />
    </ContentLoader>
)

export default Skeleton