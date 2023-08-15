import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

import pdf from "../../pdfs/fitzpatrickresume.pdf";
const Resume = () => {
  return (
    <div>
      <div>
        <PictureAsPdfIcon sx={{ fontSize: 25 }} />
        <a href={pdf} download>
          Download my resume! (Totally not a virus!)
        </a>
      </div>
    </div>
  );
};

export default Resume;
