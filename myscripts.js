function myFunction() {
    var link = document.createElement('a');
link.href = "Hoàng Minh Trí - Back-end Developer.pdf";
link.download = 'Hoàng Minh Trí - Back-end Developer.pdf';
link.dispatchEvent(new MouseEvent('click'));
  }