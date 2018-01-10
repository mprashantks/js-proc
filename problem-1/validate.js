// Required function to throw an error in case of no argument and return value when argument is present
// Included an additional try-catch block for better approach
function validate (value) {
  try {
    if (value === undefined)
      throw new Error('No arguments');
    return value;
  } catch (e) {
    console.log(e.message);
  }
}

// Test validate() function
$(document).on('click', '#validate-button', function () {
  var value = $('#value').val();
  if (value === '')
    value = undefined;

  console.log(validate(value));
});
