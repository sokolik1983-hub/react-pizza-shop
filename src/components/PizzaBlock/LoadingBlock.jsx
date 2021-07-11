import ContentLoader from "react-content-loader";

function LoadingBlock() {
    return   (<ContentLoader
        speed={2}
        width={280}
        height={460}
        viewBox="0 0 280 460"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="130" cy="130" r="130" />
        <rect x="0" y="287" rx="0" ry="0" width="260" height="20" />
        <rect x="0" y="322" rx="0" ry="0" width="260" height="60" />
        <rect x="5" y="397" rx="0" ry="0" width="102" height="40" />
        <rect x="123" y="399" rx="0" ry="0" width="137" height="39" />
    </ContentLoader>)
}

export default LoadingBlock;