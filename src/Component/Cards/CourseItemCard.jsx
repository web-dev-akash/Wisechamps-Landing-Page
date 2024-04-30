import ProtoTypes from "prop-types";

function CourseItemCard({ title, children }) {
  return (
    <div className="course-item-1 text-center">
      {children}
      <h4>{title}</h4>
    </div>
  );
}

CourseItemCard.propTypes = {
  title: ProtoTypes.string,
  children: ProtoTypes.oneOfType([
    ProtoTypes.arrayOf(ProtoTypes.node),
    ProtoTypes.node,
  ]),
};

export default CourseItemCard;
