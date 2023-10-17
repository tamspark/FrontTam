import React from 'react';
import { Button } from 'App/style/App.style';

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
      
      <Button
                h="40px"
                w="100%"
                variant="primary"
                onClick={()=>{handleDownload(pdf)}}
                borderradius="20px"
                fontSize="17px"
              >
                Download
              </Button>
    </div>
  );
};

export default DownloadPDF;
