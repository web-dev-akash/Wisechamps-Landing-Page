import ProtoTypes from "prop-types";

function BlogCard({ blog, className }) {
  const { img, date, comment, title, link } = blog;
  return (
    <div className={className ? className : "col-lg-4 col-md-6"}>
      <div className="post-item-1">
        <img src={img} alt="" />
        <div className="b-post-details">
          <div className="bp-meta">
            <a href="#">
              <i className="icon_clock_alt"></i>
              {date}
            </a>
            <a href="#">
              <i className="icon_chat_alt"></i>
              {comment} Comments
            </a>
          </div>
          <h3>
            <a href={link}>{title}</a>
          </h3>
          <a className="read-more" href={link}>
            Read More<i className="arrow_right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  blog: ProtoTypes.object,
  className: ProtoTypes.string,
};

export default BlogCard;
