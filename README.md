# banana-grid

## QuickStart
### Ease way
Just put this in the head of your html:
```html
<head>
	<link rel="stylesheet" href="https://unpkg.com/banana-grid@1.0.4/dist/banana-grid.min.css" />
	<script type="text/javascript" src="https://unpkg.com/banana-grid@1.0.4/dist/banana-grid.min.js"></script>
</head>
```

### Better way
#### Step 1:  Install with NPM
```bash
$ npm install --save banana-grid
```
#### Step 2:  Import the javascript
```typescript
import "banana-grid";
```
#### Step 3: import SCSS
```scss
@import "~/banana-grid/grid.scss";
```

### Helpers
#### cols and rows
```html
```


## screen breakpoints helpers
|		|		|	--x	|	--xx	|	--xxx	|
| --- | --- | --- | ---| --- |
|	unit	|	smartphone |	small tablet	|	tablet / small desktop | desktop	|
|	pixel	|	0	|	576	|	960	|	1152	|
|	8px grid	|	0	|	72	|	120	|	144	|
|	96px grid	|	0	|	6	|	10	|	12	|

### usage:
#### screen helper in size
```html
<section class="cols">
    <div class="gw-2 gw-3--xxx"> </div>
</section>
```
The DIV above will have a **width** of **192 px** in smartphones, tablets and small desktops (**screens smaller than 1152 px**) and  a **width** of **480 px** in desktops (**screens equal or bigger than 1152 px**)
#### screen helper in align
```html
<section class="cols">
	<div class="gw-1 left right--xx ">
</section>
```
The DIV above will align on the **left** in smartphones, tablets and small desktops (**screens smaller than 1152 px**) and on the **right** in desktops (**screens equal or bigger than 1152 px**)

## sizes
### fixed 8px grid size
| Width | Height | Pixel Size
|-- | -- | -- | 
| **G**rid **W**idth | **G**rid **H**eight | px |
|	.w-1 |	.h-1	|	8	|
|	.w-2 |	.h-2	|	16	|
|	.w-3 |	.h-3	|	24	|
|	.w-4 |	.h-4	|	32	|
|	... |	...	|	...	|
|	.w-40 |	.h-40	|	320	|
|	.w-41 |	.h-41	|	328	|
|	... |	...	|	...	|
|	.w-143 |	.h-143	|	1144	|
|	.w-144 |	.h-144	|	1152	|

### fixed 96px grid size
| Width | Height | Pixel Size | Grid Size |
|-- | -- | -- | -- |
| **G**rid **W**idth | **G**rid **H**eight | 8px grid  | px |
|	.gw-1 |	.gh-1	|	12	|	96	|
|	.gw-2	|	.gh-2	|	24	|	192	|
|	.gw-3	|	.gh-3	|	36	|	288	|
|	.gw-4	|	.gh-4	|	48	|	384	|
|	.gw-5	|	.gh-5	|	60	|	480	|
|	.gw-6	|	.gh-6	|	72	|	576	|
|	.gw-7	|	.gh-7	|	84	|	672	|
|	.gw-8	|	.gh-8	|	96	|	768	|
|	.gw-9	|	.gh-9	|	108	|	864	|
|	.gw-10	|	.gh-10	|	120	|	960	|
|	.gw-11  |	.gh-11	|	132	|	1056 |
|	.gw-12	|	.gh-12	|	144	|	1152 |

### fluid sizes
| **W**idth | **H**eight | Percent  |Fraction |
|-- | -- | -- | -- |
|  **W**idth **P**ercent | **H**eight  **P**ercent | %  |  |
|	.w-25p	|	.h-25p		|	25%	|	1 / 4	|
|	.w-33p	|	.h-33p		|	33.333%	|	1 / 3	|
|	.w-66p	|	.h-66p		|	66.666%	|	2 / 3	|
|	.w-75p	|	.h-75p		|	75%	|	3 / 4	|
|		|			|		|		|
|	.w-10p	|	.h-10p		|	10%	|	1 / 10	|
|	.w-20p	|	.h-20p		|	20%	|	2 /10	|
|	.w-30p	|	.h-30p		|	30%	|	3 / 10	|
|	.w-40p	|	.h-40p		|	40%	|	4 / 10	|
|	.w-50p	|	.h-50p		|	50%	|	5 /10	|
|	.w-60p	|	.h-60p		|	60%	|	6 / 10	|
|	.w-70p	|	.h-70p		|	70%	|	7 / 10	|
|	.w-80p	|	.h-80p		|	80%	|	8 /10	|
|	.w-90p	|	.h-90p		|	90%	|	9 / 10	|
|	.w-100p	|	.h-100p		|	100%	|	10 / 10	|

