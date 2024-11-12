import type {JSX, SetStateAction} from "react";
import {useCallback, useState} from "react";
import {pdfjs, Document, Page} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

import styles from "./style.module.css";
import React from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
// 'pdfjs-dist/legacy/build/pdf.worker.min.mjs',
"pdfjs-dist/build/pdf.worker.min.mjs",
import.meta.url
).toString();

const options = {
cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
standardFontDataUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/standard_fonts`,
};

type PDFFile = string | File | null;

interface PdfEmbedProps {
src: PDFFile;
}

export default function PdfEmbed({src}: PdfEmbedProps): JSX.Element {
const [numPages, setNumPages] = useState<number>();
const [pageNumber, setPageNumber] = useState(1);
const [searchText, setSearchText] = useState("");

function onDocumentLoadSuccess({numPages}) {
setNumPages(numPages);
setPageNumber(1);
}

function highlightPattern(text: string, pattern: string) {
return text.replace(pattern, (value) => `<mark>${value}</mark>`);
}

function changePage(offset: number) {
setPageNumber((prevPageNumber) => prevPageNumber + offset);
}

function onItemClick({pageNumber: itemPageNumber}) {
setPageNumber(itemPageNumber);
}

function previousPage() {
changePage(-1);
}

function nextPage() {
changePage(1);
}

const textRenderer = useCallback(
(textItem: {str: string;}) => highlightPattern(textItem.str, searchText),
[searchText]
);

function onChange(event: {target: {value: SetStateAction<string>;};}): void {
setSearchText(event.target.value);
}

return (
<div className={styles.container}>
<Document
    file={src}
    onLoadSuccess={onDocumentLoadSuccess}
    options={options}
>
    <div className={styles.documentViewer}>
       {/* <Outline onItemClick={onItemClick}/> */}
        <Page
            pageNumber={pageNumber}
            customTextRenderer={textRenderer}
        />
    </div>
</Document>
<div className={styles.pageControls}>
    <button
        disabled={pageNumber <= 1}
        onClick={previousPage}
        type="button"
    >
        ‹
    </button>
    <span>
                {pageNumber} / {numPages}
            </span>
    <button
        disabled={pageNumber >= numPages}
        onClick={nextPage}
        type="button"
    >
        ›
    </button>
</div>
 
 
</div> 

);
}