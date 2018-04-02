# banana-grid

## QuickStart
### Ease way
Just put this in the head of your html:
```html
<head>
	<link rel="stylesheet" href="https://unpkg.com/banana-grid@1.4.7/dist/banana-grid.min.css" />
	<script type="text/javascript" src="https://unpkg.com/banana-grid@1.4.7/dist/main.min.js"></script>
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

### relative fluid sizes
| Width | Height | Fraction |
|-- | -- | -- | 
| **R**elative **W**idth | **R**relative **H**eight | --  |
|	.rw-1 |	.rh-1	|	1/12	|
|	.rw-2	|	.rh-2	|	2/12	|
|	.rw-3	|	.rh-3	|	3/12	|
|	.rw-4	|	.rh-4	|	4/12	|
|	.rw-5	|	.rh-5	|	5/12	|
|	.rw-6	|	.rh-6	|	6/12	|
|	.rw-7	|	.rh-7	|	7/12	|
|	.rw-8	|	.rh-8	|	8/12	|
|	.rw-9	|	.rh-9	|	8/12	|
|	.rw-10	|	.rh-10	|	10/12	|
|	.rw-11  |	.rh-11	|	11/12	|
|	.rw-12	|	.rh-12	|	12/12	|
