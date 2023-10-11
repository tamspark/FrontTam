import React from 'react';


const DownloadPDF = () => {


const pdf='/Redis.pdf'


  const handleDownload = (url:any) => {
   const fileName=url.split("/").pop();
   const aTag=document.createElement("a");
   aTag.href=url;
   aTag.setAttribute("download",fileName);
   document.body.appendChild(aTag);
   aTag.click();
   aTag.remove();
  };

  return (
    <div>
      <p>Click the button below to download the PDF:</p>
      <button onClick={()=>{handleDownload(pdf)}}>Download PDF</button>
    </div>
  );
};

export default DownloadPDF;
