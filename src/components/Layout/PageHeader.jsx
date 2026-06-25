import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function PageHeader({ title, subtitle, backTo, backLabel }) {
  const navigate = useNavigate();

  return (
    <div className="page-header">
      {backTo && (
        <button
          className="page-header-back"
          onClick={() => navigate(backTo)}
          aria-label={`Back to ${backLabel || "previous page"}`}
        >
          <ArrowLeft size={16} strokeWidth={2} />
          <span>{backLabel || "Back"}</span>
        </button>
      )}
      {title && <h1 className="page-header-title">{title}</h1>}
      {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
    </div>
  );
}

export default PageHeader;
