## Sekilas mengenai NodeJS

### Apa itu NodeJS:

NodeJs adalah sebuah open source, cross-platform yg awalnya dibuat untuk aplikasi server-side dan networking.
Aplikasi NodeJS menggunakan bahasa Javascript, dan dapat dijalankan diatas NodeJS dalam OS X, Linux dan Windows.
Mengapa dalam workshop kali ini kita menggunakan Mac OSX, karena dalam Windows mempunyai batas max. untuk panjang direktori yaitu 256 karakter. Jadi untuk menggunakan NodeJS secara efisien disarankan memakai OS Linux atau Mac OSX.

### Pengaplikasi-annya:

Dalam masa sekarang NodeJS telah dipakai secara luas dan menyuluruh. Tidak hanya untuk perangkat lunak server-side dan networking, tetapi juga dipakai untuk client-side (front-end dev.) dan aplikasi desktop.

### NPM

Aplikasi2 NodeJS yg telah dibuat dan di publish disebut Node Package. Dan perangkat untuk mengelola package2 ini disebut NPM (Node Package Manager).

## Memprogram di NodeJS
- example-1: pengenalan nodejs
- example-2:
	- npm install colors (https://www.npmjs.com/package/colors)
		- semua node package yg terinstall berada di bawah direktori node_modules
	- npm init (enter)
		- terbuat package.json
	- npm install colors better-say upsidedown --save
	- rm -r node_modules
	- npm install
## Nguprek AngularJS
- example-1: Membuat Todo App dengan JS dan JQuery
	- coding html (css sudah dipersiapkan terlebih dahulu)
	- add todo
	- complete todo
	- remove todo
- example-2: Membuat Todo App dengan AngularJS
	- Pengenalan Object (AngularJS lebih ke pemrosesan data drpd peng-operasian DOM-Document Object Model)
	- ng-app, ng-controller, ng-repeat
- example-3: ngRoute vs uiRoute
	- memisah js script ke file lain (app.js dan route.js)