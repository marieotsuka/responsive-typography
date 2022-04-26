var slideshow = remark.create({
  ratio: "16:9"
});

var linkList = document.getElementsByTagName('a');

for(var i in linkList){
 linkList[i].setAttribute('target', '_blank');
}