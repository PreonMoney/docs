import type { JSX, SetStateAction } from "react";
import { useCallback, useState, useEffect, useRef } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import styles from "./style.module.css";
import React from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

const options = {
  cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
  standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
};

type PDFFile = string | File | null;

interface PdfEmbedProps {
  src: PDFFile;
}

export function PdfEmbedWrapper({ src }) {
  return (
    <BrowserOnly fallback={<div>Loading PDF...</div>}>
      {() => {
        // Dynamically import PdfEmbed to ensure it's only loaded on the client
        const PdfEmbed = require("./index.tsx").default;
        return <PdfEmbed src={src} />;
      }}
    </BrowserOnly>
  );
}

export default function PdfEmbed({ src }: PdfEmbedProps): JSX.Element {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [pageDimensions, setPageDimensions] = useState<{ width: number; height: number }>({
    width: 600, // Default width
    height: 800, // Default height
  });
  const containerRef = useRef<HTMLDivElement>(null);
  const pdfWrapperRef = useRef<HTMLDivElement>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function highlightPattern(text: string, pattern: string) {
    if (!pattern) return text;
    const regex = new RegExp(`(${pattern})`, "gi");
    return text.replace(regex, (value) => `<mark>${value}</mark>`);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function onItemClick({ pageNumber: itemPageNumber }: { pageNumber: number }) {
    setPageNumber(itemPageNumber);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const textRenderer = useCallback((textItem: { str: string }) => highlightPattern(textItem.str, searchText), [searchText]);

  function onChange(event: { target: { value: SetStateAction<string> } }): void {
    setSearchText(event.target.value);
  }

  // Update page dimensions based on container size and viewport height while maintaining aspect ratio and max height of 80vh
  useEffect(() => {
    function updateDimensions() {
      if (pdfWrapperRef.current) {
        const containerWidth = pdfWrapperRef.current.clientWidth;
        const viewportHeight = window.innerHeight * 0.8; // 80% of viewport height
        const aspectRatio = 1.414; // A4 aspect ratio ~1:1.414

        // Calculate height based on container width and aspect ratio
        let calculatedHeight = containerWidth * aspectRatio;

        // If calculated height exceeds 80vh, adjust width accordingly
        if (calculatedHeight > viewportHeight) {
          calculatedHeight = viewportHeight;
        }

        // Calculate width based on the possibly adjusted height
        const finalWidth = calculatedHeight / aspectRatio;

        setPageDimensions({
          width: finalWidth,
          height: calculatedHeight,
        });
      }
    }

    // Initial dimension calculation
    updateDimensions();

    // Update dimensions on window resize and orientation change
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("orientationchange", updateDimensions);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("orientationchange", updateDimensions);
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.pdfWrapper} ref={pdfWrapperRef}>
        <Document file={src} onLoadSuccess={onDocumentLoadSuccess} options={options} loading={<div>Loading PDF...</div>} className={styles.document}>
          <div className={styles.documentViewer}>
            {/* <Outline onItemClick={onItemClick}/> */}
            <Page
              pageNumber={pageNumber}
              customTextRenderer={textRenderer}
              width={pageDimensions.width}
              height={pageDimensions.height}
              loading={<div>Loading Page...</div>}
            />
          </div>
        </Document>
      </div>
      <div className={styles.pageControls}>
        <button disabled={pageNumber <= 1} onClick={previousPage} type='button' aria-label='Previous Page'>
          ‹
        </button>
        <span>
          {pageNumber} / {numPages}
        </span>
        <button disabled={pageNumber >= numPages} onClick={nextPage} type='button' aria-label='Next Page'>
          ›
        </button>
      </div>
    </div>
  );
}
