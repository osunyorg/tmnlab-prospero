function SectionContainer(element) {
  this.element = element;
  this.categories = this.element.querySelectorAll('ul > li');

  this.listen();
}

SectionContainer.prototype.listen = function() {
  this.categories.forEach(function (category) {
    var linkValue = category.querySelector('a').href;
    this.getClassName(linkValue);
    this.setClassName(category, this.className);
  }.bind(this));
};

SectionContainer.prototype.getClassName = function(url) {
  var splittedUrl = url.split("/");
  this.className = splittedUrl[splittedUrl.length - 1] || splittedUrl[splittedUrl.length - 2];
};

SectionContainer.prototype.setClassName = function(category, name) {
  category.classList.add(name);
};

(function () {
  var sectionsContainers = document.querySelectorAll('.navigation-taxonomies');
  sectionsContainers.forEach(function (section) {
      new SectionContainer(section);
  });
}());
