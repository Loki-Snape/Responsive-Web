function convertMarkdown() {
    const input = document.getElementById('markdown-input').value;
    let html = input;

    html = html.replace(/^\s*### (.*$)/gm, '<h3>$1</h3>');
    html = html.replace(/^\s*## (.*$)/gm, '<h2>$1</h2>');
    html = html.replace(/^\s*# (.*$)/gm, '<h1>$1</h1>');

    html = html.replace(/^\s*> (.*$)/gm, '<blockquote>$1</blockquote>');

    html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    html = html.replace(/__(.*?)__/g, '<strong>$1</strong>');

    html = html.replace(/\*(.*?)\*/g, '<em>$1</em>');
    html = html.replace(/_(.*?)_/g, '<em>$1</em>');

    html = html.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

    html = html.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

    html = html.replace(/[\r\n]/g, '');

    return html;
}

document.addEventListener('DOMContentLoaded', () => {
    const markdownInput = document.getElementById('markdown-input');
    const htmlOutput = document.getElementById('html-output');
    const preview = document.getElementById('preview');

    if (markdownInput) {
        markdownInput.addEventListener('input', () => {
            const rawHTML = convertMarkdown();
            htmlOutput.textContent = rawHTML;
            preview.innerHTML = rawHTML;
        });
    }
});