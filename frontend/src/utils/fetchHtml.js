export async function fetchHtmlAsText(url) {
    const response = await fetch(url);
    return await response.text();
  }
  