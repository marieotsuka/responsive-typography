var slideshow = remark.create({
  ratio: "16:9"
});

const linkList = document.getElementsByTagName('a');
linkList.forEach( link => link.setAttribute('target', '_blank') );