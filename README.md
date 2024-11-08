## Canvas

このリポジトリではJavaScriptでDOM操作を行っています。textarea要素にはJavaScriptのコードがすでに入力されており、最上部にあるプレビュー画面（canvas要素）にその結果が出力されています。コードは自分でも書き換えることができ、元に戻す際には一番下にある【**リセット**】ボタンをクリックすると最初の画面に戻ります。

iframe要素の内容は上から順に以下の通りとなります。
<br>

### 共通設定

#### JavaScript

ブラウザーがcanvas要素に対応していたら、canvas要素内に記述された内容を描画するようにします。

```javascript
if (canvas.getContext) {
    // ここから描画したい内容を記述
}
```

canvas要素内の背景色を`rgb(0, 0, 0)`（黒色）にしてX軸とY軸ともに`10px`の位置から幅`280px`、高さ`130px`の`rgb(255, 255, 255)`（白色）の枠線を`5px`の太さで描画しています。**ベーシック**、**座標変換**で使用しています。

```javascript
if (canvas.getContext) {
    // canvas要素の領域（背景色は黒色）
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 白色の枠線
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, 280, 130);
}
```
<br>

### 基本

[rectangles.html](basic/rectangles.html "basic/rectangles.html")、[paths.html](basic/paths.html "basic/paths.html")、[texts.html](basic/texts.html "basic/texts.html")の組み合わせ

**共通設定**に記述してある`rgb(255, 255, 255)`（白色）の枠線の中に以下のものを順番に描画しています。

`rgb(0, 255, 0)`（緑色）の円弧（線と塗りつぶし）

```javascript
if (canvas.getContext) {
    // 緑色（線）の円弧
    ctx.beginPath();
    ctx.arc(70, 75, 35, 0, Math.PI * 2);
    ctx.strokeStyle = "rgb(0, 255, 0)";
    ctx.stroke();

    // 緑色（塗りつぶし）の円弧
    ctx.beginPath();
    ctx.arc(70, 75, 30, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(0, 255, 0)";
    ctx.fill();
}
```

`rgb(0, 0, 255)`（青色）の三角形（線と塗りつぶし）

```javascript
if (canvas.getContext) {
    // 青色（線）の三角形
    ctx.beginPath();
    ctx.moveTo(150, 45);
    ctx.lineTo(180, 110);
    ctx.lineTo(120, 110);
    ctx.closePath();
    ctx.strokeStyle="rgb(0, 0, 255)";
    ctx.stroke();

    // 青色（塗りつぶし）の三角形
    ctx.beginPath();
    ctx.moveTo(150, 57.5);
    ctx.lineTo(172.5, 105);
    ctx.lineTo(127.5, 105);
    ctx.closePath();
    ctx.fillStyle="rgb(0, 0, 255)";
    ctx.fill();
}
```

`rgb(255, 0, 255)`（紫色）の矩形（線と塗りつぶし）

```javascript
if (canvas.getContext) {
    // 紫色（線）の矩形
    ctx.beginPath();
    ctx.moveTo(200, 45);
    ctx.lineTo(200, 110);
    ctx.lineTo(260, 110);
    ctx.lineTo(260, 45);
    ctx.closePath();
    ctx.strokeStyle = "rgb(255, 0, 255)";
    ctx.stroke();

    // 紫色（塗りつぶし）の矩形
    ctx.beginPath();
    ctx.moveTo(205, 50);
    ctx.lineTo(205, 105);
    ctx.lineTo(255, 105);
    ctx.lineTo(255, 50);
    ctx.closePath();
    ctx.fillStyle = "rgb(255, 0, 255)";
    ctx.fill();
}
```

`rgb(255, 255, 255)`（白色）のテキスト（`stroke style`）と線、塗りつぶしの円弧を使用してどれが線なのかを描画しています。

```javascript
if (canvas.getContext) {
    // 輪郭線を描いたテキスト（白色）
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.lineWidth = 1;
    ctx.font = "20px fantasy";
    ctx.strokeText("stroke style", 110, 30);

    // 白色（線）のライン
    ctx.beginPath();
    ctx.moveTo(110, 30);
    ctx.lineTo(90, 45);
    ctx.closePath();
    ctx.strokeStyle="rgb(255, 255, 255)";
    ctx.stroke();

    // 白色（塗りつぶし）の円弧
    ctx.beginPath();
    ctx.arc(90, 45, 3, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();
}
```

`rgb(255, 255, 255)`（白色）のテキスト（`fill style`）と線、塗りつぶしの円弧を使用してどれが塗りつぶしなのかを描画しています。

