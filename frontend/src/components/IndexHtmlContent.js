import React, { useEffect, useState } from 'react';
import { fetchHtmlAsText } from '../utils/fetchHtml';

function IndexHtmlContent() {
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    async function loadHtml() {
      const html = await fetchHtmlAsText('/index.html');
      setHtmlContent(html);
    }
    loadHtml();
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default IndexHtmlContent;
