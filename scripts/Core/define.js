var core = {};

;(function(core){
  /**
  * Function to use in inheritance process
  * 
  * @param prototype
  */
  function inhert(proto) {
    function F() {}
    F.prototype = proto;
    
    return new F;
  }

  /**
  * Function to create a constructor
  * with arbitrary inheritance
  * 
  * @param {Function} base
  * @param {Function} constructor
  * @param {Object} prototype
  */
  core.define = function (base, constructor, prototype) {
    if (base) {
      constructor.prototype = inhert(base.prototype);
      constructor.prototype.constructor = constructor;
    }
    
    for (var i in prototype) {
      constructor.prototype[i] = prototype[i];
    }
    
    return constructor;
  }
})(core);
