let circle;
let triangle;
let square;



describe( "Polygon", () => {
  beforeEach( () => {
    polygon = new Polygon( [ 5, 5, 5 ] )
  } )

  it( "has a Polygon class", () => {
    expect( Polygon ).to.exist
  } )

  it( "Polygon has a countSides getter method that returns the number of sides of the polygon", () => {
    expect( polygon.countSides ).to.eq( 3 )
  } )

  it( "Polygon has a perimeter getter that calculates perimeter", () => {
    expect( polygon.perimeter ).to.eq( 15 )
  } )
} )

describe( "Triangle", () => {
  let triangle
  let triangle2
  it( "has a Triangle class", () => {
    expect( Triangle ).to.exist
  } )

  
  
} )


describe( "Square", () => {
  it( "has a Square class", () => {
    expect( Square ).to.exist
  } )

  it( "has a perimeter getter inherited from Polygon", () => {
    let square = new Square( [ 5, 5, 5, 5 ] )

    expect( square.perimeter ).to.eq( 20 )
  } )

  it( "calculates the area", () => {
    let square = new Square( [ 5, 5, 5, 5 ] )

    expect( square.area ).to.eq( 25 )
  } )

 
} )
