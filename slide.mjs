
import fs from 'fs';
import chokidar from 'chokidar';

//================================================================================================
//watch対象ディレクトリorファイル 	//無視する対象 	//監視を継続するかどうか
chokidar.watch('./*.md', { ignored: /[\/\\]\./, persistent: true } )
    .on('ready', ready)
    .on('add', path => add(path, false)).on('unlink', path => add(path, false))
    .on('addDir', path => add(path, true)).on('unlinkDir', path => add(path, true))
    .on('change', path => fix(path)).on('error', err  => error(err))
//================================================================================================
/* ファイルのコピー */
function slideCopy() {
    fs.copyFile('slide.md', 'reveal.js/1.md', (err) => console.log( err ? err.stack : 'Copy Done.') );
}
function ready() {
    console.log("==== [監視開始] ====");
}
function add(path, dir = false) {
    console.log( dir ? `追加ディレクトリ -> ${path}` : `追加ファイル -> ${path}`);
}
function del(path, dir = false) {
    console.log( dir ? `削除ディレクトリ -> ${path}` : `削除ファイル -> ${path}`);
}
function fix(path) {
    console.log(`修正ファイル -> ${path}`);
    slideCopy();
}
function error(err) {
    console.log(`エラー -> ${err}`);
}