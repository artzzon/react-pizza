import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="137" cy="124" r="116" />
    <rect x="13" y="251" rx="10" ry="10" width="243" height="33" />
    <rect x="5" y="401" rx="10" ry="10" width="98" height="53" />
    <rect x="126" y="394" rx="34" ry="34" width="152" height="65" />
    <rect x="1" y="302" rx="10" ry="10" width="276" height="77" />
  </ContentLoader>
);

export default MyLoader;
