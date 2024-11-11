import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <br />
      <p>Click on the test you need</p>
      <p>to perform to get started.</p>
      <br />
      <p>Enter the number of pos-</p>
      <p>itive wells in the sample.</p>
      <br />
      <p>Most Probable Number</p>
      <p>is displayed.</p>
      <br />
      <Link
        style={{ color: "lightblue" }}
        href="https://www.npmjs.com/package/mpn-lookup"
      >
        click here for more info
      </Link>
    </div>
  );
};
export default About;
