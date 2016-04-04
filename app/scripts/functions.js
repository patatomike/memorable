/* jshint ignore:start */

//set the color of a html element based on the colors's analysis of an image
function setElementColorsImages(url, elements, color, style){
  var img = document.createElement('img');
  img.setAttribute('src', url)
  img.addEventListener('load', function() {
      var vibrant = new Vibrant(img);
      var swatches = vibrant.swatches()
      var objects = [];
      for (var swatch in swatches) {
          if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
              console.log(swatch, swatches[swatch].getHex())
              objects.push(swatches[swatch].getHex());

          }
      }
      for (index = 0; index < elements.length; ++index) {
          // document.getElementById("test").style.color = objects[color];
          var collect = document.getElementsByClassName(elements[index]);
          console.log(collect);
          changeColor(collect, objects[color], style);
      }

      // console.log(objects);
      //  Results into: * Vibrant #7a4426  * Muted #7b9eae * DarkVibrant #348945 * DarkMuted #141414 * LightVibrant #f3ccb4
      //  document.getElementById('blockquote').style.color = '#7a4426';
  });
}

function changeColor(coll, color, style){

    for(var i=0, len=coll.length; i<len; i++)
    {
        coll[i].style[style] = color;
    }
}

//return an array of objects according to key, value, or key and value matching
function getObjects(obj, key, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getObjects(obj[i], key, val));
        } else
        //if key matches and value matches or if key matches and value is not passed (eliminating the case where key matches but passed value does not)
        if (i == key && obj[i] == val || i == key && val == '') { //
            objects.push(obj);
        } else if (obj[i] == val && key == ''){
            //only add if the object is not already in the array
            if (objects.lastIndexOf(obj) == -1){
                objects.push(obj);
            }
        }
    }
    return objects;
}

//return an array of values that match on a certain key
function getValues(obj, key) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getValues(obj[i], key));
        } else if (i == key) {
            objects.push(obj[i]);
        }
    }
    return objects;
}

//return an array of keys that match on a certain value
function getKeys(obj, val) {
    var objects = [];
    for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
            objects = objects.concat(getKeys(obj[i], val));
        } else if (obj[i] == val) {
            objects.push(i);
        }
    }
    return objects;
}

/* jshint ignore:end */
