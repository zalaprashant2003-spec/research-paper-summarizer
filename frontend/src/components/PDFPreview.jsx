import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PDFPreview({ file }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">
        PDF Preview
      </h2>

      <Document
        file={file}
        loading="Loading PDF..."
        error="PDF Preview Failed"
      >
        <Page pageNumber={1} width={600} />
      </Document>
    </div>
  );
}

export default PDFPreview;