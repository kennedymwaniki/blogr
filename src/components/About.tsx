import editor from "../assets/images/illustration-editor-desktop.svg";

const About = () => {
  return (
    <>
      <h2 className="head">Design for the Future</h2>
      <div className="about">
        <div className="content">
          <div className="editor">
            <h5 className="heading">Introducing an extensible editor</h5>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="editor">
            <h3 className="heading">Introducing an extensible editor</h3>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
        <div>
          <img src={editor} alt="" className="ide" />
        </div>
      </div>
    </>
  );
};

export default About;