```javascript
if (canvas.getContext) {
    // 塗りつぶしたテキスト（白色）
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = "20px fantasy";
    ctx.fillText("fill style", 100, 130);

    // 白色（線）のライン
    ctx.beginPath();
    ctx.moveTo(100, 115);
    ctx.lineTo(80, 90);
    ctx.closePath();
    ctx.strokeStyle="rgb(255, 255, 255)";
    ctx.stroke();

    // 白色（塗りつぶし）の円弧
    ctx.beginPath();
    ctx.arc(80, 90, 3, 0, Math.PI * 2);
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.fill();
}
```
<br>

### 座標変換

[scale.html](transform/scale.html "transform/scale.html")、[translate.html](transform/translate.html "transform/translate.html")、[set-transform.html](transform/set-transform.html "transform/set-transform.html")、[rotate.html](transform/rotate.html "transform/rotate.html")の組み合わせ

**共通設定**に記述してある`rgb(255, 255, 255)`（白色）の枠線の中に以下のものを順番に重ねて描画しています。

X軸を`20倍`、Y軸を`1倍`に拡大するように設定した`rgba(0, 0, 255, 0.5)`（半透明の青色）の矩形をX軸が`1px`、Y軸が`20px`の位置から幅を`13px`、高さを`110px`で描画しています。

```javascript
if (canvas.getContext) {
    // 青色（半透明）の矩形を拡大させて描画
    ctx.save();
    ctx.scale(20, 1);
    ctx.fillStyle = "rgba(0, 0, 255, 0.5)";
    ctx.fillRect(1, 20, 13, 110); // ctx.fillRect(20, 20, 260, 110); <= これと同じ
    ctx.restore();
}
```

上記で描画させた`rgb(0, 0, 255, 0.5)`（半透明の青色）の矩形の四隅に`rgba(255, 0, 255, 0.3)`（半透明の紫色）の幅と高さともに`40px`の矩形を`for`ループを使用して描画させています。

```javascript
if (canvas.getContext) {
    // forループで４個の紫色（半透明）の矩形を四隅に描画
    for (let i = 0; i &lt; 2; i++) { // ２行 textarea要素内で"<"（小なり）はエラーとなるため"&lt;"と記述しています
        for (let j = 0; j &lt; 2; j++) { // ２列 textarea要素内で"<"（小なり）はエラーとなるため"&lt;"と記述しています
            ctx.save();
            ctx.translate(20 + j * 220, 20 + i * 70);
            ctx.fillStyle = "rgba(255, 0, 255, 0.3)";
            ctx.fillRect(0, 0, 40, 40);
            ctx.restore();
        }
    }
}
```

CanvasRenderingContext2D.setTransform(伸縮x, 傾斜y, 傾斜x, 伸縮y, 移動x, 移動y)メソッドを使用して`rgba(255, 255, 0, 0.3)`（半透明の黄色）の傾斜付きの矩形を幅が`150px`、高さが`110px`で２つ描画させています。

```javascript
if (canvas.getContext) {
    // 黄色（半透明）の矩形に左から右に傾斜をつけて描画
    ctx.save();
    ctx.setTransform(1, 0, 1, 1, 20, 20);
    ctx.fillStyle = "rgba(255, 255, 0, 0.3)";
    ctx.fillRect(0, 0, 150, 110);
    ctx.restore();

    // 黄色（半透明）の矩形に右から左に傾斜をつけて描画
    ctx.save();
    ctx.setTransform(1, 0, -1, 1, 130, 20);
    ctx.fillStyle = "rgba(255, 255, 0, 0.3)";
    ctx.fillRect(0, 0, 150, 110);
    ctx.restore();
}
```

canvas領域内の真ん中に描画させた`rgba(0, 255, 0, 0.5)`（半透明の緑色）の矩形の上に`45度`回転させた`rgba(0, 255, 255, 0.5)`（半透明の水色）の矩形を描画させています。

```javascript
if (canvas.getContext) {
    // 緑色（半透明）の矩形をcanvas領域内の真ん中に描画
    ctx.save();
    ctx.fillStyle = "rgba(0, 255, 0, 0.5)";
    ctx.fillRect(125, 50, 50, 50);
    ctx.translate(150, 75);
    ctx.rotate((Math.PI / 180) * 45);
    ctx.translate(-150, -75);
    // 緑色（半透明）の矩形の中心で回転する水色（半透明）の矩形を描画
    ctx.fillStyle = "rgba(0, 255, 255, 0.5)";
    ctx.fillRect(125, 50, 50, 50);
    ctx.restore();
}
```
<br>

1. [animation.html](advanced/animation.html "advanced/animation.html")、[gradation.html](advanced/gradation.html "advanced/gradation.html")の組み合わせ
<br><br>

※ 日本時間 2024/09/27 にリファクタリングしました。
<br><br>

[完成ページへ](https://yscyber.github.io/canvas/ "https://yscyber.github.io/canvas/")
