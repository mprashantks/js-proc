// List to store all selected options from box1 i.e., leftbox
var li_items_leftbox = [];
// List to store all selected options from box2 i.e., rightbox
var li_items_rightbox = [];

// Event listener to change colour of hovering list item
$(document).on('mouseenter', 'li', function() {
  $(this).toggleClass('liHover');
});

$(document).on('mouseleave', 'li', function() {
  $(this).toggleClass('liHover');
});

// Event listener to select list item from leftbox and insert that item into li_items_leftbox
$(document).on('click', '#uItemLeft li', function() {
  $(this).toggleClass('liSelected');

  var text = $(this).text();
  if (li_items_leftbox.includes(text)) {
    // POP
    li_items_leftbox.splice(li_items_leftbox.indexOf(text), 1);
  } else {
    li_items_leftbox.push(text);
  }
  // console.log(li_items_leftbox);
  // console.log(li_items_rightbox);
});

// Event listener to select list item from rightbox and insert that item into li_items_rightbox
$(document).on('click', '#uItemRight li', function() {
  $(this).toggleClass('liSelected');

  var text = $(this).text();
  if (li_items_rightbox.includes(text)) {
    // POP
    li_items_rightbox.splice(li_items_rightbox.indexOf(text), 1);
  } else {
    li_items_rightbox.push(text);
  }
  // console.log(li_items_leftbox);
  // console.log(li_items_rightbox);
});

// Event listener to perform move operation when move-right button is clicked
$(document).on('click', '#move-right', function () {
  li_items_leftbox.forEach(function (element) {
    $('#uItemRight').append('<li>'+element+'</li>');
    $('#uItemLeft li').filter(function () {return $(this).text() === element; }).remove();
  });
  li_items_leftbox = [];
});

// Event listener to perform move operation when move-left button is clicked
$(document).on('click', '#move-left', function () {
  li_items_rightbox.forEach(function (element) {
    $('#uItemLeft').append('<li>'+element+'</li>');
    $('#uItemRight li').filter(function () {return $(this).text() === element; }).remove();
  });
  li_items_rightbox = [];
});
