class Point {
    /**
     * Create a point.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        this.x = x;
		this.y = y;
    }

    /**
     * Get the x value.
     * @return {number} The x value.
     */
    getX() {
        return this.x;
    }

    /**
     * Get the y value.
     * @return {number} The y value.
     */
    getY() {
        return this.y;
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */
    toString() {
        return '(' + this.x + ',' + this.y + ')';
    }
    
    static doubledPoint(x,y) {
        return new Point(x*2, y*2);
    }
}

function printPoint()
{
    var somePoint = new Point(7,4);
    alert(somePoint.toString());
}

function printPoint2()
{
    var somePoint = Point.doubledPoint(7,4);
    alert(somePoint.toString());
}

/**
 * Class representing a dot.
 * @extends Point
 */
class Dot extends Point {
    /**
     * Create a dot.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} width - The width of the dot, in pixels.
     */
    constructor(x, y, width) {
        super(x,y);
        this.width = width;
    }

    /**
     * Get the dot's width.
     * @return {number} The dot's width, in pixels.
     */
    getWidth() {
        return this.width
    }
}

function printDot()
{
    var someDot = new Dot(100,100,4);
    alert('x: ' + someDot.getX() + ' y: ' + someDot.getY() + ' width: ' + someDot.getWidth());
}


////////////////////////////////////////////////////////////
// Boilerplate code to wire button when DOM content is ready
// and run method when button is clicked
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function setup()
{
  document.getElementById('runCode1').addEventListener('click', printPoint, false);
  document.getElementById('runCode2').addEventListener('click', printPoint2, false);
  document.getElementById('runCode3').addEventListener('click', printDot, false);
}

ready(setup);
