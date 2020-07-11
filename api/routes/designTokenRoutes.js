module.exports = function(app) {
    var designToken = require('../controllers/designTokenController');
  
    // designToken Routes
    app.route('/styles')
      .get(designToken.list_all_styles)
      .post(designToken.create_a_style);
  
  
    app.route('/styles/:stylesId')
      .get(designToken.read_a_style)
      .put(designToken.update_a_style)
      .delete(designToken.delete_a_style);
  };