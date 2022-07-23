const url = 'http://site.ru';

const tagGen = (link) => {
  const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
  return link.replace(urlRegex, function (url) {
    const hyperlink = url;
    if (!hyperlink.match('^https?:\/\/')) {
      hyperlink = 'http://' + hyperlink;
    }
    return '<a href="' + hyperlink + '">' + url.replace(/^https?:\/\//, '') + '</a>'
  });
}
console.log(tagGen(url));
