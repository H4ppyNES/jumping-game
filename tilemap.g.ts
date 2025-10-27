// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`0a0008000108080808080808080900000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000405060000070000070001030303030303030302`, img`
2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.forestTiles1,sprites.builtin.forestTiles3,sprites.builtin.forestTiles2,sprites.swamp.swampTile0,sprites.swamp.swampTile1,sprites.swamp.swampTile2,sprites.swamp.swampTile3,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
