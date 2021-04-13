//. app.js
var express = require( 'express' ),
    app = express();

//. ルーティング
app.use( express.Router() );

//. スタティックファイル・フォルダの指定
app.use( express.static( __dirname + '/docs' ) );

//. GET / へのハンドラ
app.get( '/', function( req, res ){
  res.render( 'index', {} );
});

//. 特定ポート番号で待受
var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );
