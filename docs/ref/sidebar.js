$(function() {
  $.getJSON('https://raw.githubusercontent.com/pomelio/roomd/main/docs/ref/side_bar.json', (data, status) => {
    let title = data.title;
    let sections = data.sections;
    let href = window.location.href;
    let sectionEles = sections.map(s => {
      if (!href.endsWith(s.md)) {
        return '<li>' + s.title + '</li'>;
      } else {
        return '<li class="current">' + s.title + '</li'>;
      }
    });
    let html = '<div class="sections"><h2>' + title +'</h2><ul>' + sectionEles.join('') + '</ul></div>';
    $('#sidebar').html(html);
  });
});
