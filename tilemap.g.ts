// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const hyetile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const hyetile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const hyetile4 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "级别1":
            case "级别1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202020202010202020202020202020202020202020202020202020201020202020202020202020201020202020202020202020202020202020202020202020202020202020202020202020202020102020202020102020201020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202010202020202020202020201020202020202020202020202020202020202020202020202020202020102020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "hyetile2":return hyetile2;
            case "hyetile3":return hyetile3;
            case "hyetile4":return hyetile4;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
