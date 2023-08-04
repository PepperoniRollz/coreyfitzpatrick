import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";

const DownloadPDF = () => {
  return (
    <div>
      <div>
        <PictureAsPdfIcon sx={{ fontSize: 25 }} />
        <a href="/pdfs/CoreyFitzpatrickResume.pdf" download>
          Download my resume! (Totally not a virus!)
        </a>
      </div>
    </div>
  );
};

export default DownloadPDF;
