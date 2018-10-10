/**
 * Validation Javascript
 *
 * Required Files : jQuery.js
 *
 * Supported HTML Tags : input (type=text), input (type=date), input (type=email), input (type=number), input (type=password), textarea, select
 *
 * 1. To use this javascript, insert class name "f-validate" to html tag in which you want to apply validations
 * 2. Add new attribute as "validate" to input or select tags on which you want to apply validations
 * 3. Change global variable "invalid_msg" if you want another default message
 * 4. In case, if you want to add custom message to some input or select tag, add new attribute as "invalid-text" and give message in that attribute.
 * 
 * NOTE: If you want fancy box for error message, add new class name "f-validate-popover" to html tag in which you want to apply validations along with "f-validate"
 * 
 * Author : GhanaShyam Chaudhari
 * 
 */
var GValidate;
var GCV;

!function() {
	var n;
  var o;
  var g;
  var m;
  GCV = function(){
    this.init();
  }, m = GCV, m.prototype = {
    init: function() {
      g = jQuery.gcv;
    },

    checkValidate: function(t, e) {
      var _f = false;
      var $t = jQuery(t);
      var $gvalidatemaster = $t.parents("[data-gvalidatemaster]:first");
      $gvalidatemaster.find("input[type='text']:not([no-validate]), input[type='date']:not([no-validate]), input[type='email']:not([no-validate]), input[type='number']:not([no-validate]), input[type='password']:not([no-validate]), textarea:not([no-validate]), select:not([no-validate])").each(function() {
        var $ot = jQuery(this);
        var i_f = jQuery.gcv.addFvalidateError($ot);
        if(!_f) _f = i_f;
      });
      if(_f) {
        $gvalidatemaster.find("[aria-invalid='true']:first").focus();
        e.preventDefault();
        return false;
      } else {
        return true;
      }
    },

    addFvalidateError: function($this) {
      var val = '';
      var _f = false;
      var val_f = false;
      val = $this.val();
      var email_pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if(!val) {val_f = true;}
      else if($this.attr("type") && $this.attr("type").toLowerCase() === "email" && !email_pattern.test(val)) {val_f = true;}
      if(val_f) {
        $this.attr("aria-invalid", "true");
        if(!$this.next('label.invalidate-lblfield').length && !$this.next('label.invalidate-lblfield-popover').length) {
          var u_msg = $this.attr('invalid-text');
          var msg = o._defaults.defaultMessage;
          if(val && $this.attr("type") && $this.attr("type").toLowerCase() === "email" && !email_pattern.test(val)) {
            msg = o._defaults.defaultEmailMessage;
          }
          if(u_msg) msg = u_msg;
          if($this.parent().css("position") === null || $this.parent().css("position") === "static") {
            $this.parent().css("position", "relative");
          }
          var lbl_top = parseInt($this.css("top"));
          var lbl_left = parseInt($this.css("margin-left")) + parseInt($this.css("left"));
          if(!lbl_top) lbl_top = 0;
          if(!lbl_left) lbl_left = 0;
          var $vlbl = '';
          $f_validate = $this.parents("[data-gvalidatemaster]:first");
          var theme_style = $f_validate.attr("data-gvalidstyle");
          if((typeof theme_style === typeof undefined) || (theme_style === false)) {
            theme_style = o._defaults.theme;
          }
          if(theme_style.toLowerCase() === 'popover') {
            $vlbl = $('<label/>').addClass("invalidate-lblfield-popover").css({
                          "background-color":"#eee",
                          "box-shadow":"0 0 2px #999",
                          "color":"red",
                          "display":"inline-block",
                          "left":(parseInt($this.css("margin-left")) + $this.position().left)+"px",
                          "top":(parseInt($this.css("margin-top")) + $this.position().top + $this.outerHeight() + 8)+"px",
                          "font-size":"12px",
                          "padding":"8px",
                          "position":"absolute",
                          "text-align":"left",
                          "z-index":"9999"});
            $('<i/>').css({
              "border-bottom":"8px solid #eee",
              "border-left":"8px solid transparent",
              "border-right":"8px solid transparent",
              "display":"block",
              "height":"1px",
              "left":"10px",
              "position":"absolute",
              "top":"-9px",
              "width":"1px"
            }).appendTo($vlbl);
          } else {
            var style = o._defaults.style;
            if(o._defaults.style['margin-left'] == "0" || o._defaults.style['margin-left'] == "0px") {
              o._defaults.style['margin-left'] = (lbl_left + 3) + "px";
            }
            if(o._defaults.style['margin-top'] == "0" || o._defaults.style['margin-top'] == "0px") {
              o._defaults.style['margin-top'] = lbl_top + "px";
            }
            $vlbl = $('<label/>').addClass("invalidate-lblfield").css(style);
          }
          $vlbl.on('click', function() {
            $(this).prev().focus();
            $(this).remove();
          })
          $vlbl.append(msg);
          $this.after($vlbl);
        }
        _f = true;
      }
      return _f;
    }
  };
  GValidate = function(){
    this._defaults = {
      defaultMessage: 'Cannot left blank',
      defaultEmailMessage: 'Invalid email address',
      theme: 'simple',
      style: {
        "position":"relative",
        "display":"inline-block",
        "margin-left":"0",
        "margin-top":"0",
        "width":"auto",
        "color":"red",
        "font-size":"12px",
        "margin-bottom":"10px"
      }
    };
	}, n = GValidate, n.prototype = {
    init: function(options) {
      if(('style' in options) && options.style) {
        jQuery.extend(this._defaults.style, options.style);
        delete options.style;
      }
      jQuery.extend(this._defaults, options);
      o = jQuery.gvalidate;
    },

    initValidate: function($this) {
      $this.attr("data-gvalidatemaster", "");
      $this.attr("data-gvalidstyle", this._defaults.theme);
      this.addSubmitEventHandler($this);
      this.removeValidationErrorHandler($this);
    },

    removeValidationErrorHandler: function($this) {
      $this.find("input[type='text']:not([no-validate]), input[type='date']:not([no-validate]), input[type='email']:not([no-validate]), input[type='number']:not([no-validate]), input[type='password']:not([no-validate]), textarea:not([no-validate]), select:not([no-validate])").on("change keypress", function() {
        var $this = jQuery(this);
        $this.attr("aria-invalid", "false");
        $this.next('label').remove();
      });
    },

    addSubmitEventHandler: function($this) {
      $this.find("input[type='button'][validate-submit], input[type='submit'], button[validate-submit]").each(function() {
        var ncli = (jQuery(this).attr("onclick")) ? jQuery(this).attr("onclick") : '';
        if(!ncli.match(/gcv.checkValidate/g)) {
          jQuery(this).attr("onclick", "if(jQuery.gcv.checkValidate(this, event)){"+ncli+"}");
        }
      });
    },
  }
}(window, jQuery),
function() {
	jQuery.fn.GValidate = function(options = {}) {
    jQuery.gvalidate.init(options);
    this.each( function() {
      var $this = jQuery(this);
      jQuery.gvalidate.initValidate($this);
    });
	};
  jQuery.gvalidate = new GValidate();
  jQuery.gcv = new GCV();
}();