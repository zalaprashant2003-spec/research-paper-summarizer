import jsPDF from "jspdf";

export const exportReport = (result) => {

  const doc = new jsPDF();

  doc.setFontSize(18);

  doc.text(
    "Research Paper Analysis",
    20,
    20
  );

  doc.setFontSize(12);

  doc.text(
    result.summary || "",
    20,
    40,
    { maxWidth: 170 }
  );

  doc.save("analysis-report.pdf");
};